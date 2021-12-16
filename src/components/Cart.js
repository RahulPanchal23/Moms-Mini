import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector(state => state.cart);
  const CartsData = () => {
    return cart.map(item => (
      <div className="item">
        <img src={item.img} />
        <div className="itemdesc">
          <h2>{item.name}</h2>
          <p>Rs. {item.price}</p>
        </div>
      </div>
    ));
  };

  let Total = 0;
  cart.map(i => (Total += i.price));
  return (
    <div className="cart">
      <div className="cartContainer">
        <h2>Cart</h2>
        <div className="cContainer">
          <div className="itemContainer">
            <CartsData />
            {/* <div className="item">
              <img src="3.png" />
              <div className="itemdesc">
                <h2>Name</h2>
                <p>Price</p>
              </div>
            </div>
            <div className="item">
              <img src="3.png" />
              <div className="itemdesc">
                <h2>Name</h2>
                <p>Price</p>
              </div>
            </div> */}
          </div>
          <div className="orderSummary">
            <h2>Order Summary</h2>
            <p>Total Price: Rs. {Total}</p>
            <a>Confirm Order</a>
          </div>
        </div>
      </div>
      {/* <CartsData /> */}
    </div>
  );
}

export default Cart;
