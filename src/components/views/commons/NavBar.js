import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

function NavBar() {

    const navBarStyle = {
        // border: '1px solid blue',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    }

    const listStyle = {
        textDecoration: 'none',
        padding: '0 5px',
        borderRight: '1px solid black',
        color: 'black'
    }

    const iconStyle = {
        fontSize: '18px',
        marginLeft: '20px',
        outline: 'none',

    }

    const onClickBellIcon = () => {
        console.log("bell icon clicked!")
    }

    const onClickSearchIcon = () => {
        console.log("search icon clicked!");
    }

    return (
        <div style={navBarStyle}>
            <div>
                <Link to="/" style={listStyle} active="true">Home</Link>
                <Link to="/community" style={listStyle}>Community</Link>
                <Link to="/mypage" style={listStyle}>MyPage</Link>
                <Link to="/search" style={listStyle}>Search</Link>
            </div>
            <div>
                <BellOutlined style={iconStyle} onClick={onClickBellIcon} />
                <SearchOutlined style={iconStyle} onClick={onClickSearchIcon} />
            </div>
        </div>
    )
}

export default NavBar;