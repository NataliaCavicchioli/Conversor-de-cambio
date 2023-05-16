import { HiOutlineSwitchHorizontal } from "react-icons/hi";

import Footer from "../components/Footer";
import Input from "../components/Input";
import { useConversorContext } from "../context/conversor";
import { MainBox } from "./styles";
import { Button } from "../components/Button/styles";

const MainPage = () => {
  const {
    firstAmount,
    firstCurrency,
    secondAmount,
    secondCurrency,
    handleFirstAmount,
    handleFirstCurrency,
    handleSecondAmount,
    handleSecondCurrency,
    handleSwitch,
    handleResult,
    rates,
    showResult,
  } = useConversorContext();

  return (
    <MainBox>
      <h1 className="App">Conversor</h1>
      <div className="content--box">
        <div className="box--column">
          <h2>Valor a converter:</h2>
          <Input
            currencies={Object.keys(rates)}
            amount={firstAmount}
            onAmountChange={handleFirstAmount}
            currency={firstCurrency}
            onCurrencyChange={handleFirstCurrency}
          />
        </div>
        <Button
          fontSize="20px"
          width="35px"
          height="30px"
          onClick={handleSwitch}
        >
          <HiOutlineSwitchHorizontal />
        </Button>
        <div className="box--column">
          <h2>Valor convertido:</h2>
          <Input
            currencies={Object.keys(rates)}
            amount={secondAmount}
            onAmountChange={handleSecondAmount}
            currency={secondCurrency}
            onCurrencyChange={handleSecondCurrency}
          />
        </div>
      </div>
      <div className="result--box">
        <Button
          fontSize="15px"
          width="fit-content"
          height="fit-content"
          onClick={handleResult}
        >
          {showResult ? "Esconder Resultado" : "Mostrar Resultado"}
        </Button>
        {showResult ? (
          <p>
            Total: {secondAmount} de {secondCurrency.toUpperCase()}
          </p>
        ) : null}
      </div>
      <Footer />
    </MainBox>
  );
};

export default MainPage;
