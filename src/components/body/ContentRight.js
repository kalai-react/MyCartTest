import React from 'react';
import SortSection from './SortSection';
import ProductList from './ProductList';
import FilterSortMobile from './FilterSortMobile';

export default function ContentRight(props) {
    return <div className="content__right">
                <SortSection sortInfo={props.sortInfo} />
                <FilterSortMobile filterInfo={props.filterInfo} sortInfo={props.sortInfo} />
                <ProductList items={props.items} filterInfo={props.filterInfo} addToCart={props.addToCart} />
            </div>
}