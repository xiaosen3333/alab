import React, { useEffect, useRef, useState } from "react";
import styles from "./Company.module.scss";
import { useNavigate, Link } from "react-router-dom";

const Nav = (props: {}) => {
  return (
    <nav>
      <div className={styles.nav1}>
        <img src="/images/白色长.png" alt="logo" className="logo-img" />
      </div>
      <div className={styles.menu}>
        <Link to="/">首页</Link>
        <Link to="/company">公司介绍</Link>
        <Link to="/media">媒体宣传</Link>
        <Link to="/product">产品中心</Link>
      </div>
      <div className={styles.nav2}>
        <Link to="">Alpha正式版</Link>
        <img src="./images/nav2.svg" alt="" />
      </div>
    </nav>
  );
};


const Body = (props: {}) => {
  return (
    <div className={styles.body}>
      <div className={styles.banner1}>
        <p>公司概况</p>
      </div>
      <div className={styles.banner2}>
      </div>
    </div>
  );
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
