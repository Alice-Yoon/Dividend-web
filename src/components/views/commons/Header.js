import React, { useState, useEffect } from 'react';
import ProgressBar from './charts/ProgressBar';
import joodal from '../../non-views/img/joodal.png';

function Header({progressData}) {

    const [nickName, setNickName] = useState('주린이');
    const [month, setMonth] = useState('7');
    const [price, setPrice] = useState('10,000');

    const headerStyle = {
        // border: '1px solid red',
        // borderBottom: '1px solid darkgray',
        padding: '30px',
        fontSize: '20px',
        paddingBottom: '50px',
        position: 'relative'
    }

    const sentenceStyle = {
        marginBottom: '30px'
    }

    const nickNameStyle = {
        fontWeight: 'bold',
        fontSize: '32px'
    }

    const pointLetterStyle = {
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#5e5e5e'
    }

    const joodalStyle = {
        // border: '1px solid blue',
        width: '180px',
        height: '180px',
        position: 'absolute',
        top: '30px',
        right: '50px',
    }

    return (
        <div style={headerStyle}>
            <p><span style={nickNameStyle}>{nickName}</span>님!</p>
            <p style={sentenceStyle}>
                <span style={pointLetterStyle}>{month}월 배당금</span>은 
                <span style={pointLetterStyle}>{price}원</span> 입니다.
            </p>

            <ProgressBar progressData={progressData} />

            <img src={joodal} alt="joodal" style={joodalStyle} />
        </div>
    )
}

export default Header;