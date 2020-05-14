import React from 'react';
import FilterSection from './FilterSection';

export default class ContentLeft extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minVal: 10,
            maxVal: 10000
        };
    }

    onChangeSlider = (rangeVal) => {
        //console.log(min, max);
        let minVal = rangeVal && rangeVal[0] || 0;
        let maxVal = rangeVal && rangeVal[1] || 10000;
        this.setState({
            minVal,
            maxVal
        });
    }
    
    render() {
        let { applyFilter } = this.props.filterInfo || {};
        let filterValues = {
            minPrice: this.state.minVal,
            maxPrice: this.state.maxVal
        };
        return  <div className="content__left">
                    <h3 className="content__left__h3">Filters</h3>
                    <div className="content__left__filter">
                        <FilterSection onChangeSlider={this.onChangeSlider} filterVal={filterValues} />
                        <div className="--priceTxt">Price</div>
                        <div className="--applyBtn" onClick={() => applyFilter(filterValues)}>Apply</div>
                    </div>
                </div>
    }
} 