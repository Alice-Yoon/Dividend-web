import React, {useState, useEffect} from 'react'

function CarouselSlider({showCard}) {


    const [nickName, setNickName] = useState('주린이');
    const [month, setMonth] = useState('7');
    const [price, setPrice] = useState('10,000');



    const carouselContainerStyle = {
        // border: '1px solid red',
        height: '180px',
    }

    const carouselCardStyle = {
        // border: '1px solid blue',
        padding: '10px',
        height: '160px',
    }



    // Style - Card1
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



    // Style - Card2
    const card2LeftStyle = {
        // border: '1px solid pink',
        display: 'flex',
        alignItem: 'center',
        marginBottom: '15px'
    }

    const card2RightStyle = {
        // border: '1px solid green'
    }

    const smallBoxStyle = {
        borderRadius: '7px',
        backgroundColor: 'gray',
        padding: '5px 10px',
        color: '#fff',
        marginLeft: '10px',
        fontSize: '13px'
    }

    const card2_titleStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'red'
    }

    const card2_contentStyle = {
        fontSize: '15px',

    }

 

    if(showCard) {
        
        return (
            <div>
                <div style={carouselContainerStyle}>
                    <div style={carouselCardStyle}>
                        <p><span style={nickNameStyle}>{nickName}</span>님!</p>
                        <p style={sentenceStyle}>
                            <span style={pointLetterStyle}>{month}월 배당금</span>은 
                            <span style={pointLetterStyle}>{price}원</span> 입니다.
                        </p>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div>
                <div style={carouselContainerStyle}>
                    <div style={carouselCardStyle}>
                        <div style={card2LeftStyle}>
                            <span>{month}월 요약</span>
                            <small style={smallBoxStyle}>22% 달성!</small>
                        </div>
                        <div style={card2RightStyle}>
                            <span style={card2_titleStyle}>+ $3.54</span>
                            <p style={card2_contentStyle}>
                                <span>지난달 대비:</span>
                                <span> +1.02 (0.15%)</span>
                            </p>
                            <p style={card2_contentStyle}>
                                <span>작년 같은 기간 대비:</span>
                                <span> -0.05 (0.02%)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselSlider;