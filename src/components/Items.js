import React from "react";
import { useDispatch } from "react-redux";
import { incCart , decCart , delCart } from "../actions/index";

const Items = ({ id , title , description ,price ,img , quantity}) => {

  const dispatch = useDispatch();

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="Loading..."></img>
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() =>  dispatch(decCart(id))} ></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() =>  dispatch(incCart(id))}></i>
        </div>

        <div className="price">
          <h3>₹{price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick={() => dispatch(delCart(id))} ></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;