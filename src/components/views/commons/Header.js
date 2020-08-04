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

            <div className="card-section">
                <CarouselSlider showCard={showCard} />
                <ProgressBar progressData={progressData} />
                <img src={joodal} alt="joodal" className="joodalStyle" onClick={onClickToggleHeader} />
            </div>
        </div>
    )
}

export default styled(Header)`
    /* border: 1px solid red; */
    font-size: 20px;
    margin: 50px 0;
    padding: 0 30px;
    display: flex;
    & {
        .card-section {
            border: 1px solid gray;
            border-radius: 8px;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
            background-color: #fff;
            padding: 30px;
            width: 50%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
        }
        .joodalStyle {
            /* border: 1px solid blue; */
            width: 150px;
            height: 150px;
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
        }
    }

`;