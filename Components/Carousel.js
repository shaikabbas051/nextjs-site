import React from "react";
import Image from "next/image";

function CarouselLeftArrow(props) {
  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--left"
      onClick={props.onClick}
    >
      <i className="material-icons">chevron_left</i>
    </a>
  );
}

function CarouselRightArrow(props) {
  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--right"
      onClick={props.onClick}
    >
      <i className="material-icons">chevron_right</i>
    </a>
  );
}

function CarouselIndicator(props) {
  return (
    <li>
      <a
        className={
          props.index == props.activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={props.onClick}
      />
    </li>
  );
}

function CarouselSlide(props) {
  return (
    <li
      className={
        props.index == props.activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }
    >
      <Image height={600} width={1080} src={props.slide} />
    </li>
  );
}

// Carousel wrapper component
class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />
        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={(e) => this.goToSlide(index)}
            />
          ))}
        </ul>
        <style>
          {`
              .carousel {
                
                width: 100%;
                overflow: hidden;
                padding-top: 20px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items:center;
              }
            
              .carousel__slide {
                display: none;
                text-align: center;
              }
            
              .carousel__slide--active {
                display: block;
              }
              .carousel__arrow--left{
                  margin-right:5px;
              }
              .carousel__arrow--right{
                  margin-left:5px;
              }
            
            
             
                  
          `}
        </style>
      </div>
    );
  }
}

// Render Carousel component
export default Carousel;
