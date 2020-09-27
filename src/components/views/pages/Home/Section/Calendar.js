import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import './CalendarCss.css';
import leftButton from './leftButton.css';
import rightButton from './rightButton.css';
import Test from './Test';
 
// 서버에서 데이터 긁어오면 url에 저장하는게 맞는 방법인가? https://youtu.be/iNkryf_TtZw

// useState : 상태값 변화 (이후 자동 렌더링)
// useEffect : 렌더링 이후에 처리됨

function Calendar(props) {
    /*
    var : 재선언 가능 (하지만 값 바뀔 우려)
    let : 재선언 불가능 , 재할당 가능
    const : 재선언 불가능 , 재할당 불가능
    */ 
    //const september = [1,2,3,4,5,6,7,8,9,10];
    const september = [1,2,3,4,5]; 
    const [newArr, setNewArr] = useState([]); // 첫번째는 상태, 두번째는 메소드를 반환

    const startSpecificMonth = () => {
      if(september.length < 10) {
          // "js usestate 배열 수정"
          // https://www.python2.net/questions-267161.htm
          var ele = []; //재선언은 불가능하지만 재할당은 가능한 let으로 선언
          for(let i=0; i<2; i++){ // 각 달마다 밀린 날 수 만큼 쓰레기값 -1 넣어줌 
            ele.push(-1);
          }
          ele.push(...september);
          // Q. 두개의 결과가 다른 이유?
          // ele.concat(september); -> 처음에 넣은 [-1, -1] 출력
          // ele = [...september]; -> september인 [1,2,3,4,5] 출력
          setNewArr(ele);

          // setNewArr([-1, -1]);
      } else {
          setNewArr([-1]);
      }
    }

    // 렌더링 후 실행 // 두번째 인자 []에 콜백함수를 넣을 수 있다.
    useEffect( () => {
        startSpecificMonth();
        // console.log("디버깅1");
        // console.log(newArr); // 빈 배열 [] (바로 반영X) -> useEffect 나와서 확인해야 함 
    }, [])

    console.log("디버깅2");
    console.log(newArr); // 처음에는 빈 배열 [] -> 그다음 [-1, -1]로 바뀜 
    // console.log(newArr.length);


    /* 화살표함수 : (파라미터) => {함수 내용} (ref : https://beomy.tistory.com/19)
     (1)
       파라미터가 없는 경우 : () => {statements} 처럼 괄호가 필요하다.
       파라미터가 1개인 경우 : 파라미터를 ()로 둘러싸지 않아도 된다.
     (2) 이해쉬운 예제 : https://ko.javascript.info/arrow-functions-basics
    */
    const addDate = date => <div className="dateStyle">{date}</div> // ㄱ.
    // const addDate = date => <Test date={date}/> -> ㄴ. 컴포넌트로 바꿀 경우

    // map : september의 각 날짜를 변수 date로 순회하면서 함수를 실행해 새 배열을 리턴 -> x?
    // 문자열을 리턴하고 싶다면 console.log(date) 대신 '${date}'
    // 이제 새로운 배열 newArr에 대해 각 날짜를 변수 date로 순회하면서 함수를 실행해야함
    const septemberDays = newArr.map(addDate); 

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
