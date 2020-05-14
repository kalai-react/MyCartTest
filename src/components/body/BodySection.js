import React from 'react';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';

export default function BodySection(props) {
    return <div className="content">
                <ContentLeft filterInfo={props.filterInfo} />
                <ContentRight items={props.items} filterInfo={props.filterInfo} sortInfo={props.sortInfo} addToCart={props.addToCart}/>
            </div>
}