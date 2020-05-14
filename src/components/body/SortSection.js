import React from 'react';

export default function SortSection(props) {
    let { sortOption, changeSortOption } = props.sortInfo || {};
    return  <div className="content__right__sort">
                <span className="content__right__sort__label">Sort By</span>
                <span className={"content__right__sort__option" +  ((sortOption === 1) ? ' --active' : '') } onClick={() => changeSortOption(1)}>Price -- High Low</span>
                <span className={"content__right__sort__option" +  ((sortOption === 2) ? ' --active' : '') } onClick={() => changeSortOption(2)}>Price -- Low High</span>
                <span className={"content__right__sort__option" +  ((sortOption === 3) ? ' --active' : '') } onClick={() => changeSortOption(3)}>Discount</span>
            </div>
}