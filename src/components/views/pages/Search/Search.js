import React from 'react';
import styled from 'styled-components';

import SearchInput from '../../commons/SearchInput';
import SearchResultCards from './Section/SearchResultCards';
import DefaultCards from './Section/DefaultCards';

function Search(props) {

    const { toggleSearch, closeSearchModal } = props;

   
    const onClickToClose = (e) => {

        const target = e.target.id;

        if(target === 'container' || target === 'closeBtn') {
            closeSearchModal();
        }
    }
    

    const containerStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: `${toggleSearch ? 'flex' : 'none' }`,
        alignItems: 'center',
        justifyContent: 'center',
    }


    return (
        <div className={props.className}>
            <div id="container" style={containerStyle} onClick={onClickToClose}>
                <div className="modalStyle">
                    <div className="closeBtnAreaStyle">
                        <span id="closeBtn" onClick={onClickToClose} className="closeBtnStyle">X</span>
                    </div>
                    <SearchInput />
                    <DefaultCards />
                    <SearchResultCards />
                </div>
            </div>
        </div>
    )

}


export default styled(Search)`
    & {
        .modalStyle {
            border-radius: 10px;
            width: 65%;
            height: 65%;
            background-color: #fff;
        }
        .closeBtnAreaStyle {
            /* border: 1px solid blue; */
            height: 20px;
            position: relative;
            > .closeBtnStyle {
                cursor: pointer;
                /* border: 1px solid red; */
                text-align: end;
                padding-right: 10px;
                position: absolute;
                top: 8px;
                right: 5px;
            }
        }
    }
`;
