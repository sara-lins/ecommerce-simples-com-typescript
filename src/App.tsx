import "./App.css";
import { Card } from "./components/Card/card";
import { Cart } from "./components/Cart/cart";
import { CartCard } from "./components/CartCard/cartCard";
import { Products } from "./components/Products/products";
import { useProductContext } from "./context/context";

function App() {
  const { list, listCart } = useProductContext();
  return (
    <div className="App">
      <Products>
        {list.map((prod, index) => (
          <Card
            image={prod.image}
            title={prod.title}
            price={prod.price}
            id={prod.id}
            key={index}
          />
        ))}
      </Products>
      <Cart>
        {listCart.length ? (
          listCart.map((prod, index) => (
            <CartCard
              image={prod.image}
              price={prod.price}
              title={prod.title}
              id={prod.id}
              key={index}
            />
          ))
        ) : (
          <div>
            <p>Cart is empty</p>
          </div>
        )}
      </Cart>
    </div>
  );
}

export default App;
