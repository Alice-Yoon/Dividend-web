import React from 'react';
import styled from 'styled-components';

function MyPage(props) {



    return (
        <div className={props.className}>
            My Page
        </div>
    )
}

export default styled(MyPage)`
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