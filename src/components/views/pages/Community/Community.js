import React from 'react';
import styled from 'styled-components';

function Community(props) {


    return (
        <div className={props.className}>
            Community Page
        </div>
    )
}

export default styled(Community)`
    height: 100vh;
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: gray;
`;
