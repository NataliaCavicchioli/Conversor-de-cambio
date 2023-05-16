import {
  useContext,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from "react";
import { api } from "../services";
import { IRates } from "../interfaces";

interface IConversorContext {
  firstAmount: number;
  secondAmount: number;
  firstCurrency: string;
  secondCurrency: string;
  rates: IRates;
  handleFirstAmount: (firstAmount: number) => void;
  handleFirstCurrency: (firstCurrency: string) => void;
  handleSecondAmount: (secondAmount: number) => void;
  handleSecondCurrency: (secondCurrency: string) => void;
  handleSwitch: () => void;
  handleResult: () => void;
  showResult: boolean;
}

interface IConversorProps {
  children: ReactNode;
}

export const ConversorContext = createContext<IConversorContext>(
  {} as IConversorContext
);

export const ConversorContextProvider = ({ children }: IConversorProps) => {
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState("brl");
  const [secondCurrency, setSecondCurrency] = useState("usd");
  const [showResult, setShowResult] = useState(false);
  const [rates, setRates] = useState<IRates>({});

  useEffect(() => {
    api
      .get("usd.json")
      .then((res) => setRates(res.data.usd))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleFirstAmount(1);
    }
  }, [rates]);

  const format = (number: any) => {
    return number.toFixed(2);
  };

  const handleFirstAmount = (firstAmount: number) => {
    setSecondAmount(
      format((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstAmount(firstAmount);
  };

  const handleFirstCurrency = (firstCurrency: string) => {
    setSecondAmount(
      format((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstCurrency(firstCurrency);
  };

  const handleSecondAmount = (secondAmount: number) => {
    setFirstAmount(
      format((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondAmount(secondAmount);
  };

  const handleSecondCurrency = (secondCurrency: string) => {
    setFirstAmount(
      format((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondCurrency(secondCurrency);
  };

  const handleSwitch = () => {
    let auxAmount = firstAmount;
    let auxCurrency = firstCurrency;

    setFirstAmount(secondAmount);
    setSecondAmount(auxAmount);

    setFirstCurrency(secondCurrency);
    setSecondCurrency(auxCurrency);
  };

  const handleResult = () => {
    setShowResult(!showResult);
  };

  return (
    <ConversorContext.Provider
      value={{
        handleFirstAmount,
        handleFirstCurrency,
        handleSecondAmount,
        handleSecondCurrency,
        handleSwitch,
        handleResult,
        firstAmount,
        firstCurrency,
        secondAmount,
        secondCurrency,
        rates,
        showResult,
      }}
    >
      {children}
    </ConversorContext.Provider>
  );
};

export const useConversorContext = () => useContext(ConversorContext);
