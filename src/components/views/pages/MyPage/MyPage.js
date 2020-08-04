import React from 'react';
import styled from 'styled-components';

import NavBar from '../../commons/NavBar';

function MyPage(props) {



    return (
        <div className={props.className}>
            <NavBar />
            My Page
        </div>
    )
}

export default styled(MyPage)`
    width: 90%;
    margin: 0 auto;
`;