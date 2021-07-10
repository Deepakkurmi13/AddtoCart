import React  from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { useDispatch } from 'react-redux';
import { resetCart } from "../actions/index"

const ContextCart = (props) => {

  const dispatch = useDispatch();

    return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Shopping Cart</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{props.totalItems} </p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{props.totalItems}</span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
               {props.Data.map((Element) => {
                 return (
                   <Items key={Element.id} {...Element}  />
                 )
               })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>₹{props.totalAmount}</span>
          </h3>
          <button className="clear-cart"  onClick={() => dispatch(resetCart())}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;