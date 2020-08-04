import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselSlider from '../commons/CarouselSlider';
import ProgressBar from './charts/ProgressBar';
import joodal from '../../non-views/img/joodal.png';

function Header(props) {

    const {progressData} = props;

    const [showCard, setShowCard] = useState(true);

    const onClickToggleHeader = () => {
        // true - 주린이님~ || false - 7월 요약
        setShowCard(!showCard);
    }

    
    return (
        <div className={props.className}>
            
            <CarouselSlider showCard={showCard} />
            <ProgressBar progressData={progressData} />

            <img src={joodal} alt="joodal" className="joodalStyle" onClick={onClickToggleHeader} />
        </div>
    )
}

export default styled(Header)`
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    padding: 30px;
    font-size: 20px;
    padding-bottom: 50px;
    position: relative;
    margin: 50px 0;
    & {
        .joodalStyle {
            width: 180px;
            height: 180px;
            position: absolute;
            top: 30px;
            right: 50px;
            cursor: pointer;
        }
    }

`;