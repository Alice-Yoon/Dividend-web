import React from 'react'

function DefaultCards() {
    const cardContainerStyle = {
        borderRadius: '15px',
        backgroundColor: '#e8e9ec',
        padding: '10px 15px',
        display: 'flex',
        margin: '30px 60px',
        // width: '80%'
    }

    // Section Styles - left, right, end
    const leftSectionStyle = {
        // border: '2px solid red',
        flex: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center'
    }
    
    const rightSectionStyle = {
        // border: '2px solid green',
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center'
    }


    // Left Section contents styles
    const smallBoxStyle = {
        // border: '1px solid gray',
        borderRadius: '7px',
        backgroundColor: 'lightpink',
        padding: '3px 5px',
        fontSize: '0.8rem',
        marginRight: '8px'
    }

    const smallBoxStyle2= {
        // border: '1px solid gray',
        borderRadius: '7px',
        backgroundColor: '#E1F85D',
        padding: '3px 5px',
        fontSize: '0.8rem',
        marginRight: '5px'
    }

    const companyNameStyle = {
        // border: '1px solid blue',
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '0',
        marginTop: '3px'
    }

    // Right Section contents styles
    const rightSection_Top = {
        // border: '1px solid red',
        paddingRight: '8px',
        fontSize: '1rem',
        fontWeight: 'bold'
    }

    const rightSection_Bottom = {
        // border: '1px solid blue',   
    }

    const expected_dividend = {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        margin: '0',
        // textAlign: 'center'
    }




    return (
        <div>
            <div style={cardContainerStyle}>
            <div style={leftSectionStyle}>
                {/* 배당락일 | 배당지급일 */}
                <div>
                    <span style={rightSection_Top}>NKE</span>
                    <span style={smallBoxStyle}>배당귀족</span>
                    <span style={smallBoxStyle2}>고배당주</span>
                </div>
                {/* 회사 이름 */}
                <p style={companyNameStyle}>Nike Inc</p>
            </div>
            <div style={rightSectionStyle}>
                <div style={rightSection_Top}>
                    {/* 배당률 ~% */}
                    <span>평균 배당률 5.2%</span>
                </div>
                <div style={rightSection_Bottom}>
                    {/* $ 2.7 */}
                    <p style={expected_dividend}>$ 97.21</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DefaultCards;

