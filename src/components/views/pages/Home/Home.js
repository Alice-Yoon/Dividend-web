import React, { useState, useEffect } from 'react';
import Header from '../../commons/Header';
import GridCards from './Section/GridCards';
import Calendar from './Section/Calendar';

import {gridCardDummy} from '../../../non-views/dummy/gridCardDummy';

function Home() {

    const [gridCardData, setGridCardData] = useState([]);

    useEffect(() => {
        setGridCardData(gridCardDummy);
    }, []);

    console.log("gridCardData", gridCardData)

    
    
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
            <Header />
            
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
        </div>
    )
}

export default Home;