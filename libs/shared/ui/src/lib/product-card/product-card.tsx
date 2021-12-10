import { ProductType } from '@female-daily/shared/types';
import { StarIcon } from '@heroicons/react/solid';
import { StarRating } from '../..';

/* eslint-disable-next-line */
export interface ProductCardProps extends ProductType {}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className="px-4 bg-white flex flex-col">
      <div
        className="w-full flex items-center justify-center mb-4"
        style={{
          height: 177,
        }}
      >
        <img
          src={`https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png`}
          alt=""
          className="w-auto h-full"
        />
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="flex items-center gap-x-1.5 mb-4">
          <span className="text-sm font-semibold">{props.rating}</span>
          <StarRating star={props.rating} />
          <span className="text-sm">(1)</span>
        </div>
        <div className="text-base font-bold mb-2">{props.name}</div>
        <p
          className="text-sm overflow-hidden overflow-ellipsis leading-5 mb-2"
          style={{
            height: 40,
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
