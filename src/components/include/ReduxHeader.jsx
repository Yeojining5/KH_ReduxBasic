import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReduxHeader = () => {

  const dispatch = useDispatch();
  // 익숙해지기 전까지는 담긴 값들을 따로 선언하기 (number, mem_name)
  // 전체를 받을 때는 구조분해 할당으로
  const number = useSelector((store) => store.number)
  const mem_name = useSelector((store) => store.mem_name)
  const empVO = useSelector((store) => store.empVO)

  return (
    <div className="sub_container">
      <h2>Redux 헤더 섹션</h2>
      번호 : {number}&nbsp;
      이름 : {mem_name}&nbsp;&nbsp;
      사원정보 : {empVO && `사원번호:${empVO.empno}, 사원명:${empVO.ename}`}
    </div>
  );
};

export default ReduxHeader;