import React from "react";

function Product() {
  return (
    <div className="card">
      <img className="card__img" src="favicon.ico" alt="" />
      <div className="card__body">
        <h4 className="card__body__title">Product Title</h4>
        <p className="card__body__text">Product Text</p>
      </div>
    </div>
  );
}

export default Product;
