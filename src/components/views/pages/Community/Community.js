import React from 'react';
import styled from 'styled-components';
import NavBar from '../../commons/NavBar';

function Community(props) {


    return (
        <div className={props.className}>
            <NavBar />
            Community Page
        </div>
    )
}

export default styled(Community)`
    width: 90%;
    margin: 0 auto;
`;
