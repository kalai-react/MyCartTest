import React from 'react';

import CartLeft from './cartLeft';
import CartRight from './cartRight';

export default function CartBody(props) {
    return <div className="cartBody">
                <CartLeft cartPageInfo={props.cartPageInfo} searchInfo={props.searchInfo} />
                <CartRight cartPageInfo={props.cartPageInfo} />
            </div>
}