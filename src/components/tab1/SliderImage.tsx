import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
export default function GameListTab() {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-3 pb-5 pt-4">
      <h2>
        <b>Hot Picks</b>
      </h2>
      <Slider {...settings}>
        <div>
          <Image
            src="/artwork/carousel-1.png"
            className=""
            alt=""
            width="512"
            height="32"
            onClick={() => {
              router.push('/newbattle/1');
            }}
          />
        </div>
        <div>
          <Image
            src="/artwork/carousel-2.jpeg"
            className=""
            alt=""
            width="512"
            height="32"
            onClick={() => {
              router.push('/newbattle/11');
            }}
          />
        </div>
        <div>
          <Image
            src="/artwork/carousel-3.jpeg"
            className=""
            alt=""
            width="512"
            height="32"
            onClick={() => {
              router.push('/newbattle/15');
            }}
          />
        </div>
      </Slider>
    </div>
  );
}
