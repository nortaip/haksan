import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../constants";

const Cards = ({ item }) => {
    return (
        <>
            {Product.map((el) => {
                return (
                    <div className="products-i " key={el.id}>
                        <div className="inline-flex flex-col space-y-4 items-start justify-start products-i" >
                            <img src={el.logo} className="inline-flex items-center justify-center " />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cards;