import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import { useNavigate, Link } from "react-router-dom";

const Nav = (props: {}) => {
  return (
    <nav>
      <div className="nav1">
        <img src="/images/白色长.png" alt="logo" className="logo-img" />
      </div>
      <div className="menu">
        <Link to="/">首页</Link>
        <Link to="/company">公司介绍</Link>
        <Link to="/media">媒体宣传</Link>
        <Link to="/product">产品中心</Link>
      </div>
      <div className="nav2">
        <Link to="">Alpha正式版</Link>
        <img src="./images/nav2.svg" alt="" />
      </div>
    </nav>
  );
};

const Body = (props: {}) => {
  return (
    <div className="body">
      <div className="banner1">
      <div className="logo_box">
        <img src="./images/白色竖版.png" alt="" />
        <div className="box">
          <p>Welcome to a lab</p>
        </div>
      </div>
      <div className="cartoon">
        <img src="./images/cartoon.svg" alt="" />
      </div>
      </div>
    </div>
  );
};

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
