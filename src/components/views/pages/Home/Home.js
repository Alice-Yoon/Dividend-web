import React, { useState, useEffect } from 'react';

import NavBar from '../../commons/NavBar';
import Header from '../../commons/Header';
import GridCards from './Section/GridCards';
import Calendar from './Section/Calendar';
import Search from '../Search/Search';

import {gridCardDummy} from '../../../non-views/dummy/gridCardDummy';


// Progress Bar Dummy Data
const testDataForProgressBar = {goal: 100, current: 60}


function Home() {

    // console.log('grid data', gridCardDummy)

    const [gridCardData, setGridCardData] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleTab, setToggleTab] = useState();

    useEffect(() => {
        setGridCardData(gridCardDummy);
    }, []);

    // console.log("gridCardData", gridCardData)


    const openSearchModal = () => {
        setToggleSearch(true);
    }

    const closeSearchModal = () => {
        setToggleSearch(false);
    }

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
    
    
    const homeStyle = {
        // border: '3px solid aqua',
        width: '90%',
        margin: '0 auto'
    }

    const mainStyle = {
        border: '1px solid green',
        display: 'flex',
        height: '100vh'
    }

    const leftStyle = {
        border: '1px solid yellow',
        flex: 1.5
    }

    const rightStyle = {
        border: '1px solid pink',
        flex: 1,
        backgroundColor: 'lightgray',
        padding: '15px 10px',
        overflow: 'auto',
    }

    const gridTabAreaStyle = {
        // border: '1px solid red',
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    const tabBtnStyle = {
        // border: '1px solid blue',
        cursor: 'pointer',
        backgroundColor: 'black',
        borderRadius: '10px',
        marginLeft: '8px',
        padding: '3px 13px',
        color: '#fff',
        fontSize: '14px'
    }

    return (
        <div style={homeStyle}>
            <NavBar openSearchModal={openSearchModal} Home />
            <Header progressData={testDataForProgressBar} />
            
            {/* Home Page */}
            <main style={mainStyle}>
                <section style={leftStyle}>
                    left
                    <Calendar />
                </section>
                <section style={rightStyle}>
                    <div style={gridTabAreaStyle}>
                        <span id="tab_all" style={tabBtnStyle} onClick={onClickTab}>All</span>
                        <span id="tab_owned" style={tabBtnStyle} onClick={onClickTab}>보유주식</span>
                        <span id="tab_interested" style={tabBtnStyle} onClick={onClickTab}>관심주식</span>
                    </div>
                    {gridCardData ? gridCardData.map(data => (
                        <GridCards data={data} />
                    )) : null}
                </section>
            </main>

            <Search toggleSearch={toggleSearch} closeSearchModal={closeSearchModal} />
        </div>
    )
}

export default Home;