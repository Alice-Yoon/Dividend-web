import React, { useState } from 'react';
import search from '../../non-views/img/search.png'

function SearchInput() {

    const [inputValue, setInputValue] = useState('');

    const onChangeInputValue = (e) => {
        const value = e.target.value;
        setInputValue(value)
    }

    // Styles
    const containerStyle = {
        // border: '1px solid red',
        textAlign: 'center',
        marginTop: '20px',
    }

    const inputStyle = {
        width: '80%',
        padding: '10px',
    }

    // const searchIconStyle = {
    //     width: '30px',
    //     height: '30px'
    // }

  
    return (
        <div style={containerStyle}>
            <input type='text' placeholder="검색어를 입력하세요." value={inputValue} onChange={onChangeInputValue} style={inputStyle} />
            {/* <img src={search} alt="search" style={searchIconStyle} /> */}
        </div>
    )
}

export default SearchInput;
