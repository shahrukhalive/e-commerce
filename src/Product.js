/* eslint-disable no-unused-vars */
import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id,title, image, price, rating }){
  const [{basket},dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i)=> (
              <p> &#9733;</p>
            ))}
            
            
        </div>
      </div>

      <img src={image} alt="laptop"
      />
        
        
          <button onClick={addToBasket} >add to basket</button>
        
    </div>
  );
}

export default Product;
