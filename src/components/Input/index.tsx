import { IPropsInput } from "../../interfaces";
import { InputBox } from "./styles";

const Input = ({
  amount,
  currencies,
  currency,
  onAmountChange,
  onCurrencyChange,
}: IPropsInput) => {
  return (
    <InputBox>
      <input
        type="text"
        value={amount}
        onChange={(event: any) => onAmountChange!(event.target.value)}
      />
      <select
        value={currency}
        onChange={(event) => onCurrencyChange!(event.target.value)}
      >
        {currencies?.map((elem: string, index) => (
          <option value={elem} key={index}>
            {elem}
          </option>
        ))}
      </select>
    </InputBox>
  );
};

export default Input;
