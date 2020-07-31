import React from 'react';
import NavBar from '../../commons/NavBar';

function Community() {

    const communityStyle = {
        // border: '3px solid aqua',
        width: '90%',
        margin: '0 auto'
    }

    return (
        <div style={communityStyle}>
            <NavBar />
            Community Page
        </div>
    )
}

export default Community;
