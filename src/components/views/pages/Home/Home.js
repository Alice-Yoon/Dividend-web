import React, { useState, useEffect } from 'react';
import NavBar from '../../commons/NavBar';
import Header from '../../commons/Header';
import GridCards from './Section/GridCards';
import Calendar from './Section/Calendar';
import Search from '../Search/Search';

import {gridCardDummy} from '../../../non-views/dummy/gridCardDummy';


// Progress Bar Dummy Data
const testDataForProgressBar = {goal: 100, current: 40}


function Home() {

    const [gridCardData, setGridCardData] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(true);

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
        overflow: 'auto'
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