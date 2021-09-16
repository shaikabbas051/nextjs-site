import Image from "next/image";
import { useState, useRef } from "react";

const res = [
  {
    url: "https://images.pexels.com/photos/327539/pexels-photo-327539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/2389157/pexels-photo-2389157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/2872872/pexels-photo-2872872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/800694/pexels-photo-800694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/462869/pexels-photo-462869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    url: "https://images.pexels.com/photos/5037913/pexels-photo-5037913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    url: "https://images.pexels.com/photos/1738997/pexels-photo-1738997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
function Testimonial() {
  const [active, setActive] = useState(0);
  const width = 400;
  return (
    <div className={"testimonial-container"} style={{ width: `${width}px` }}>
      <MultiItemCarousel
        activeIndex={active}
        noOfElementsToShow={3}
        speed={500}
        spacingAround={20}
        width={width}
        setIndex={(idx) => setActive(idx)}
      />
    </div>
  );
}
const MultiItemCarousel = (props) => {
  const { activeIndex, noOfElementsToShow, speed, width, setIndex } = props;
  const transitionDuration = speed + "ms";
  const profileRef = useRef(null);
  const itemWidth = width / noOfElementsToShow;
  const move = (direction, position) => {
    console.log("in");
    if (!direction) {
      setIndex(position);
      return;
    }
    if (direction === -1) {
      if (activeIndex === 0) {
        profileRef.current.style.transitionDuration = "0s";
        profileRef.current.style.transform = `translateX(${
          (res.length + 1) * -1 * itemWidth
        }px)`;
        setTimeout(() => {
          profileRef.current.style.transitionDuration = transitionDuration;
          setIndex(res.length - 1);
        }, 0);
      } else {
        setIndex(activeIndex - 1);
      }
    } else {
      moveRight();
    }
  };
  const moveRight = () => {
    if (activeIndex === res.length - 1) {
      profileRef.current.style.transitionDuration = "0s";
      profileRef.current.style.transform = `translateX(0px)`;
      setTimeout(() => {
        profileRef.current.style.transitionDuration = transitionDuration;
        setIndex(0);
      }, 0);
    } else {
      setIndex(activeIndex + 1);
    }
  };
  const getSlidePixels = (slideNo = activeIndex) => {
    return (slideNo + 1) * -1 * itemWidth;
  };
  const sliderStyle = {
    transform: `translate3d(${getSlidePixels()}px, 0px, 0px)`,
    transitionDuration: `${transitionDuration}`,
    // paddingLeft: `${spacingAround}px`,
    // paddingRight: `${spacingAround}px`
  };
  const getClonedElements = (type) => {
    const extraElems = Math.ceil(noOfElementsToShow / 2);
    let startIdx = 0;
    if (type === "before") {
      startIdx = res.length - extraElems;
    }
    return (
      <>
        {res.slice(startIdx, startIdx + extraElems).map((item, i) => {
          return getSlide(item, startIdx + i, true);
        })}
      </>
    );
  };
  const getSlide = (obj, idx, cloned) => {
    return (
      <div
        className={`slide ${cloned ? "_cloned" : ""} ${
          idx === activeIndex ? "slide-active" : ""
        }`}
        style={{ width: `${itemWidth}px` }}
      >
        {/* <img src={obj.url} style={{}} onClick={() => move(null, idx)} /> */}
        <Image src={obj.url} width={50} height={50} objectFit="cover" />
      </div>
    );
  };
  const contentStyle = {
    // transform:"initial",
    transitionDuration: `${transitionDuration}ms`,
    transitionDelay: `${transitionDuration}ms`,
    transitionProperty: "all",
    transitionTimingFunction: "ease-out",
  };
  return (
    <>
      <p className={"mainTestimonial"}>Testimonial</p>
      <div className={"content-elem"}>
        <span className={"top-slicer"} />
        <span className={"bottom-slicer"} />
        <p style={{ contentStyle }}>
          Content-{activeIndex + 1} Live stream is one of the newest thing we
          have to be able to watch while we're away from home. Netflix has great
          quality service. You can binge watch series that you may have wanted
          to watch but didn't want to watch from season 4. Just start it at
          season 1 and go. Don't have to be at home, you just take it with you.
        </p>
      </div>
      <div
        style={{ position: "relative", overflow: "hidden", marginTop: "40px" }}
      >
        <div className={"slider"} style={sliderStyle} ref={profileRef}>
          {getClonedElements("before")}
          {res.map((d, idx) => {
            return getSlide(d, idx);
          })}
          {getClonedElements("after")}
        </div>
      </div>
      <div className={"control-arrow-left"} onClick={() => move(-1)}>
        <span className={""} />
      </div>
      <div className={"control-arrow-right"}>
        <span className={""} onClick={() => move(1)} />
      </div>
      <div className={"profile-info"} style={{ width: `${itemWidth}px` }}>
        <p className={"title"}>Name-{activeIndex + 1}</p>
        <p className={"subtitle"}>Org Name</p>
      </div>
      <style>
        {`
            .testimonial-container {
              margin: auto;
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
           }
            .testimonial-container p {
              margin: 0px;
           }
            .testimonial-container .mainTestimonial {
              margin-bottom: 25px;
              text-align: center;
              font-size: 22px;
              color: #ff8a00;
           }
            .testimonial-container .content-elem {
              height: 200px;
              width: 400px;
              border: 2px solid #bfbcbc;
              margin: auto;
              border-radius: 5px;
              position: relative;
              padding: 10px 25px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
           }
            .testimonial-container .content-elem:after {
              content: "";
              width: 30px;
              height: 30px;
              background: white;
              position: absolute;
              top: 100%;
              left: 50%;
              margin-left: -15px;
              transform: rotate(45deg);
              margin-top: -15px;
              border-top: 0px solid #bfbcbc;
              border-bottom: 2px solid #bfbcbc;
              border-left: 0px solid #bfbcbc;
              border-right: 2px solid #bfbcbc;
              border-bottom-right-radius: 3px;
           }
            .testimonial-container .content-elem .top-slicer, .testimonial-container .content-elem .bottom-slicer {
              height: 2px;
              background: white;
              width: 5px;
              position: absolute;
           }
            .testimonial-container .content-elem .top-slicer:after, .testimonial-container .content-elem .bottom-slicer:after, .testimonial-container .content-elem .top-slicer:before, .testimonial-container .content-elem .bottom-slicer:before {
              height: 2px;
              position: absolute;
              background: white;
              content: "";
           }
            .testimonial-container .content-elem .top-slicer:after, .testimonial-container .content-elem .bottom-slicer:after {
              width: 10px;
              right: -20px;
           }
            .testimonial-container .content-elem .top-slicer:before, .testimonial-container .content-elem .bottom-slicer:before {
              width: 15px;
              left: -50px;
           }
            .testimonial-container .content-elem .top-slicer {
              right: 50px;
              top: -2px;
           }
            .testimonial-container .content-elem .bottom-slicer {
              left: 80px;
              bottom: -2px;
           }
            .testimonial-container .control-arrow-right, .testimonial-container .control-arrow-left {
              width: 30px;
              height: 50px;
              position: absolute;
           }
            .testimonial-container .control-arrow-right:hover, .testimonial-container .control-arrow-left:hover {
              cursor: pointer;
           }
            .testimonial-container .control-arrow-right span, .testimonial-container .control-arrow-left span {
              width: 100%;
              height: 2px;
              background: #cadfe4;
              position: absolute;
              top: 50%;
              margin-top: -2px;
           }
            .testimonial-container .control-arrow-right span:after, .testimonial-container .control-arrow-left span:after, .testimonial-container .control-arrow-right span:before, .testimonial-container .control-arrow-left span:before {
              position: absolute;
              background: #cadfe4;
              width: 20px;
              content: "";
              height: 2px;
           }
            .testimonial-container .control-arrow-right span:after, .testimonial-container .control-arrow-left span:after {
              transform: rotate(-40deg);
           }
            .testimonial-container .control-arrow-right span:before, .testimonial-container .control-arrow-left span:before {
              transform: rotate(40deg);
           }
            .testimonial-container .control-arrow-right {
              transform: translate3d(calc(100% + 20px), -100%, 0px);
              right: 0;
           }
            .testimonial-container .control-arrow-right span {
              right: 0px;
           }
            .testimonial-container .control-arrow-right span:after, .testimonial-container .control-arrow-right span:before {
              transform-origin: center right;
              right: 0px;
           }
            .testimonial-container .control-arrow-left {
              transform: translate3d(calc(-100% - 20px), -100%, 0px);
              left: 0;
           }
            .testimonial-container .control-arrow-left span:after, .testimonial-container .control-arrow-left span:before {
              transform-origin: center left;
              left: 0px;
           }
            .testimonial-container .slider {
              display: flex;
              justify-content: space-between;
              position: relative;
              text-align: center;
              overflow: hidden;
              height: 50px;
              width: fit-content;
              transition-property: all;
              transition-timing-function: ease-out;
           }
            .testimonial-container .slider img {
              
              border-radius: 50px;
           }
            .testimonial-container .slider img:hover {
              cursor: pointer;
           }
            .testimonial-container .profile-info {
              margin: auto;
              text-align: center;
              margin-top: 20px;
              line-height: 1.4;
           }
            .testimonial-container .profile-info .subtitle {
              color: grey;
           }
            
          `}
      </style>
    </>
  );
};
