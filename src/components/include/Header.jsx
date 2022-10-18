import React from 'react';
import SubHeader from './SubHeader';

// 구조분해 할당 props 선언 -> { number }
const Header = ({number}) => {

  //const {number} = props;

  return (
    <div className="sub_container">
      <h2>헤더 섹션</h2>
      번호 : {number}
      <SubHeader number={number} />
    </div>
  );
};

export default Header;