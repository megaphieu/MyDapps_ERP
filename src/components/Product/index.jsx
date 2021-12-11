import React from "react";
import "./Product.scss";

function Product(props) {
    return (
        <div className="card">
            <img className="card__img" src="favicon.ico" alt="" />
            <div className="card__body">
                <h4 className="card__body__title">{props.data.title}</h4>
                <p className="card__body__text">{props.data.text}</p>
            </div>
        </div>
    );
}

export default Product;
