import Slider from 'react-slick';
import { ReviewType } from '@female-daily/shared/types';
import { ReviewCard } from '../..';
import { Fragment, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

/* eslint-disable-next-line */
export interface ReviewsSliderProps {
  reviews: ReviewType[];
}

export function ReviewsSlider(props: ReviewsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    centerPadding: '100px',
    slidesToShow: 2,
    slidesToScroll: 1,
    className: '-mx-5',
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
    <Slider {...settings}>
      {props.reviews.map((review, index) => (
        <div key={index} className="px-5">
          <ReviewCard {...review} />
        </div>
      ))}
    </Slider>
  );
}

export default ReviewsSlider;
