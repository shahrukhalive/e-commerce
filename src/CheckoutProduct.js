/* eslint-disable no-unused-vars */
import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket=()=>{
        //remove items
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="classname checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>&#8377;</small>
            <strong>{price}</strong>
          </p>
          <div className="classname checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p> &#9733;</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    );
}

export default CheckoutProduct

