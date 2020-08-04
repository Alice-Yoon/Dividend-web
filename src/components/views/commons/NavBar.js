import React from 'react';
import styled from 'styled-components';

import { SearchOutlined, BellOutlined } from '@ant-design/icons';

function NavBar(props) {

    const { openSearchModal } = props;
    

    // const onClickBellIcon = () => {
    //     console.log("bell icon clicked!")
    // }

    
    return (
        <div className={props.className}>
            <div className="container">
                <p className="title">주린이 달력</p>
                <div>
                    {/* <BellOutlined className="iconStyle" onClick={onClickBellIcon} /> */}
                    <SearchOutlined className="iconStyle" onClick={openSearchModal} />
                </div>
            </div>
        </div>
    )
}

export default styled(NavBar)`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 1;

    & {
        .container {
            /* border: 2px solid black; */
            background-color: #C4C4C4;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 50px;
        }
        .title {
            /* border: 1px solid red; */
            font-size: 25px;
            font-weight: bold;
        }
        .iconStyle {
            /* border: 1px solid blue; */
            font-size: 18px;
            margin-left: 20px;
            outline: none;
        }
    }
`;