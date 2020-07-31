import React, { useState, useEffect } from 'react';
import clam from '../../../../non-views/img/clam.png';
import tag_filled from '../../../../non-views/img/tag_filled.png';

function GridCards({ data }) {

    // isDividendDate ? '배당지급일' : '배당락일 D-3'
    const [isDividendDate, setIsDividendDate] = useState(true);

    // owned ? '보유-clam' : 'tag_filled'
    const [isOwned, setIsOwned] = useState(true);

    useEffect(() => {
        setIsDividendDate(data.isDividendDate);
        setIsOwned(data.isOwned);
    }, []);

    // 현재는 dummy data 가져옴
    console.log("inside grid", data);

    const endSectionContents = () => {
        if(isOwned) {
            return ( 
            <>
            <img src={clam} alt="clam" style={iconStyle_clam} />
            <span>$ 97.26</span>
            <small>보유</small>
            </>
            );
        } else {
            return <img src={tag_filled} alt="clam" style={iconStyle_tag} />
        }
    }

    const cardContainerStyle = {
        border: '1.3px solid lightgray',
        borderLeft: `2.5px solid ${isDividendDate ? 'green' : 'orange'}`,
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px',
        backgroundColor: '#fff',
        padding: '10px 15px',
        display: 'flex',
        marginBottom: '20px',
        // width: '85%'
    }

    // Section Styles - left, right, end
    const leftSectionStyle = {
        // border: '2px solid red',
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center'
    }
    
    const rightSectionStyle = {
        // border: '2px solid green',
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center'
    }

    const endSectionStyle = {
        // border: '2px solid yellow',
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
    }

    // Left Section contents styles
    const smallBoxStyle = {
        border: '1px solid gray',
        padding: '3px 5px',
        fontSize: '0.8rem',
        color: 'gray'
    }

    const companyNameStyle = {
        // border: '1px solid blue',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        margin: '0',
        marginTop: '3px'
    }

    // Right Section contents styles
    const rightSection_Top = {
        // border: '1px solid red',
        paddingRight: '20px',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const rightSection_Bottom = {
        // border: '1px solid blue',   
    }

    const expected_dividend = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0',
        // textAlign: 'center'
    }

    // End Section contents styles
    const iconStyle_clam = {
        // border: '1px solid green',
        width: '40px',
        height: '30px',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
    }

    const iconStyle_tag = {
        // border: '1px solid red',
        width: '55px',
        height: '60px',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
    }



    return (
        <div style={cardContainerStyle}>
            <div style={leftSectionStyle}>
                {/* 배당락일 | 배당지급일 */}
                <div>
                    <span style={smallBoxStyle}>
                        {isDividendDate ? '배당지급일' : '배당락일 D-3'}
                    </span>
                </div>
                {/* 회사 이름 */}
                <p style={companyNameStyle}>Nike Inc</p>
            </div>
            <div style={rightSectionStyle}>
                <div style={rightSection_Top}>
                    {/* 배당률 ~% */}
                    <span>배당률 5.2%</span>
                    {/* 예상 배당금 */}
                    <span>예상 배당금</span>
                </div>
                <div style={rightSection_Bottom}>
                    {/* $ 2.7 */}
                    <p style={expected_dividend}>$ 2.7</p>
                </div>
            </div>
            <div style={endSectionStyle}>

                {endSectionContents()}

            </div>
        </div>
    )
}

export default GridCards;