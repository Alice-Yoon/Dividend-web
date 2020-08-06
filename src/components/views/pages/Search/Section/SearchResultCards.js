import React from 'react';
import styled from 'styled-components';

import tag_outlined from '../../../../non-views/img/tag_outlined.png';

function SearchResultCards(props) {

    
    const smallBoxStyle = {
        // border: '1px solid gray',
        borderRadius: '7px',
        backgroundColor: 'lightpink',
        padding: '3px 5px',
        fontSize: '0.8rem',
        marginRight: '5px'
    }

    const smallBoxStyle2= {
        // border: '1px solid gray',
        borderRadius: '7px',
        backgroundColor: '#E1F85D',
        padding: '3px 5px',
        fontSize: '0.8rem',
        marginRight: '5px'
    }


    return (
        <div className={props.className}>
            <div className="leftSectionStyle">
                {/* 배당락일 | 배당지급일 */}
                <div>
                    <span style={smallBoxStyle}>배당귀족</span>
                    <span style={smallBoxStyle2}>고배당주</span>
                </div>
                {/* 회사 이름 */}
                <p className="companyNameStyle">Nike Inc</p>
            </div>
            <div className="rightSectionStyle">
                <div className="top_text">
                    {/* 배당률 ~% */}
                    <span>평균 배당률 5.2%</span>
                </div>
                <div>
                    {/* $ 2.7 */}
                    <p className="expected_dividend">$ 97.21</p>
                </div>
            </div>
            <div className="endSectionStyle">
                <img src={tag_outlined} alt="tag_outlined" className="iconStyle_tag" />
            </div>
        </div>
    )
}

export default styled(SearchResultCards)`
    border-bottom: 1.3px solid lightgray;
    background-color: #fff;
    padding: 10px 15px;
    display: flex;
    margin: 30px 60px;
    & {
        .leftSectionStyle {
            /* border: 2px solid red; */
            flex: 5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* .rightSection_Top {

            } */
            /* .smallBoxStyle {
                
            } */
            .companyNameStyle {
                /* border: 1px solid blue; */
                font-size: 2rem;
                font-weight: bold;
                margin: 0;
                margin-top: 3px;
            }
        }
        .rightSectionStyle {
            /* border: 2px solid green; */
            flex: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* .rightSection_Bottom {

            } */
            .expected_dividend {
                font-size: 2.4rem;
                font-weight: bold;
                margin: 0;
            }
        }
        .endSectionStyle {
            /* border: 2px solid yellow; */
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }
        .top_text {
            /* border: 1px solid red; */
            padding-right: 20px;
            font-size: 1rem;
            font-weight: bold;
        }
        .iconStyle_tag {
            /* border: 1px solid red; */
            width: 55px;
            height: 60px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;
