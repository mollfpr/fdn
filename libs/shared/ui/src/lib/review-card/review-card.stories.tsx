import { Story, Meta } from '@storybook/react';
import { ReviewCard, ReviewCardProps } from './review-card';

export default {
  component: ReviewCard,
  title: 'Card/Review Card',
} as Meta;

const Template: Story<ReviewCardProps> = (args) => (
  <div
    style={{
      maxWidth: 350,
    }}
  >
    <ReviewCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
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
};
