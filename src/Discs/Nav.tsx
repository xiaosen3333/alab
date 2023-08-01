import "./Nav.scss";
import { Link } from "react-router-dom";
import {AppContext} from '../App'
import {useContext} from 'react'

export const Nav = (props: {page:number}) => {
  const {context,setContext} = useContext(AppContext)
  return (
    <nav>
      <div className="nav1">
        <img src="/images/白色长.png" alt="logo" className="logo-img" />
      </div>
      <div className="menu">
        <NavButton title={"首页"} index = {0} to = {"/"}/>
        <NavButton title={"公司介绍"} index = {1} to = {"/company"}/>
        <NavButton title={"媒体宣传"} index = {2} to = {"/media"}/>
        <NavButton title={"产品中心"} index = {3} to = {"/product"}/>
      </div>
      <div className="nav2">
        <Link to="">Alpha正式版</Link>
        <img src="./images/nav2.svg" alt="" />
      </div>
    </nav>
  );
};

const NavButton = (props: {title:string,index:number,to:string})=>{
  const {context,setContext} = useContext(AppContext)
  const selected:boolean = context.page == props.index
  return (
  <Link
  onClick={()=>{
    setContext((newContext) => {
      newContext.page = props.index
    });
  }}
  to={props.to}
  style = {{
    opacity:selected?"1":"0.5",
    borderBottom:selected?"solid 3px #238ef3":"" }}>
      {props.title}
    </Link>
    )
}