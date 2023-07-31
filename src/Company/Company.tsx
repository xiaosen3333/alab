import React, { useEffect, useRef, useState } from "react";
import "./Company.scss";
import { useNavigate } from "react-router-dom";

const Nav = (props: {}) => {
  return (
    <nav>
      <div className="nav1">
        <img src="/images/黑色长.png" alt="logo" className="logo-img" />
      </div>
      <div className="menu">
        <a href="">首页</a>
        <a href="">公司介绍</a>
        <a href="">媒体宣传</a>
        <a href="">产品中心</a>
        <a href="">Alpha正式版</a>
      </div>
      <div className="">

      </div>
    </nav>
  );
};


const Body = (props: {}) => {
  return(
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }
    }>
        </div>
  )
}

const Home = (props: {}) => {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Nav />
      <Body />
    </div>
  );
};



export default Home;
