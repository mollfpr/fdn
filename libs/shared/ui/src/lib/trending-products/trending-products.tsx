import { useState } from 'react';
import Slider from 'react-slick';
import { ProductCard, SectionHeading } from '../..';

/* eslint-disable-next-line */
export interface TrendingProductsProps {}

export function TrendingProducts(props: TrendingProductsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: '-mx-2.5',
    appendDots: (dots: any) => <div className="flex items-center">{dots}</div>,
    customPaging: (i: number) => (
      <div
        className={`m-auto w-2 h-2 rounded-full bg-primary ${
          i === currentSlide ? 'opacity-100' : 'opacity-50'
        }`}
      ></div>
    ),
    beforeChange: (prev: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div>
      <div className="mb-6">
        <SectionHeading
          title="Trending This Week"
          subTitle="See our weekly most reviewed products"
        />
      </div>

      <Slider {...settings}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="px-2.5">
            <ProductCard
              name={'Y.O.U Makeups'}
              rating={4.1}
              description={'Rouge Velvet Matte Lip Cream'}
              image={
                'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png'
              }
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingProducts;
