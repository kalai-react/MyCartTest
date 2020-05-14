import React from 'react';

export default function CartRight(props) {
    let data = props.cartPageInfo && props.cartPageInfo.selectedProduct || [];

    let actualPrice = 0, displayPrice = 0, discountPrice = 0, itemCount = 0;
    
    data.map((item, index) => {
        if(item) {
            itemCount += item.qty;
            actualPrice += (item.info.price.actual * item.qty);
            displayPrice += (item.info.price.display * item.qty);
        }
    });
    discountPrice = displayPrice - actualPrice;

    return data.length > 0 && <div className="cartBody__right">
                <div className="cartBody__right__info">
                    <div className="cartBody__right__info_title">PRICE DETAILS</div>
                    <div className="cartBody__right__info__price">
                        <span className="--label">Price ( {itemCount === 1 ? (itemCount + ' item') : (itemCount + ' items')} )</span>
                        <span>:</span>
                        <span className="--amount">&#8377;{displayPrice}</span>
                    </div>
                    <div className="cartBody__right__info__discount">
                        <span className="--label">Discount</span>
                        <span>:</span>
                        <span className="--amount">&#8377;{discountPrice}</span>
                    </div>
                    <div className="cartBody__right__info__total">
                        <span className="--label">Total Payable</span>
                        <span className="--amount">&#8377;{actualPrice}</span>
                    </div>
                </div>
            </div>
}