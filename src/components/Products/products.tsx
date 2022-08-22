import { IProviderProps } from "../../context/context";
import { SectionContainer } from "./style.products";

export const Products = ({ children }: IProviderProps) => {
  return (
    <SectionContainer>
      <span>
        <h1>Products</h1>
      </span>
      <div>{children}</div>
    </SectionContainer>
  );
};
