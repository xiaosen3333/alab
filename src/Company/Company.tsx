import React, { useEffect, useRef, useState } from "react";
import styles from "./Company.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { Nav } from "../Discs/Nav";

const Body = (props: {}) => {
  return (
    <div className={styles.body}>
      <div className={styles.page}>
        <div className={styles.banner1}>
          <p className={styles.p_1}>公司概况</p>
          <div className={styles.banner2_1}>
            <div className={styles.box1_1}>
              <p className={styles.p_2}>
                立足浙江、瞄准全球的未来数智人独角兽企业
              </p>
            </div>
            <div className={styles.box2_1}>
              <p className={styles.p_3}>
                浙江像素跃迁智能技术有限公司致⼒于成为⼀家⽴⾜杭州，辐射⻓三⻆，服务全球的未来独⻆兽企业，专注于AGI（⼈⼯通⽤智能）技术及其数智⼈相关领域的研发。我们的核⼼业务围绕着⼀站式数智⼈定制服务、技能热更新烘焙引擎以及EmotionChat模型等展开，致⼒于为企业构建⾼模块化的、低代码的可复⽤数智⼈，提供精准识别的情绪数据库以及对应的情绪识别模型。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.banner1}>
          <p className={styles.p_1}>公司概况</p>
          <div className={styles.banner2_2}>
            <div className={styles.box1_2}>
              <p className={styles.p_2}>
                一路峥嵘，融合工程设计与人工智能的领导者
              </p>
            </div>
            <div className={styles.box2_2}>
              <p className={styles.p_3}>
                浙江像素跃迁智能技术有限公司的创始⼈陈⼩⾬博⼠是专注于⼈⼯通⽤智能（AGI）技术研发的科技领导者。2022年陈⼩⾬博⼠在浙江⼤学计算机科学与技术学院获得⼯学博⼠学位，专业知识涵盖了⾃然语⾔处理、语⾳识别、计算机视觉、机器学习以及⼈⼯智能等多个领域，同时修读浙江⼤学竺可桢荣誉学院创新创业强化班，在解决问题时有着多⻆度的视角、深厚的技术底蕴和独特的商业洞察。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.banner1}>
          <p className={styles.p_1}>公司概况</p>
          <div className={styles.banner2_3}>
            <div className={styles.box1_3}>
              <p className={styles.p_2}>
                技术与情感相融合，
                <br />
                打造有情感智慧的人工智能开发团队
              </p>
            </div>
            <div className={styles.box2_3}>
              <p className={styles.p_3}>
                我司汇聚了浙江⼤学的顶尖⼈才，涵盖⾃然语⾔处理、语⾳识别、计算机视觉、机器学习与⼈⼯智能等多领域的专家。我司的初⼼使命是将技术与情绪交相辉映，构建出⼈性化的AI，让AGI数智⼈在与⽤户的交互中提供积极正向的情绪反馈，推动其思维和精神的丰富提升。同时我们公司⽴⾜于浙⼤校园，坚持⼈才为本的理念，构建了AlphaLab实验室作为⼈才孵化基地。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.banner1}>
          <p className={styles.p_1} style={{ top: "0.2vw" }}>荣誉资历</p>
          <p className={styles.p_4}>
            公司荣获IF设计奖两项、红点设计奖两项、DIA设计奖三项、IDA设计奖两项、IDEA设计奖两项、国家专利24项等众多国内外知名大奖
          </p>
          <div className={styles.table_1}>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
            <div className={styles.imgs}></div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.banner1}>
          <p className={styles.p_1} style={{ top: "-0.7vw" }}>部门介绍</p>
          <div className={styles.banner3}>
            <div className={styles.document}>
              <p className={styles.p_5}>智能技术部</p>
              <p className={styles.p_6}>研发和创新公司核心产品的AGI技术，直接影响产品的质量和创新性，对公司的ToB业务以及后期的ToC业务具有决定性的作用。</p>
            </div>
            <div className={styles.document}>
              <p className={styles.p_5}>项目探索部</p>
              <p className={styles.p_6}>探寻和发展新的项⽬和业务机会，推动公司业务的拓展。直接影响公司业务的拓展，有助于实现从ToB到ToC的业务转型。</p>
            </div>
            <div className={styles.document}>
              <p className={styles.p_5}>创新设计部</p>
              <p className={styles.p_6}>处理产品的创意和设计，负责优化⽤户体验。确保产品具有⾼度的⽤户友好性和使⽤满意度。</p>
            </div>
            <div className={styles.document}>
              <p className={styles.p_5}>组织管理部</p>
              <p className={styles.p_6}>管理公司的⽇常运营，负责⼈⼒资源、财务管理及⾏政事务。为公司其他部⻔提供必要的⽀持，保证公司运营的⾼效和顺畅。</p>
            </div>
            <div className={styles.document}>
              <p className={styles.p_5}>见习培育部</p>
              <p className={styles.p_6}>负责新⼈培养和员⼯发展计划，以保障公司⼈才的持续供给。⽀持公司的⻓远发展和创新能⼒。</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.banner4}>
          <div className={styles.team}></div>
          <div className={styles.box3}>
            <p className={styles.p_1}>团队介绍</p>
            <div className={styles.tag}>
              <div className={styles.box4}>
                <p className={styles.p_7}>学术背景丰富</p>
              </div>
              <div className={styles.box4}>
                <p className={styles.p_7}>构成领域多元</p>
              </div>
              <div className={styles.box4}>
                <p className={styles.p_7}>专业技能广泛</p>
              </div>
            </div>
            <div className={styles.box2_4}>
              <p className={styles.p_3}>团队成员40+人，拥有<span>浙江⼤学</span>、<span>卡内基梅隆⼤学</span>、<span>新加坡国⽴⼤学</span>以及<span>中国美术学院</span>等世界顶尖学府的丰富学术背景。公司的成员构成极其多元，既包括来⾃计算机科学、⾃动化控制、电⼦科学与技术领域的专业⼈才，也有具备⼯商管理、⾏政管理等背景的博⼠、硕⼠以及本科⽣，且<span>研发团队</span>在公司总⼈数中占⽐超过<span>85%</span>。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CompanyPage = (props: {}) => {
  return (
    <div>
      <Nav page={1} />
      <Body />
    </div>
  );
};

// export default Home;
