import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

function NavBar(props) {

    const { openSearchModal, Home } = props;
    

    const onClickBellIcon = () => {
        console.log("bell icon clicked!")
    }

    const getSearchTab = () => {
        return <div>
                    <BellOutlined className="iconStyle" onClick={onClickBellIcon} />
                    <SearchOutlined className="iconStyle" onClick={openSearchModal} />
                </div>
    }

    return (
        <div className={props.className}>
            <div>
                <Link to="/" className="listStyle" active="true">Home</Link>
                <Link to="/community" className="listStyle">Community</Link>
                <Link to="/mypage" className="listStyle">MyPage</Link>
            </div>
            {Home ? getSearchTab() : null}
        </div>
    )
}

export default styled(NavBar)`
    /* border: 1px solid blue; */
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    & {
        .listStyle {
            text-decoration: none;
            padding: 0 5px;
            border-right: 1px solid black;
            color: black;
        }
        .iconStyle {
            font-size: 18px;
            margin-left: 20px;
            outline: none;
        }
    }
`;