import React, { useEffect, useRef, useState } from "react";
import styles from "./Media.module.scss";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Discs/Nav";

const Body = (props: {}) => {
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <p className={styles.p_1}>媒体宣传</p>
        <div className={styles.banner}>
          <div className={styles.row}>
            <div className={styles.news}>
              <div className={styles.title}>
                <div className={styles.circle}></div>
                <p>央媒关注！未来科技城优质创业项目火出圈！</p>
              </div>
              <div className={styles.date}>
                <p>杭州未来科技城  2023-06-27</p>
              </div>
              <div className={styles.content}>
                <img src="./images/news1.svg" alt="" />
              </div>
            </div>
            <div className={styles.news}>
              <div className={styles.title}>
                <div className={styles.circle}></div>
                <p>让家变得更“聪明”（经济新方位·衣食住行看转型）</p>
              </div>
              <div className={styles.date}>
                <p>人民日报  2023-06-18</p>
              </div>
              <div className={styles.content}>
                <img src="./images/news2.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.news}>
              <div className={styles.title}>
                <div className={styles.circle}></div>
                <p>华数受邀参展深圳文博会</p>
              </div>
              <div className={styles.date}>
                <p>华数传媒  2023-06-08</p>
              </div>
              <div className={styles.content}>
                <img src="./images/news3.svg" alt="" />
              </div>
            </div>
            <div className={styles.news} style={{ top: "0vw" }}>
              <div className={styles.title}>
                <div style={{ width: "1vw",height: "1vw",marginRight: "0.8vw"}}>
                <div className={styles.circle}></div></div>
                <p>灿若星辰 | 18级ITPer陈小雨与华数集团合作研发项目“智慧家庭数智管家AI机器人”亮相2023康博会</p>
              </div>
              <div className={styles.date} style={{ top: "1.2vw" }}>
                <p>创新与创业管理强化班ITP  2023-04-20</p>
              </div>
              <div className={styles.content} style={{ top: "2.6vw" }} >
                <img src="./images/news4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <p className={styles.p_1}>媒体宣传</p>
        <div className={styles.banner}>
          <div className={styles.row}>
            <div className={styles.news}>
              <div className={styles.title}>
                <div className={styles.circle}></div>
                <p>校企联合研发项目“智慧家庭数智管家AI机器人”于2023康博会展出</p>
              </div>
              <div className={styles.date}>
                <p>浙大设计  2023-04-19</p>
              </div>
              <div className={styles.content}>
                <img src="./images/news5.svg" alt="" />
              </div>
            </div>
            <div className={styles.news}>
              <div className={styles.title}>
                <div className={styles.circle}></div>
                <p>云创计划丨“数智管家”首展康博会，探索下一代智能家居新入口！</p>
              </div>
              <div className={styles.date}>
                <p>浙江大学计算机学院研究生  2023-04-19</p>
              </div>
              <div className={styles.content}>
                <img src="./images/news6.svg" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.news}>
              <div className={styles.title}>
                <div className={styles.circle}></div>
                <p>浙大双创院公司与华数集团合作开发的AI机器人亮相2023浙江（国际）康养产业博览会</p>
              </div>
              <div className={styles.date} style={{ top: "0.5vw" }}>
                <p>浙江大学校友总部经济园  2023-04-18</p>
              </div>
              <div className={styles.content}>
                <img src="./images/news7.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MediaPage = (props: {}) => {
  return (
    <div>
      <Nav page={2} />
      <Body />
    </div>
  );
};
