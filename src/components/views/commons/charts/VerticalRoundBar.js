import React from 'react';
// import { Progress } from 'antd';




function VerticalRoundBar() {

    const titleStyle = {
        fontSize: '15px',
    }

    const chartContainerStyle = {
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#dee3e2',
        height: '20px',
        width: '60%',
        marginTop: '10px',
        fontSize: '15px',
        textAlign: 'right',
        padding: '2px 10px',
        position: 'relative',
    }

    const currentBarStyle = {
        // border: '1px solid red',
        borderRadius: '10px',
        backgroundColor: '#838383',
        height: '100%',
        width: '50%',
        paddingLeft: '15px',
        textAlign: 'left',
        position: 'absolute',
        left: '0',
        top: '0',
        fontSize: '20px'        
    }

    // const goalBarStyle = {
    //     border: '1px solid blue'
    // }


    return (
        <div>
            <span style={titleStyle}>SAMPLE</span>
            <div style={chartContainerStyle}>
                <span style={currentBarStyle}>$50</span>
                내 목표 $30
            </div>

            {/* <Progress type="circle" percent={75} /> */}


        </div>
    )
}

export default VerticalRoundBar;