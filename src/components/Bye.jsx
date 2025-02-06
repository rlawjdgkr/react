// import React from "react";

import Greet from "./Greet";

// 함수형 컴포넌트 : 최근 리액트 선호방식
function Bye() {

  return (
    <div>
      <a href='https://www.naver.com'>네이버로 이동</a>
      <Greet />
    </div>
  );
}

export default Bye;