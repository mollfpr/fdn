import { ProductCard } from '../..';

/* eslint-disable-next-line */
export interface MatchesProductsProps {}

export function MatchesProducts(props: MatchesProductsProps) {
  return (
    <div className="py-4 bg-red-200">
      <div className="max-w-7xl mx-auto flex gap-x-8 items-center justify-end">
        <div className="w-52">
          <div className="text-lg font-bold mb-4">
            Looking for products that are just simply perfect for you?
          </div>
          <p className="text-sm">
            Here are some products that we believe match your skin, hair, and
            body! Have we metioned that yhey solve your concerns too?
          </p>
        </div>
        <div className="flex gap-x-4">
          <div className="rounded-lg overflow-hidden">
            <ProductCard
              name={'VAL BY VALERIE THOMAS'}
              rating={4.9}
              description={'Pure pressed blush'}
              image={
                'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png'
              }
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <ProductCard
              name={'VAL BY VALERIE THOMAS'}
              rating={4.9}
              description={'Pure pressed blush'}
              image={
                'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png'
              }
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <ProductCard
              name={'VAL BY VALERIE THOMAS'}
              rating={4.9}
              description={'Pure pressed blush'}
              image={
                'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchesProducts;
