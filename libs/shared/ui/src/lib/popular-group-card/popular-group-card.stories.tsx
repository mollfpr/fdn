import { Story, Meta } from '@storybook/react';
import { PopularGroupCard, PopularGroupCardProps } from './popular-group-card';

export default {
  component: PopularGroupCard,
  title: 'Card/Popular Group Card',
} as Meta;

const Template: Story<PopularGroupCardProps> = (args) => (
  <div className="w-80">
    <PopularGroupCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Embrace the Curl',
  image: 'https://picsum.photos/id/1/200/300',
  description: 'May our curls pop and never stop!',
};
