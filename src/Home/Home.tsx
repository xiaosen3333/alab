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
        <Canvas width={640} height={640}/>
          {/* <img src="./images/cartoon.svg" alt="" /> */}
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
class AnimationPoint{
  x:number;
  y:number;
  acceleration:number
  x_velocity:number;
  y_velocity:number;
  speed:number;
  size:number;
  context:CanvasRenderingContext2D;
  
  constructor(x:number,y:number,acceleration:number,speed:number,size:number,context:CanvasRenderingContext2D){
    this.x = x
    this.y = y
    this.acceleration = acceleration
    this.speed = speed
    this.size = size
    this.context = context
    this.x_velocity = 0
    this.y_velocity = 0
  }

  distance(x:number,y:number){
    return this.norm(x - this.x,y - this.y);
  }

  norm(x:number,y:number){
    return Math.sqrt(x*x+y*y)
  }

  move(position:{x:number,y:number}):boolean{
    let x_dir = position.x - this.x
    let y_dir = position.y - this.y
    const length = this.norm(x_dir,y_dir)
    if(length == 0){
      return true
    }
    else if(length > this.norm(this.x_velocity,this.y_velocity)){
      const random_ratio = Math.max(length/20,0.1)
      const x_velocity_delta = (x_dir+random_ratio*(Math.random()-0.5)) / length * this.speed - this.x_velocity
      const y_velocity_delta = (y_dir+random_ratio*(Math.random()-0.5)) / length * this.speed - this.y_velocity
      const velocity_delta = this.norm(x_velocity_delta,y_velocity_delta)
      if(velocity_delta>this.acceleration){
        this.x_velocity = this.x_velocity + x_velocity_delta/velocity_delta*this.acceleration
        this.y_velocity = this.y_velocity + y_velocity_delta/velocity_delta*this.acceleration
      }else{
        this.x_velocity = x_dir / length * this.speed
        this.y_velocity = y_dir / length * this.speed
      }
      this.x = this.x + this.x_velocity
      this.y = this.y + this.y_velocity
      return false
    }
    else
    {
      this.x = position.x
      this.y = position.y
      return true
    }
  }

  resize(size:number):boolean{
    if(this.size<size - 0.01){
      this.size+=0.01
    }else if(this.size>size + 0.01){
      this.size-=0.01
    }else{
      this.size = size
      return true
    }
    return false
  }

  draw():void{
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.context.fill();
  }

  position():{x:number,y:number}{
    return {x:this.x,y:this.y}
  }
}

const logo_data = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111000000000000011111111100000000000000000000000000000111111111111111110000000011111111111000000000000000000000000001111111111111111111111000000111111111100000000000000000000000011111111111111111111111111000001111111110000000000000000000000111111111111111111111111111110000011111111000000000000000000000111111111111111111111111111111110000111111100000000000000000000111111111111111111111111111111111100001111110000000000000000000111111111111111111111111111111111111000011111000000000000000000111111111111111111111111111111111111110000111100000000000000000111111111111111110000011111111111111111100001110000000000000000111111111111110000000000000111111111111111000010000000000000000111111111111100000000000000000011111111111110000000000000000000111111111111000000000000000000000111111111111000000000000000000111111111111000000000000000000000000111111111110000000000000000011111111111000000000000000000000000001111111111100000000000000011111111111000000000000000000000000000011111111110000000000000001111111111000000000000000000000000000001111111111100000000000001111111111000000000000000000000000000000011111111110000000000000111111111100000000000000000000000000000000111111111100000000000111111111100000000000000000000000000000000011111111110000000000011111111110000000000000000000000000000000000111111111000000000001111111110000000000000000000000000000000000011111111110000000000111111111000000000000000000000000000000000000111111111000000000111111111000000000000000000000000000000000000011111111100000000011111111100000000000000000000000000000000000001111111110000000001111111110000000000000000000000000000000000000111111111000000000111111111000000000000000000000000000000000000011111111100000000011111111100000000000000000000000000000000000001111111110000000001111111110000000000000000000000000000000000000011111111000000000111111111000000000000000000000000000000000000001111111100000000011111111100000000000000000000000000000000000000111111110000000001111111110000000000000000000000000000000000000111111111000000000111111111000000000000000000000000000000000000011111111100000000011111111100000000000000000000000000000000000001111111110000000001111111110000000000000000000000000000000000000111111111000000000011111111100000000000000000000000000000000000011111111100000000001111111110000000000000000000000000000000000011111111110000000000111111111000000000000000000000000000000000001111111111000000000011111111110000000000000000000000000000000001111111111100000000000111111111000000000000000000000000000000000111111111110000000000011111111110000000000000000000000000000000111111111111000000000000111111111100000000000000000000000000000011111111111100000000000011111111110000000000000000000000000000011111111111110000000000000111111111100000000000000000000000000011111111111111000000000000011111111111000000000000000000000000011111111111111100000000000000111111111111000000000000000000000011111111111111110000000000000001111111111110000000000000000000111111111111111111000000000000000111111111111110000000000000001111111111111111111100000000000000001111111111111111100000000111111111111111111111110000000000000000011111111111111111111111111111111111111111111111000000000000000000111111111111111111111111111111111111101111111100000000000000000001111111111111111111111111111111111100111111110000000000000000000001111111111111111111111111111111100011111111000000000000000000000011111111111111111111111111111000001111111100000000000000000000000111111111111111111111111111000000111111110000000000000000000000000111111111111111111111110000000011111111000000000000000000000000000011111111111111111100000000001111111100000000000000000000000000000001111111111110000000000000011111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
const Canvas = (props:{ width:number, height:number }) => {
const canvasRef = useRef<HTMLCanvasElement>(null);
useEffect(() => {
  if (canvasRef.current) {
    const canvas = canvasRef.current;
    let mouse_x = 0
    let mouse_y = 0
    canvas.addEventListener("mousemove", function __handler__(event) {
      var x = event.clientX;
      var y = event.clientY;
      var rect = canvas.getBoundingClientRect();
      mouse_x = x - rect.left;
      mouse_y = y - rect.top;
    });

    const context = canvas.getContext('2d');
    if (context) {
      let targets_random:Array<{x:number,y:number}> = []
      let targets_logo:Array<{x:number,y:number}> = []
      let sizes_random:Array<number> = []
      let sizes_logo:Array<number> = []
      let arrival:Array<number> = [] 
      let points:Array<AnimationPoint> = []
      const width = 64
      const height = 64
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const x_center = x - width / 2
          const y_center = y - height / 2
          const radius = Math.sqrt(x_center * x_center + y_center * y_center)
          if(radius < Math.max(width/2,height/2)){
            const x_start = x / width * props.width
            const y_start = y / height * props.height
            const speed = 3 + 4 * Math.random()
            const acceleration = 0.02 + 0.08 * Math.random()
            points.push(new AnimationPoint(x_start,y_start,acceleration,speed,3,context))
            arrival.push(0)
          }
        }
      }

      points.forEach((point)=>{
        let position = point.position()
        const x_random = position.x + Math.random() * 160 - 20
        const y_random = position.y + Math.random() * 160 - 80
        targets_random.push({x:x_random,y:y_random})
        sizes_random.push(Math.random()*5)
      })

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if(logo_data[y * width + x]=="1"){
            const x_logo = x / width * props.width
            const y_logo = y / height * props.height
            targets_logo.push({x:x_logo,y:y_logo})
            sizes_logo.push(2 + Math.random()*2)
          }
        }
      }
      while(targets_logo.length<points.length){
        let position = targets_random[targets_logo.length]
        const x_random = position.x + Math.random() * 160 - 80
        const y_random = position.y + Math.random() * 160 - 80
        targets_logo.push({x:x_random,y:y_random})
        sizes_logo.push(0)
      }

      const first_draw =  () => {
        context.clearRect(0, 0, props.width, props.height);
        for(let i = 0;i < points.length;i++){
          points[i].draw()
        }
        setTimeout(draw,1000)
      };

      

      const draw = () => {
        context.clearRect(0, 0, props.width, props.height);
        for(let i = 0;i < points.length;i++){
          const point = points[i]
          if(point.distance(mouse_x,mouse_y)<20){
            arrival[i] = 0
            let position = point.position()
            const x_random = position.x + Math.random() * 40 - 20
            const y_random = position.y + Math.random() * 40 - 20
            targets_random[i] = {x:x_random,y:y_random}
          }
          switch(arrival[i]){
            case 0:{
              let target = targets_random[i]
              let size = sizes_random[i]
              if(point.move(target)){
                arrival[i] = arrival[i] + 1
              }
              if(point.resize(size)){
                sizes_random[i] = Math.random()*5
              }
              break
            }
            default:{
              let target = targets_logo[i]
              let size = sizes_logo[i]
              point.move(target)
              if(point.resize(size)){
                if(size>0){
                  arrival[i] = arrival[i] + 1
                  const random_ratio = 1 / (1 + (arrival[i]-1)/50)
                  sizes_logo[i] = 3 - random_ratio + Math.random() * random_ratio * 2
                }
              }
              break
            }
          }

          
          point.draw()
        }
        requestAnimationFrame(draw);
      };
      
      first_draw()
    }
  }
}, [props.width, props.height]); // 只有当width或height属性变化时，才重新执行useEffect中的逻辑

// 返回一个canvas元素，并将其引用传递给canvasRef
return <canvas ref={canvasRef} width={props.width} height={props.height} />;
};



export const HomePage = (props: {}) => {
  return (
    <div>
      <Nav page={0}/>
      <Body />
    </div>
  );
};

// export default HomePage;
