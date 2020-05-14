import React from 'react';
import ReactSlider from 'react-slider';

import './Slider.css';

export default function FilterSection(props) {
    let { minVal = 10, maxVal = 100000 } = props.filterVal || {};
    return  <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[minVal, maxVal]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}><span className="slideTxt">&#8377;{state.valueNow}</span></div>}
                pearling
                minDistance={50}
                onChange={(a, b) => props.onChangeSlider(a, b)}
                max={100000}
                min={1}
            />
}