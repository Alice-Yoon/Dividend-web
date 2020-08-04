import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function ProgressBar(props) {

    const [goalDividend, setGoalDividend] = useState(0);
    const [currentDividend, setCurrentDividend] = useState(0);
    const [completedPercent, setCompletedPercent] = useState(0);
    
    const { goal, current } = props.progressData;

    useEffect(() => {

        setGoalDividend(goal);
        setCurrentDividend(current);
        setCompletedPercent(current/goal*100);

    }, []);

    const barStyle = {
        // border: '1px solid red',
        borderRadius: 'inherit',
        // backgroundColor: '#838383',
        backgroundColor: 'salmon',
        height: '100%',
        width: `${completedPercent}%`,
        paddingLeft: '15px',
        position: 'absolute',
        left: '0',
        top: '0',
        textAlign: 'left',
        fontSize: '20px',
        color: '#fff',
        transition: 'width 1s ease-in-out',
        WebkitTransition: 'width 1s ease-in-out',
        MozTransition: 'width 1s ease-in-out',
        OTransition: 'width 1s ease-in-out'
    }

    const barStyle_withoutData= {
        borderRadius: 'inherit',
        backgroundColor: '#838383',
        height: '100%',
        width: '40px',
        paddingLeft: '15px',
        position: 'absolute',
        left: '0',
        top: '0',
        textAlign: 'left',
        fontSize: '20px',
        color: '#fff',
    }

    


    return (
        <div className={props.className}>
            <div style={completedPercent === 0 || !completedPercent ? barStyle_withoutData : barStyle}>
                <span>${currentDividend === 0 || !currentDividend ? '0' : currentDividend}</span>
            </div>
            <span>내 목표 ${goalDividend === 0 || !goalDividend ? '0' : goalDividend}</span>
        </div>
    )
}

export default styled(ProgressBar)`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #dee3e2;
    height: 20px;
    width: 95%;
    margin-top: 10px;
    font-size: 15px;
    text-align: right;
    padding: 2px 10px;
    position: relative;
`;