import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease, reset, deptlist } from "../../store";
import { useState } from 'react';

const ReduxBottom = () => {

  const dispatch = useDispatch();

  const handleReset = () => {
    // 화면이 렌더링된 후에 내용물이 변경될 때는 상태를 바꿔주자 - Redux의 convention
    // 파라미터에 담아야할 것은 무엇인가? -> Action이다
    // store.js에 Action을 선언할 것
    // 커리함수 문법(커링정의) -> 함수의 파라미터를 누적되게 넘길 수 있다.
    dispatch(reset())
  };

  const [depts, setDepts] = useState([
    {DEPTNO: 40, DNAME: "기획부", LOC: "광주"},
    {DEPTNO: 50, DNAME: "마케팅부", LOC: "인천"},
    {DEPTNO: 60, DNAME: "품질경영부", LOC: "대전"},
  ])

  return (
    <div className="sub_container">
      <h2>Redux 바닥글 섹션</h2>
      <button onClick={() => dispatch(increase("김유신"))}>증가</button>
      <button onClick={() => dispatch(decrease({ empno: 2000, ename: "나일등" }))}>
        감소
      </button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={() => dispatch(deptlist(depts))}>부서목록</button>
    </div>
  );
};

export default ReduxBottom;