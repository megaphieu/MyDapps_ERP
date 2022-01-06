import React from "react";
import "./Product.scss";

function Product(props) {
    let qualityColor;
    switch (props.data.quality) {
        case "GOOD":
            qualityColor = "green";
        case "AVERAGE":
            qualityColor = "yellow";
        default:
            qualityColor = "red";
    }

    return (
        <div className="card">
            <div className="card__img">
                <img
                    src="https://previews.123rf.com/images/vladklok/vladklok1809/vladklok180900059/118475995-vector-meat-packaging-illustration-black-foam-meat-tray-with-plastic-film-mockup-modern-style-butche.jpg"
                    alt=""
                />
            </div>

            <div className="card__body">
                <h4 className="card__body__title">Product code: {props.data.code}</h4>
                <p className="card__body__text">Temperature info: {props.data.tempInfo}</p>
                <p className="card__body__text">Score: {props.data.score}</p>
                <p className={"card__body__text " + qualityColor}>Quality: {props.data.quality}</p>
            </div>

        </div>
    );
}

export default Product;
