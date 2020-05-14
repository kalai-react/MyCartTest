import React from 'react';

export default function SearchSection(props) {
    let { searchTxt, searchOnChange } = props.searchInfo || {};
    return  <span className="header__right__searchDiv">
                <input type="text" placeholder="Search" value={searchTxt} onChange={(e) => searchOnChange(e)} />
                <span className="fa fa-search header__right__search"></span>
            </span>
}