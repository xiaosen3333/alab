import React, { useEffect, useRef, useState } from "react";
import styles from "./Product.module.scss";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Discs/Nav";

const Body = (props: {}) => {
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <div className={styles.banner1}>
          <p className={styles.p_1}>产品技术</p>
          <div
            className={styles.line}
            style={{ top: "-2vw", width: "7vw" }}
          ></div>
          <p className={styles.p_2} style={{ top: "3vw" }}>
            本公司专注于EQ增强AGI数智⼈驱动平台的研发与应⽤推⼴，通过AGI数智⼈的EQ增强，形成包括观察感知、分享交互、丰富提升三⼤模块技术的⼈类情绪价值“⽣产线”，并⾃主研发了⼀套低代码、⾼模块化的热更新烘焙引擎，提供⼀整套交互代码的开发解决⽅案，致⼒于成为优质的AI-aaS供应商。
          </p>
        </div>
        <div className={styles.banner2}>
          <div className={styles.box}>
            <div className={styles.circle}>
              <p className={styles.p_3}>观察感知模型</p>
            </div>
            <div className={styles.circle}>
              <p className={styles.p_3}>分享交互模型</p>
            </div>
            <div className={styles.circle}>
              <p className={styles.p_3}>丰富提升模型</p>
            </div>
          </div>
        </div>
        <div className={styles.banner3}>
          <div className={styles.line}></div>
          <p className={styles.p_4}>
            情绪数据库构建
            <br />
            情绪识别模型算法
            <br />
            关注情绪的细颗粒度用户画像
            <br />
          </p>
          <div className={styles.line} style={{ top: "3vw" }}></div>
          <p className={styles.p_4} style={{ top: "3vw" }}>
            多模态情绪识别与交互引擎
            <br />
            ⽤户参与式的AI智能烘焙引擎
            <br />
            定制化科技树引擎
            <br />
            AI动作捕捉+⽣成引擎 <br />
          </p>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.banner}>
          <p className={styles.p_1} style={{ top: "1vw" }}>
            产品介绍
          </p>
          <div
            className={styles.line}
            style={{ top: "-1vw", left: "0vw", width: "6.3vw" }}
          ></div>
          <p className={styles.p_5}>
            华数集团："小数“——数智家庭生活管家AI机器人
          </p>
          <p className={styles.p_4} style={{ top: "-2vw", width: "101%" }}>
            小数是一款智慧家庭管家AI全息仓。采用全息仓结构+AI虚拟人的设计，服务老年人居家养老场景。作为新一代智慧家庭的终端入口，可以为老年人提供接入数字生活的捷径，为消除老年人数字鸿沟问题提供一种可能性，本产品作为典型案例已经被《人民日报》要闻头条报道。
          </p>
          <div className={styles.news}>
            <img src="./images/xiaoshu1.svg" alt="" />
            <img src="./images/xiaoshu2.svg" alt="" />
          </div>
        </div>
        <div className={styles.backcircle}></div>
        <div className={styles.footer}>
          <div className={styles.row} style={{ left: "8vw" }}>
            <img src="./images/白色长.png" alt="" />
            <div className={styles.columline}></div>
            <div className={styles.info}>
              <p className={styles.p_6}>地址：杭州市余杭区浙江大学校友企业总部经济园1期A20栋4楼<br />
电话：0571-88888888<br />
邮箱：rain@xsyq.com</p>
            </div>
          </div>
          <div className={styles.row} style={{ left: "-0.6vw" , top:"-0.4vw"}}>
            <img style={{height:"50%"} }src="./images/gongan.svg" alt="" />
            <p className={styles.p_7} style={{left:"0.5vw"}}>浙公网安备 33011002017009号</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export const ProductPage = (props: {}) => {
  return (
    <div>
      <Nav page={3} />
      <Body />
    </div>
  );
};
