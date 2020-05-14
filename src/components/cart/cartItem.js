import React from 'react';

export default function CartItem(props) {
    let item = props.item && props.item.info || {};
    let qty = props.item && props.item.qty || 1;
    let { updateQty, increaseQty, decreaseQty, removeItem } = props.handleEvents || {};
    return <div className="cartBody__left__item">
                <div className="cartBody__left__item__col"><img width="90" alt="product" src={item.image} /></div>
                <div className="cartBody__left__item__col --h-align-left --v-align-top">
                    <div className="cartBody__left__item__name">{item.name}</div>
                    <div className="cartBody__left__item__price">
                        <span className="--salePrice">&#8377;{item.price.actual}</span>
                        <span className="--listPrice">{item.price.display}</span>
                        <span className="--discount">{item.discount}% off</span>
                    </div>
                    <div className="cartBody__left__item__qty --h-larg">
                        <span className="--minus" onClick={() => decreaseQty(item.id)}>-</span>
                        <input className="--qty" type="number" value={qty} onChange={(e) => updateQty(e, item.id)} />
                        <span className="--plus" onClick={() => increaseQty(item.id)}>+</span>
                    </div>
                    <div className="cartBody__left__item__remove --h-larg">
                        <span className="cartBody__left__item__col__link" onClick={() => removeItem(item.id)}>REMOVE</span>
                    </div>

                </div>
                <div className="cartBody__left__item__col --h-align-left --v-larg">
                    <span className="--minus" onClick={() => decreaseQty(item.id)}>-</span>
                    <input className="--qty" type="number" value={qty} onChange={(e) => updateQty(e, item.id)} />
                    <span className="--plus" onClick={() => increaseQty(item.id)}>+</span>
                </div>
                <div className="cartBody__left__item__col --h-align-left --v-larg">
                    <span className="cartBody__left__item__col__link" onClick={() => removeItem(item.id)}>REMOVE</span>
                </div>
            </div>
}