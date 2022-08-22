import { IProductTemplate, useProductContext } from "../../context/context";
import { Li } from "./style.card";

export const Card = (prod: IProductTemplate) => {
  const { buyProduct } = useProductContext();
  return (
    <Li>
      <img src={prod.image} alt={prod.title} />
      <h3>{prod.title}</h3>
      <p>{prod.price}</p>
      <button onClick={() => buyProduct(prod)}>Adicionar ao carrinho</button>
    </Li>
  );
};
