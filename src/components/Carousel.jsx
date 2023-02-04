import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stacks } from "../constants";
import styles from "../style";
import { Tooltip } from 'antd';
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{
    }}>
      <Slider
        style={{
          gap:"45px"
        }}
        {...settings}>
        {Stacks.map((client) => (
          <div key={client.id} className={`gap-10`}>
            <img src={client.logo} alt="client_logo" className="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
