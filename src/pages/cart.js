import React from 'react';

import HeaderSection from '../components/header/HeaderSection';
import FooterSection from '../components/footer/FooterSection';
import CartBody from '../components/cart/CartBody';

export default function CartPage(props) {
    return  <React.Fragment>
                <HeaderSection searchInfo={props.searchInfo} />
                <CartBody cartPageInfo={props.cartPageInfo} searchInfo={props.searchInfo} />
                <FooterSection />
            </React.Fragment>
}
