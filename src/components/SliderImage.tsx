import Image from 'next/image';
import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
export default class SliderImage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>
          <b>Hot Picks</b>
        </h2>
        <Slider {...settings}>
          <div>
            <Image
              src="/artwork/1.jpg"
              className=""
              alt=""
              width="640"
              height="36"
            />
          </div>
          <div>
            <Image
              src="/artwork/2.jpg"
              className=""
              alt=""
              width="640"
              height="36"
            />
          </div>
          <div>
            <Image
              src="/artwork/3.jpg"
              className=""
              alt=""
              width="640"
              height="36"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
