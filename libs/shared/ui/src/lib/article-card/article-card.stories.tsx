import { Story, Meta } from '@storybook/react';
import { ArticleCard, ArticleCardProps } from './article-card';

export default {
  component: ArticleCard,
  title: 'Card/Article Card',
} as Meta;

const Template: Story<ArticleCardProps> = (args) => (
  <div
    style={{
      width: 260,
    }}
  >
    <ArticleCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
  author: 'celle',
  image: 'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
  published_at: '4 hours ago',
};
