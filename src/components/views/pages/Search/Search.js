import React from 'react';
import SearchInput from '../../commons/SearchInput';

import SearchResultCards from './Section/SearchResultCards';
import DefaultCards from './Section/DefaultCards';

function Search({toggleSearch, closeSearchModal}) {

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

    const modalStyle = {
        borderRadius: '10px',
        width: '65%',
        height: '65%',
        backgroundColor: '#fff',
    }

    const closeBtnAreaStyle = {
        // border: '1px solid blue',
        height: '20px',
        position: 'relative'
    }

    const closeBtnStyle = {
        cursor: 'pointer',
        // border: '1px solid red',
        textAlign: 'end',
        paddingRight: '10px',
        position: 'absolute',
        top: '8px',
        right: '5px'
    }

    const onClickToClose = (e) => {

        const target = e.target.id;

        if(target === 'container' || target === 'closeBtn') {
            closeSearchModal();
        }
    }


    return (
            <div id="container" style={containerStyle} onClick={onClickToClose}>
                <div style={modalStyle}>
                    <div style={closeBtnAreaStyle}>
                        <span id="closeBtn" onClick={onClickToClose} style={closeBtnStyle}>X</span>
                    </div>
                    <SearchInput />
                    <DefaultCards />
                    <SearchResultCards />
                </div>
            </div>
    )

}


export default Search
