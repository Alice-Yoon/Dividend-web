import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function NavBarVertical(props) {


    return (
        <div className={props.className}>
            <div className="container">
                <Link to="/" className="listStyle" active="true">Home</Link>
                <Link to="/community" className="listStyle">Community</Link>
                <Link to="/mypage" className="listStyle">MyPage</Link>
            </div>
        </div>
    )
}

export default styled(NavBarVertical)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;

    background-color: #D9D9D9;
    padding: 200px 0;
    & {
        .container {
            display: flex;
            flex-direction: column;
        }
        .listStyle {
            /* border: 1px solid black; */
            text-decoration: none;
            padding: 50px 5px;
            color: black;
            font-weight: bold;
            text-align: center;
            &:hover {
                background-color: black;
                color: #fff;
            }
        }
    }
`;