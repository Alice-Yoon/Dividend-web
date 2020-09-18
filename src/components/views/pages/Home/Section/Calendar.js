import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import './CalendarCss.css';
import leftButton from './leftButton.css';
import rightButton from './rightButton.css';
 
// 서버에서 데이터 긁어오면 url에 저장하는게 맞는 방법인가? https://youtu.be/iNkryf_TtZw

function Calendar(props) {  

    
    const september = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    const newArr = [];
 
    // useState는 state값들
    const [newArr] = useState([]);
    useEffect(() => {
        const startSpecificMonth = () => {
            if(september.length < 28) {
              newArr.concat([-1, -1]);
            } else {
              newArr.concat([-1]);
            }
        }
        startSpecificMonth();
        console.log("디버깅");
        console.log(newArr);
    }, []);

    // 페이지가 로딩되면 제일 먼저 실행
    // useEffect(() => {
    //   if (september.length < 28) {
    //     newArr.concat([-1, -1]);
    //   } else { 
    //     newArr.concat([-1]);
    //   }
    // }, []);
    // console.log(newArr);
    // 함수 생성
    // const startSpecificMonth = () => {
    // };
    // 함수 호출 
    // startSpecificMonth();
 

    // const addDate = date => console.log(date);
    // const addDate = date => <div className="dateStyle">{date}</div>
    const addDate = date => <div className="dateStyle">{date}</div>

    // map : september의 각 날짜를 변수 date로 순회하면서 함수를 실행해 새 배열을 리턴
    // 문자열을 리턴하고 싶다면 console.log(date) 대신 '${date}'
    const septemberDays = september.map(addDate);

    // 요일 
    const DayOfTheWeek = (['S','M','T','W','T','F','S'].map(day => <div className="dayStyle">{day}</div>));

    // 두번째 내부의 div를 컴포넌트로 하면 되지 않을까
    // 어케 행 이름멀로 해 

    let today = new Date(); 
    // console.log(today); //Fri Sep 11 2020 01:11:03 GMT+0900 (대한민국 표준시)
    // console.log("디버깅 시작");
    // console.log(today);
    // console.log(today.toLocaleDateString());
    // console.log(today.getDate());
    // console.log(today.getDay());
    // console.log("디버깅 끝");


    // const test = testDate.getMilliseconds();
    return (
      <div className={props.className}>
        {/* <div>{testDate}</div> */}
        <div className="head">
          <button><leftButton/></button>
          <span className="title">2020 September</span>
          <button><rightButton/></button>
        </div>



       
        <div className="dayTableStyle">{DayOfTheWeek}</div>
        <div className="dateTableStyle">{septemberDays}</div>
      </div>
      
    )
}

// grid css : https://heropy.blog/2019/08/17/css-grid/
export default styled(Calendar)` 
&{
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
  }

  .dayTableStyle {
    margin-top : 70px; // 요일 테이블
    padding-top : 3px; // 요일 칸
    padding-bottom : 3px;
    display : grid;
    grid-template-rows : repeat(1, 35px);
    grid-template-columns : repeat(7, 105px);  
    background-color: lime;
  }
  .dayStyle {
    margin-left : 3px;
    padding-top : 5px; // 숫자와 칸 경계 사이
    padding-left : 5px;
    background-color : red;
  }

  .dateTableStyle {
    // margin-top : 10px; // 날짜 테이블
    // padding-top : 3px; //날짜 칸
    display : grid;
    grid-template-rows : repeat(5, 105px);
    grid-template-columns : repeat(7, 105px);  
    background-color: yellow;
  }

// 이제 이거 대신에 컴포넌트 만들기 
  .dateStyle { // 칸마다 
    margin-top : 3px; // margin 칸과 칸 사이 
    margin-left : 3px;
    padding-top : 5px; // 숫자와 칸 경계 사이
    padding-left : 5px;
    background-color : pink;
  }
}
` 
