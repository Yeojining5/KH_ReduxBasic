import React from 'react';

// 구조분해 할당 props 선언 -> { increase }
// increase 이벤트 핸들러는 App.js에 선언되어 있음
const Bottom = ({ increase, decrease }) => {
  return (
    <div className="sub_container">
      <h2>바닥글 섹션</h2>

        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      
    </div>
  );
};

export default Bottom;