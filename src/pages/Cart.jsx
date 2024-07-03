import "./Cart.css";
import minusButton from "./Cart-images/minusButton.png";
import XButton from "./Cart-images/XButton.png";
import plusButton from "./Cart-images/plusButton.png";
import { useState } from "react";

//card card Details function
export default function Cart(props) {

  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    id: "",
    date: "",
    cvc: "",
  });

  const onPay = () => {
    console.log(cardDetails);
    alert("תודה "  +cardDetails.name+", ההזמנה נשלחה בהצלחה. ");
  };

  //save the card details as obj
  function handleDetailsChange({ target }) {
    switch (target.name) {
      case "card-name":
        setCardDetails((prevState) => ({ ...prevState, name: target.value }));
        break;
      case "card-number":
        setCardDetails((prevState) => ({
          ...prevState,
          cardNumber: target.value,
        }));
        break;
      case "card-id":
        setCardDetails((prevState) => ({ ...prevState, id: target.value }));
        break;
      case "card-date":
        setCardDetails((prevState) => ({ ...prevState, date: target.value }));
        break;
      case "card-cvc":
        setCardDetails((prevState) => ({ ...prevState, cvc: target.value }));
        break;
    }
  }
  // on click open Payment box
  const { basket, totalPrice, setTotalPrice, removeFromBasket, setBasket } =
    props;
  const [goPay, setGoPay] = useState(false);

  function openPayment() {
    setGoPay(!goPay);
  }
  console.log(goPay);
  //add to basket function
  const addQty = (obj) => {
    const itemInBasket = basket.find((x) => x.id === obj.item.id);
    console.log(basket);

    setBasket(
      basket.map((x) =>
        x.id === obj.item.id
          ? { ...itemInBasket, num: itemInBasket.num + 1 }
          : x
      )
    );
    setTotalPrice(totalPrice + obj.item.price);
  };

  //remove from basket function
  const removeQty = (obj) => {
    setTotalPrice(totalPrice - obj.item.price);
    const itemInBasket = basket.find((x) => x.id === obj.item.id);
    console.log(basket);

    if (itemInBasket.num === 1) {
      removeFromBasket(obj.item);
    } else {
      setBasket(
        basket.map((x) =>
          x.id === obj.item.id
            ? { ...itemInBasket, num: itemInBasket.num - 1 }
            : x
        )
      );
    }
  };
  return (
    <div>
      <div className="popup-box">
        <div className="box">
          <div className="popup-div-title">
            <div className="popup-title">עגלה</div>
          </div>

          <a href="/Order">
            <button className="btn-X" type="button">
              <img src={XButton} onClick={props.closePopup} />
            </button>
          </a>
          <hr className="hr-popup"></hr>
          <div className="popup-orders">
            <div className="cart-container" id="cart">
              {basket.map((item) => (
                <div key={item.id} className="item-container" id="cart">
                  <img className="img-popup" src={item.img} />
                  <h1 className="subTitle-popup">{item.name}</h1>
                  <div className="about-popup">{item.about}</div>

                  <div className="ButtonPlusMinus-container" id="cart">
                    <div> כמות:</div>
                    <button
                      className="ButtonPlus"
                      type="button"
                      onClick={() => addQty({ item })}
                    >
                      <img src={plusButton} />
                    </button>

                    <div className="qty-container" id="cart">
                      {item.num}
                    </div>

                    <button
                      className="ButtonMinus"
                      type="button"
                      onClick={() => removeQty({ item })}
                    >
                      <img src={minusButton} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="hr-popup"></hr>

          <div className="payment-popup">
            <div className="thePrice">סה"כ</div>
            <div className="btn-popup-container">
              <button className="btn-payment-popup" onClick={openPayment}>
                המשך לתשלום
              </button>
            </div>
            <div className="totalPrice-container"> {totalPrice} ש"ח</div>
          </div>
        </div>
      </div>
      <div className="parent-payment-container">
        {goPay ? (
          <div className="payment-container">
            <div className="title-pyment-container">
              <div className="inerary-container-title">תשלום</div>
              <div className="totalPrice-pyment-container">
                {totalPrice} ש"ח
              </div>
            </div>
            <hr className="hr-pymnet"></hr>
            <div>
              <div className="Details">
                <div className="name" id="card">
                  <label className="label-name">שם מלא:</label>
                  <br></br>
                  <input
                    className="card-name"
                    id="input"
                    type="text"
                    name="card-name"
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="number" id="card">
                  <label className="label-number">מספר כרטיס: </label>
                  <br></br>
                  <input
                    className="card-number"
                    id="input"
                    type="text"
                    name="card-number"
                    onChange={handleDetailsChange}
                  />
                </div>

                <div className="id" id="card">
                  <label className="label-id">מס' ת"ז: </label>
                  <br></br>
                  <input
                    className="card-id"
                    type="text"
                    id="input"
                    name="card-id"
                    onChange={handleDetailsChange}
                  />
                </div>

                <div className="date" id="card">
                  <label className="label-date">תוקף: </label>
                  <br></br>
                  <input
                    className="card-date"
                    id="input"
                    type="date"
                    name="card-date"
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="cvv" id="card">
                  <label className="label-cvc">ספרות אחורי: </label>
                  <br></br>
                  <input
                    className="card-cvc"
                    id="input"
                    type="cvc"
                    name="card-cvc"
                    onChange={handleDetailsChange}
                  />
                </div>
              </div>
            </div>
            <a href="/Order">
              <button className="btn-pay" onClick={onPay}>
                שלם
              </button>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
