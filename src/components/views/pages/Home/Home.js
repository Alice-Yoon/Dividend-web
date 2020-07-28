import React from 'react';
import Header from '../../commons/Header';
import GridCards from '../../commons/GridCards';
import Calendar from './Section/Calendar';

function Home() {
    
    const homeStyle = {
        // border: '3px solid aqua',
        width: '85%',
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
        flex: 1
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
                    right
                    <GridCards />
                </section>
            </main>
        </div>
    )
}

export default Home;