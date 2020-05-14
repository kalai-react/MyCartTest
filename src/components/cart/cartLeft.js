import React from 'react';

import CartItem from './cartItem';

export default function CartLeft(props) {
    let data = props.cartPageInfo && props.cartPageInfo.selectedProduct || [];
    let searchTxt = props.searchInfo && props.searchInfo.searchTxt || ''
    //console.log("data", data)
    return <div className="cartBody__left">
                { data.length > 0 && data.map((item, index) => {
                    if(item) {
                        let pName = item.info && item.info.name || '';
                        if(pName.toLowerCase().startsWith(searchTxt))
                            return <CartItem key={index} item={item} searchTxt={searchTxt} handleEvents={props.cartPageInfo.handleEvents} />
                    }
                })}
                {
                    data.length === 0 && <div className="cartBody__left__empty">There is no item in cart.</div>
                }
            </div>
}