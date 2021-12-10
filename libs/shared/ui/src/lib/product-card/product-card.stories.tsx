import { Story, Meta } from '@storybook/react';
import { ProductCard, ProductCardProps } from './product-card';

export default {
  component: ProductCard,
  title: 'Card/Product Card',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

const Template: Story<ProductCardProps> = (args) => (
  <div
    style={{
      width: 200,
    }}
  >
    <ProductCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Y.O.U Makeups',
  rating: 4.1,
  description: 'Rouge Velvet Matte Lip Cream',
  image:
    'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
};
