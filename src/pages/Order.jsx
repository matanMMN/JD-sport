import "./Order.css";
import shoppingicon from "./Products-images/shoppingicon.png";
import Product from "../components/Product/Product";
import Cart from "../pages/Cart";
import { useState } from "react";
import data from "../data";

export default function Order(props) {
  const [basket, setBasket] = useState([]);
  const [inCart, setInCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  function showCart() {
    setOpenCart(!openCart);
  }

  const onCartClick = () => {
    setInCart(true);
  };

  const { subMenus } = data;

  const addToBasket = (item) => {
    const inBasket = basket.find((x) => x.id === item.id);
    if (inBasket) {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...inBasket, num: inBasket.num + 1 } : x
        )
      );
    } else {
      setBasket([...basket, { ...item, num: 1 }]);
    }
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromBasket = (item) => {
    setBasket(basket.filter((x) => x.id !== item.id));
    setTotalPrice(totalPrice - item.price);
    console.log(basket);
  };

  return (
    <div>
      {inCart ? (
        <Cart
          basket={basket}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          removeFromBasket={removeFromBasket}
          setBasket={setBasket}
        />
      ) : (
        <div>
          <div className="icon-shopping">
            <img
              className="cart-img"
              onClick={(onCartClick, showCart)}
              src={shoppingicon}
            />
          </div>
          {openCart ? (
            <Cart
              basket={basket}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              removeFromBasket={removeFromBasket}
              setBasket={setBasket}
            />
          ) : (
            ""
          )}
          {basket.length > 0 ? (
            <div className="qty-circule">
              <div className="qty-text">{basket.length}</div>
            </div>
          ) : (
            <div className="qty-circule-emptry"></div>
          )}
          ;
          <div className="all-orders">
            {subMenus.map((subMenu) => (
              <div key={subMenu.name}>
                <h1 className="title">{subMenu.name}</h1>
                <div className="orders" id="Sports">
                  {subMenu.items.map((item) => (
                    <Product
                      key={item.id}
                      className="sport-img"
                      product={item}
                      addToCart={addToBasket}
                      removeFromBasket={removeFromBasket}
                      setBasket={setBasket}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
