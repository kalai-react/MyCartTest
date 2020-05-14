import React from 'react';

import HeaderSection from '../components/header/HeaderSection';
import FooterSection from '../components/footer/FooterSection';
import BodySection from '../components/body/BodySection';

export default function Home(props) {
    return  <React.Fragment>
                <HeaderSection fromHomePage={true} cartCount={props.cartInfo.cartCount} searchInfo={props.searchInfo} />
                <BodySection items={props.items} filterInfo={props.filterInfo} sortInfo={props.sortInfo} addToCart={props.cartInfo.addToCart} />
                <FooterSection />
            </React.Fragment>
}
