import React, { useState, useEffect } from 'react';

// 컴포넌트 불러오기 
import NavBar from '../../commons/NavBar'; //commons에서 가져오는 (공통적으로 )
import Header from '../../commons/Header';
import GridCards from './Section/GridCards'; //
import Calendar from './Section/Calendar';
import Search from '../Search/Search';

// 그리드카드에 들어가는걸 더미로 만듦 
import {gridCardDummy} from '../../../non-views/dummy/gridCardDummy';

// 프로그레스 바 (목표, 지금)
// Progress Bar Dummy Data
const testDataForProgressBar = {goal: 100, current: 40}

// Home 화면 자체 (컴포넌트 구현 : 함수로)
function Home() {

    // console.log('grid data', gridCardDummy)

    const [gridCardData, setGridCardData] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleTab, setToggleTab] = useState();

    useEffect(() => {
        setGridCardData(gridCardDummy);
    }, []);

    // console.log("gridCardData", gridCardData)


    const openSearchModal = () => {
        setToggleSearch(true);
    }

    const closeSearchModal = () => {
        setToggleSearch(false);
    }

    const onClickTab = (e) => {
        console.log("tab clicked!", e.target.id);

        const target = e.target.id;

        switch (target) {
            case "tab_all":
                console.log("All");
                break;
            case "tab_owned":
                console.log("보유주식");
                break;
            case "tab_interested":
                console.log("관심주식");
                break;
            default:
                console.log("default - All?")
        }
    }
    
    
    const homeStyle = {
        // border: '3px solid aqua',
        width: '90%',
        margin: '0 auto'
    }

    const mainStyle = {
        border: '1px solid green',
        display: 'flex',
        height: '100vh'
    }

    const leftStyle = {
        border: '1px solid yellow',
        flex: 1.5
    }

    const rightStyle = {
        border: '1px solid pink',
        flex: 1,
        backgroundColor: 'lightgray',
        padding: '15px 10px',
        overflow: 'auto'
    }

    // 변수로 지정하면 대문자로 (css는 -로 연결)
    const gridTabAreaStyle = {
        // border: '1px solid red',
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'flex-end', // flex : 정렬 관련 cf : align-items
        alignItems: 'center'
    }

    const tabBtnStyle = {
        // border: '1px solid blue',
        cursor: 'pointer',
        backgroundColor: 'black',
        borderRadius: '10px',
        marginLeft: '8px',
        padding: '3px 13px',
        color: '#fff',
        fontSize: '14px'
    }

    // function Home을 통해 화면에 보이는거 
    return (
        // 초록글씨 = 컴포넌트 이름 (위에서 import로 만든거 )
        // css에서 class 단거 js같은 처리 필요하면 homeStyle 변수로 
        // (className으로 한다면 밑에 순수 css처럼)
        <div style={homeStyle}>
            <NavBar openSearchModal={openSearchModal} Home />
            <Header progressData={testDataForProgressBar} />
            
            {/* semantic */}
            {/* main : content은 메인 -> 안에는 section (기능은 div와 같음)*/}
            {/* Home Page */}
            <main style={mainStyle}>
                <section style={leftStyle}>
                    <Calendar/>
                </section>
                <section style={rightStyle}>
                    <div style={gridTabAreaStyle}>
                        <span id="tab_all" style={tabBtnStyle} onClick={onClickTab}>All</span>
                        <span id="tab_owned" style={tabBtnStyle} onClick={onClickTab}>보유주식</span>
                        <span id="tab_interested" style={tabBtnStyle} onClick={onClickTab}>관심주식</span>
                    </div>
                    {gridCardData ? gridCardData.map(data => (
                        <GridCards data={data} />
                    )) : null}
                </section>
            </main>

            <Search toggleSearch={toggleSearch} closeSearchModal={closeSearchModal} />
        </div>
    )
}

export default Home;