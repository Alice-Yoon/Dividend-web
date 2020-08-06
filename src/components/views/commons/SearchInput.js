import React, { useState } from 'react';
import styled from 'styled-components';

function SearchInput(props) {

    const [inputValue, setInputValue] = useState('');

    const onChangeInputValue = (e) => {
        const value = e.target.value;
        setInputValue(value)
    }

    const onSearch = (e) => {
        e.preventDefault();
        console.log("search input submitted!", inputValue);
        setInputValue('');
    }

    return (
        <div className={props.className}>
            <form onSubmit={onSearch} >
                <input type='text' placeholder="검색어를 입력하세요." value={inputValue} onChange={onChangeInputValue} className="inputStyle" autoFocus="true" />
            </form>
        </div>
    )
}

export default styled(SearchInput)`
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 20px;
    & {
        .inputStyle {
            width: 80%;
            padding: 10px;
        }
    }
`;
