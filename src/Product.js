import React from 'react';
import "./Product.css";

function Product({title, image, price, rating }) {
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

        <button className="product__button">add to basket</button>
    </div>
  );
}

export default Product;
