import React from 'react';
import NavBar from '../../commons/NavBar';

function MyPage() {

    const myPageStyle = {
        // border: '3px solid aqua',
        width: '90%',
        margin: '0 auto'
    }


    return (
        <div style={myPageStyle}>
            <NavBar />
            My Page
        </div>
    )
}

export default MyPage;