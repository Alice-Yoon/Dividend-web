import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../../commons/Header';
import GridCards from './Section/GridCards';
// import Calendar from './Section/Calendar';

import {gridCardDummy} from '../../../non-views/dummy/gridCardDummy';
import calendar_dummy from '../../../non-views/img/calendar_dummy.png';
// Progress Bar Dummy Data
const testDataForProgressBar = {goal: 100, current: 60}


function Home(props) {

    // console.log('grid data', gridCardDummy)

    const [gridCardData, setGridCardData] = useState([]);

    useEffect(() => {

        setGridCardData(gridCardDummy);

    }, []);

    const onClickTab = (e) => {
        console.log("tab clicked!", e.target.id);

        const target = e.target.id;

        switch (target) {
            case "tab_all":
                console.log("All");
                break;
            case "tab_owned":
                console.log("보유주식");
                break;
            case "tab_interested":
                console.log("관심주식");
                break;
            default:
                console.log("default - All?")
        }
    }
    

    return (
        <div className={props.className}>
            <Header progressData={testDataForProgressBar} />
            
            {/* Home Page */}
            <main className="mainStyle">
                <section className="leftStyle">
                    <img src={calendar_dummy} alt="calendar_dummy" className="dummyCalendarStyle" />
                    {/* <Calendar /> */}
                </section>
                <section className="rightStyle">
                    <div className="gridTabAreaStyle">
                        <span id="tab_all" className="tabBtnStyle" onClick={onClickTab}>All</span>
                        <span id="tab_owned" className="tabBtnStyle" onClick={onClickTab}>보유주식</span>
                        <span id="tab_interested" className="tabBtnStyle" onClick={onClickTab}>관심주식</span>
                    </div>
                    {gridCardData ? gridCardData.map(data => (
                        <GridCards data={data} />
                    )) : null}
                </section>
            </main>
        </div>
    )
}

export default styled(Home)`
    /* border: 3px solid aqua; */
    width: 100%;
    height: 100%;
    & {
        .mainStyle {
            /* border: 1px solid green; */
            display: flex;
            height: 100vh;

            .leftStyle {
                /* border: 1px solid yellow; */
                padding: 15px;
                flex: 1.5;
            }
            .rightStyle {
                /* border: 1px solid pink; */
                /* background-color: lightgray; */
                flex: 1;
                padding: 15px 10px;
                overflow: auto;
            }
            .gridTabAreaStyle {
                /* border: 1px solid red; */
                padding: 10px;
                margin-bottom: 10px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
            .tabBtnStyle {
                /* border: 1px solid blue; */
                cursor: pointer;
                background-color: black;
                border-radius: 10px;
                margin-left: 8px;
                padding: 3px 13px;
                color: #fff;
                font-size: 14px;
            }
        }
        .dummyCalendarStyle {
                width: 100%;
                height: 100%;
            }
    }
`;