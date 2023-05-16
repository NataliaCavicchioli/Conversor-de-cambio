import { Dispatch, SetStateAction } from "react";

export interface IPropsInput {
  amount: number;
  currency: string;
  currencies: string[];
  setAmount?: Dispatch<SetStateAction<string>>;
  onAmountChange?: (firstAmount: number) => void;
  onCurrencyChange?: (firstCurrency: string) => void;
}

export interface IRates {
  [key: string]: number;
}

export interface IButtonProps {
  width: string;
  height: string;
  fontSize: string;
}
