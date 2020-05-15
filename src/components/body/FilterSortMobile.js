import React from 'react';
import Modal from 'react-modal';

import FilterSection from './FilterSection';

import './FilterSortMobile.css';

export default function FilterSortMobile(props) {

    let { sortOption, changeSortOption } = props.sortInfo || {};
    const [sortVal, setSortVal] = React.useState(sortOption);


    /* For Sort option */
    let openModal_sort = () => {
        setIsOpen_sort(true);
    };
    
    let closeModal_sort = () => {
        setIsOpen_sort(false);
    };
    let afterOpenModal_sort = () => {
        setSortVal(sortOption);
    }

    const customStyles = {
        content : {
            top         : '50%',
            left        : '50%',
            right       : 'auto',
            bottom      : 'auto',
            marginRight : '-50%',
            transform   : 'translate(-50%, -50%)',
            width       : '250px'
        }
    };
    const [modalIsOpen_sort, setIsOpen_sort] = React.useState(false);
    /* For Sort option - End*/

    /* For Slider */
    let { minPrice, maxPrice, applyFilter } = props.filterInfo || {};
    const [filterVal, setFilterVal] = React.useState({minVal: minPrice, maxVal: maxPrice});
    let onChangeSlider = (rangeVal) => {
        let minVal = rangeVal && rangeVal[0] || 0;
        let maxVal = rangeVal && rangeVal[1] || 10000;
        setFilterVal({
            minVal,
            maxVal
        });
    }
    let filterValues_forSlider = {
        minVal: minPrice,
        maxVal: maxPrice
    };
    let filterValues_forApply = {
        minPrice: filterVal.minVal,
        maxPrice: filterVal.maxVal
    };
    /* For Slider - End */

    /* For Filter option */
    let openModal_filter = () => {
        setIsOpen_filter(true);
    };
    
    let closeModal_filter = () => {
        setIsOpen_filter(false);
    };
    let afterOpenModal_filter = () => {
        setFilterVal({minVal: minPrice, maxVal: maxPrice});
    }

    const [modalIsOpen_filter, setIsOpen_filter] = React.useState(false);
    /* For Filter option - End*/


    

    

    return <div className="content__right_filterSortSection">
                <div className="content__right_filterSort">
                    <div className="--filterSort" onClick={openModal_sort}><i className="fa fa-sort"></i><span>Sort</span></div>
                    <div className="--filterSort" onClick={openModal_filter}><i className="fa fa-filter"></i><span>Filter</span></div>
                </div>

                {/* Sort Modal */}
                <Modal
                    isOpen={modalIsOpen_sort}
                    onAfterOpen={afterOpenModal_sort}
                    onRequestClose={closeModal_sort}
                    style={customStyles}
                    contentLabel="Sort Modal"
                    >

                        {modalIsOpen_sort && 
                            <div className="--popup-body --sort-modal">
                                <h4>Sort Options</h4>
                                <label className="container" onClick={() => setSortVal(1)}>Price -- High Low
                                    <input type="radio" checked={(sortVal === 1) ? ('checked') : '' } name="sort_radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container" onClick={() => setSortVal(2)}>Price -- Low High
                                    <input type="radio" checked={(sortVal === 2) ? ('checked') : '' } name="sort_radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container" onClick={() => setSortVal(3)}>Discount
                                    <input type="radio" checked={(sortVal === 3) ? ('checked') : '' } name="sort_radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        }
                        <div className="--popup-bottom" >
                            <div onClick={closeModal_sort}>Cancel</div>
                            <div onClick={() => {changeSortOption(sortVal); closeModal_sort()}}>Apply</div>
                        </div>
                        
                    
                </Modal>

                {/* Filter Modal */}
                
                <Modal
                    isOpen={modalIsOpen_filter}
                    onAfterOpen={afterOpenModal_filter}
                    onRequestClose={closeModal_filter}
                    style={customStyles}
                    contentLabel="Filter Modal"
                    >

                        {
                        modalIsOpen_filter && 
                            <React.Fragment>
                                <div className="--popup-body">
                                    <h4>Filters Options</h4>
                                    <FilterSection onChangeSlider={onChangeSlider} filterVal={filterValues_forSlider}/>
                                    <div className="--popup-priceTxt">Price</div>
                                </div>
                                <div className="--popup-bottom" >
                                    <div onClick={closeModal_filter}>Cancel</div>
                                    <div onClick={() => {applyFilter(filterValues_forApply); closeModal_filter()}}>Apply</div>
                                </div>
                            </React.Fragment>
                        }
                    
                </Modal>
            </div>
}