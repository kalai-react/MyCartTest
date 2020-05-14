import React from 'react';
import { Link } from "react-router-dom";

export default function CartIcon(props) {

    return <span className="header__right__cart">
                <Link to="/cart">
                    <i className="fa fa-shopping-cart header__right__cart__icon"></i>
                </Link>
                <span className="header__right__cart__count">{props.cartCount}</span>
            </span>
}