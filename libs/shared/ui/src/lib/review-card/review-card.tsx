import { ReviewType } from '@female-daily/shared/types';
import { StarRating } from '../..';

/* eslint-disable-next-line */
export interface ReviewCardProps extends ReviewType {}

export function ReviewCard(props: ReviewCardProps) {
  return (
    <div className="relative">
      <div className="rounded-lg border border-gray-200 py-6 px-2.5">
        <div className="flex items-center gap-x-4 pb-3 mb-3 border-b-2 border-gray-200">
          <img
            src={props.product.image}
            alt={props.product.name}
            className="object-cover object-center"
            style={{
              width: 55,
            }}
          />
          <div className="flex flex-col">
            <div className="text-base font-bold uppercase">
              {props.product.name}
            </div>
            <div className="text-base font-normal">{props.product.desc}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <StarRating star={props.star} size={5} />
          <span className="text-xs text-gray-400">2 hours ago</span>
        </div>

        <div className="flex flex-col">
          <div className="text-sm text-gray-800 truncate">{props.comment}</div>
          <a href="#" className="text-sm text-base text-primary">
            Read More
          </a>
        </div>
      </div>

      <div
        className="z-10 absolute flex flex-col items-center justify-center"
        style={{
          left: '50%',
          transform: 'translate(-50%, -22.5px)',
        }}
      >
        <img
          src="https://picsum.photos/id/1/200/300"
          alt={props.profile[0]}
          className="rounded-full object-cover object-center mb-2"
          style={{
            width: 45,
            height: 45,
          }}
        />
        <p className="text-sm text-gray-800 font-medium">{props.profile[0]}</p>
        <span className="text-xs text-gray-400">
          {[...props.profile.slice(1)].join(', ')}
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
