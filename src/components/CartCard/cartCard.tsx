import { IProductTemplate, useProductContext } from "../../context/context";
import { Li } from "../Card/style.card";

export const CartCard = (prod: IProductTemplate) => {
  const { image, title, price } = prod;
  const { deleteProduct } = useProductContext();
  return (
    <Li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={() => deleteProduct(prod)}>Remover do carrinho</button>
    </Li>
  );
};
