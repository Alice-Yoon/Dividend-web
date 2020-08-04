import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function CarouselSlider(props) {

    const { showCard } = props;

    const [nickName, setNickName] = useState('주린이');
    const [month, setMonth] = useState('7');
    const [price, setPrice] = useState('10,000');


    const getCard1 = () => {
        return <div>
                    <p><span className="nickNameStyle">{nickName}</span>님!</p>
                    <p className="sentenceStyle">
                        <span className="pointLetterStyle">{month}월 배당금</span>은 
                        <span className="pointLetterStyle">{price}원</span> 입니다.
                    </p>
                </div>
    }

    const getCard2 = () => {
        return <div>
                    <div className="card2LeftStyle">
                        <span>{month}월 요약</span>
                        <small className="smallBoxStyle">22% 달성!</small>
                    </div>
                    <div className="card2RightStyle">
                        <span className="card2_titleStyle">+ $3.54</span>
                        <p className="card2_contentStyle">
                            <span>지난달 대비:</span>
                            <span> +1.02 (0.15%)</span>
                        </p>
                        <p className="card2_contentStyle">
                            <span>작년 같은 기간 대비:</span>
                            <span> -0.05 (0.02%)</span>
                        </p>
                    </div>
                </div>
    }

 
    return (
        <div className={props.className}>
            <div className="carouselCardStyle">
                {showCard ? getCard1() : getCard2()}
            </div>
        </div>
    )

}

export default styled(CarouselSlider)`
    /* border: 1px solid red; */
    height: 180px;
    & {
        /* Card 1 */
        .carouselCardStyle {
            /* border: 1px solid blue; */
            padding: 10px;
            height: 160px;
        }
        .nickNameStyle {
            font-weight: bold;
            font-size: 32px;
        }
        .sentenceStyle {
            margin-bottom: 30px;
        }
        .pointLetterStyle {
            font-weight: bold;
            font-size: 25px;
            color: #5e5e5e;
        }
        /* Card 2 */
        .card2LeftStyle {
            /* border: 1px solid pink; */
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            .smallBoxStyle {
                border-radius: 7px;
                background-color: gray;
                padding: 5px 10px;
                color: #fff;
                margin-left: 10px;
                font-size: 13px;
            }
        }
        .card2RightStyle {
            /* border: 1px solid green; */
            .card2_titleStyle {
                font-size: 30px;
                font-weight: bold;
                color: red;
            }
            .card2_contentStyle {
                font-size: 15px;
            }
        }
    }
`;