import React, { useEffect, useRef, useState } from "react";
import "./Media.scss";
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

const Footer = (props: {}) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "block",
      }}
    >
   <div className="footer-content">
  <img src="/images/黑色长.png" alt="logo" className="footer-img"/>
  <div className="footer-menu">
    <table>
      <tr>
        <th><strong>Product</strong></th>
        <th><strong>Project</strong></th>
        <th><strong>About</strong></th>
      </tr>
      <tr>
        <td>产品1</td>
        <td>项目1</td>
        <td>关于我们</td>
      </tr>
      <tr>
        <td>产品2</td>
        <td>项目2</td>
        <td>加入我们</td>
      </tr>
      <tr>
        <td>产品3</td>
        <td>项目3</td>
        <td>最新动态</td>
      </tr>
    </table>
  </div>
</div>

    <footer>
    <p>版权所有 © 阿尔法实验室 2023</p>
    <p><a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016879">浙公网安备33011002016879号&nbsp;</a><a href="https://beian.miit.gov.cn/">浙ICP备2022036123号-1</a></p>
    </footer>
    </div>
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
      <Footer />
    </div>
  );
};

// const App = (props: {}) => {
//   const isFirst = useRef(true)
//   let [counter, setCounter] = useState(0)

//   useEffect(() => {
//     if (isFirst.current) {
//       setInterval(() => {
//         setCounter(counter => counter + 1)
//       }, 1000)
//       isFirst.current = false
//     }
//   }, [])

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* <img src="/images/logo.jpg" alt="" /> */}
//       <div style={{}}>
//         <LogoText color="black" />
//         {counter}
//       </div>
//     </div>
//   );
// };

export default Home;
