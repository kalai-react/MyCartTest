import React from 'react';

export default function ProductList(props) {
    let items = props.items || [];
    let {minPrice, maxPrice} = props.filterInfo || {};
    return  <div className="content__right__list">
                {
                items.length > 0 && items.map((item, index) => {
                    let price = item && item.price && item.price.actual || 0;
                    if(minPrice <= price && price <= maxPrice) {
                        return <div key={index} className="content__right__list__item">
                                <div><img width="160" alt="product" src={item.image} /></div>
                                <div className="content__right__list__item__name">{item.name}</div>
                                <div className="content__right__list__item__price">
                                    <span className="--salePrice">&#8377;{item.price.actual}</span>
                                    <span className="--listPrice">{item.price.display}</span>
                                    <span className="--discount">{item.discount}% off</span>
                                </div>
                                <div className="content__right__list__item__btn">
                                    <span className="--btn" onClick={() => props.addToCart(item.id, item)}>Add to Cart</span>
                                </div>
                            </div>
                    }
                }) 
                }
            </div>
}