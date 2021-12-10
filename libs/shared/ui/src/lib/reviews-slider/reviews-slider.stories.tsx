import { Story, Meta } from '@storybook/react';
import { ReviewsSlider, ReviewsSliderProps } from './reviews-slider';

export default {
  component: ReviewsSlider,
  title: 'Reviews Slider',
} as Meta;

const Template: Story<ReviewsSliderProps> = (args) => (
  <div
    style={{
      height: 300,
    }}
  >
    <ReviewsSlider {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  reviews: [
    {
      user: 'atikaxr',
      profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
      product: {
        image:
          'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
        name: 'Tony Moly',
        desc: 'Delight Tony Tint',
      },
      star: 3,
      comment:
        'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
    },
    {
      user: 'atikaxr',
      profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
      product: {
        image:
          'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
        name: 'Tony Moly',
        desc: 'Delight Tony Tint',
      },
      star: 3,
      comment:
        'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
    },
    {
      user: 'atikaxr',
      profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
      product: {
        image:
          'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
        name: 'Tony Moly',
        desc: 'Delight Tony Tint',
      },
      star: 3,
      comment:
        'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
    },
  ],
};
