import React from 'react';
import { Link } from "react-router-dom";
import CartIcon from '../cart/cartIcon';
import SearchSection from '../body/SearchSection';

export default function HeaderSection(props) {
    return <header>
            <div className="header">
                <div className="header__left">
                    <Link to="/"><i className="fa fa-star header__left__star"></i></Link>
                </div>

                <div className="header__right">
                    <SearchSection searchInfo={props.searchInfo} />
                    {props.fromHomePage && 
                        <CartIcon cartCount={props.cartCount} />
                    }
                </div>
            </div>
        </header>
} 