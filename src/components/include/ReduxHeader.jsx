import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { logout, loginGoogle } from './../service/authLogic';
import { Link } from 'react-router-dom';

const ReduxHeader = () => {

  const dispatch = useDispatch();
  // 익숙해지기 전까지는 담긴 값들을 따로 선언하기 (number, mem_name)
  // 전체를 받을 때는 구조분해 할당으로
  const number = useSelector((store) => store.number)
  const mem_name = useSelector((store) => store.mem_name)
  const empVO = useSelector((store) => store.empVO)
  const firebaseAuth = useSelector((store) => store.firebaseAuth)
  const googleProvider = useSelector((store) => store.googleProvider)

  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"))
  }, [])

  const handleGoogle = async() => {
    try{
      const result = await loginGoogle(firebaseAuth, googleProvider)
      console.log(result.uid);
      window.localStorage.setItem("userId", result.uid);
      window.location.reload();
    }catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="sub_container">
      <h2>Redux 헤더 섹션</h2>

      <div style={{ display: "flex" }}>
        <Link to="/" className="nav-link">Home</Link>
          &nbsp;&nbsp;
        <Link to="/notice" className="nav-link">공지사항</Link>
      </div>
      

      {
        ////////////// 삼항연산자 ////////////
        userId ? 
        <button variant="primary" onClick={() => {
          logout(firebaseAuth);
          window.location.reload();
        }}> Logout </button>
        :
        <button onClick={handleGoogle}>Google</button>
        ////////////// 삼항연산자 ////////////
      }

      번호 : {number}&nbsp;
      이름 : {mem_name}&nbsp;&nbsp;
      사원정보 : {empVO && `사원번호:${empVO.empno}, 사원명:${empVO.ename}`}
    </div>
  );
};

export default ReduxHeader;