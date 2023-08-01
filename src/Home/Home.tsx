import React, { useEffect, useRef, useState } from "react";
import  styles  from  "./Home.module.scss";
import { useNavigate, Link } from "react-router-dom";
import {Nav} from "../Discs/Nav"

const Body = (props: {}) => {
  return (
    <div className={styles.body}>
      <div className={styles.banner1}>
        <div className={styles.logo_box}>
          <img src="./images/白色竖版.png" alt="" />
          <div className={styles.box}>
            <p>Welcome to a lab</p>
          </div>
        </div>
        <div className={styles.cartoon}>
          <img src="./images/cartoon.svg" alt="" />
        </div>
      </div>
      <div className={styles.banner2}>
        <div className={styles.BOX}>
          <div className={styles.box1} >
            <p className={styles.p_1}>COMPANY</p>
            <p className={styles.p_2}>公司介绍</p>
            <img src="./images/banner2_1.svg" alt="" />
          </div>
          <div className={styles.box2}>
            <p className={styles.p_1}>TEAM</p>
            <p className={styles.p_2}>团队介绍</p>
            <img src="./images/banner2_2.svg" alt="" style={{ width: "23.64vw",left: "-7.3vw" }}/>
          </div>
          <div className={styles.box3}>
            <p className={styles.p_1}>PRODUCT</p>
            <p className={styles.p_2}>产品中心</p>
            <img src="./images/banner2_3.svg" alt="" style={{ width: "32.66vw",left: "-14vw" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomePage = (props: {}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Nav page={0}/>
      <Body />
    </div>
  );
};

// export default HomePage;
