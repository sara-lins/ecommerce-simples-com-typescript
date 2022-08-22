import { IProviderProps } from "../../context/context";
import { SectionContainer } from "../Products/style.products";

export const Cart = ({ children }: IProviderProps) => {
  return (
    <SectionContainer>
      <span>
        <h1>Cart</h1>
      </span>
      <div>{children}</div>
    </SectionContainer>
  );
};
