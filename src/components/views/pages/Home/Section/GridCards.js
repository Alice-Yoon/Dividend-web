import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import clam from '../../../../non-views/img/clam.png';
import tag_filled from '../../../../non-views/img/tag_filled.png';

function GridCards(props) {

    const data = props.data;

    // isDividendDate ? '배당지급일' : '배당락일 D-3'
    const [isDividendDate, setIsDividendDate] = useState(true);

    // owned ? '보유-clam' : 'tag_filled'
    const [isOwned, setIsOwned] = useState(true);

    useEffect(() => {
        setIsDividendDate(data.isDividendDate);
        setIsOwned(data.isOwned);
    }, []);

    // 현재는 dummy data 가져옴
    // console.log("inside grid", data);

    const onClickGridCards = () => {
        console.log("grid cards clicked!");
    }

    const endSectionContents = () => {
        if(isOwned) {
            return ( 
            <>
            <img src={clam} alt="clam" className="iconStyle_clam" />
            <span>$ 97.26</span>
            <small>보유</small>
            </>
            );
        } else {
            return <img src={tag_filled} alt="tag" className="iconStyle_tag" />
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
    }

    return (
        <div className={props.className}>
            <div style={cardContainerStyle} onClick={onClickGridCards}>
                <div className="leftSectionStyle">
                    {/* 배당락일 | 배당지급일 */}
                    <span className="smallBoxStyle">
                        {isDividendDate ? '배당지급일' : '배당락일 D-3'}
                    </span>
                    {/* 회사 이름 */}
                    <p className="companyNameStyle">Nike Inc</p>
                </div>
                <div className="rightSectionStyle">
                    <div className="rightSection_Top">
                        {/* 배당률 ~% */}
                        <span>배당률 5.2%</span>
                        {/* 예상 배당금 */}
                        <span>예상 배당금</span>
                    </div>
                    <div className="rightSection_Bottom">
                        {/* $ 2.7 */}
                        <p className="expected_dividend">$ 2.7</p>
                    </div>
                </div>
                <div className="endSectionStyle">

                    {endSectionContents()}

                </div>
            </div>
        </div>
    )
}

export default styled(GridCards)`
    & {
        .leftSectionStyle {
            /* border: 1px solid red; */
            flex: 4;
            .smallBoxStyle {
                border: 1px solid gray;
                padding: 3px 5px;
                font-size: 0.8rem;
                color: gray;
            }
            .companyNameStyle {
                font-size: 1.6rem;
                font-weight: bold;
                margin: 0;
                margin-top: 3px;
            }
        }
        .rightSectionStyle {
            /* border: 1px solid blue; */
            flex: 4;
            .rightSection_Top {
                padding-right: 20px;
                font-size: 0.8rem;
                display: flex;
                justify-content: space-between;
            }
            .rightSection_Bottom {

            }
            .expected_dividend {
                font-size: 2.5rem;
                font-weight: bold;
                margin: 0;
            }
        }
        .endSectionStyle {
            /* border: 1px solid green; */
            flex: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }
        .iconStyle_clam {
            width: 40px;
            height: 30px;
        }
        .iconStyle_tag {
            width: 55px;
            height: 60px;
        }

    }
`;