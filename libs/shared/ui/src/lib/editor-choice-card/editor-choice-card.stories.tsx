import { Story, Meta } from '@storybook/react';
import { EditorChoiceCard, EditorChoiceCardProps } from './editor-choice-card';

export default {
  component: EditorChoiceCard,
  title: 'Card/Editor Choice Card',
} as Meta;

const Template: Story<EditorChoiceCardProps> = (args) => (
  <div className="w-44">
    <EditorChoiceCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  editor: 'Arinda',
  role: 'Senior Editor',
  product: {
    name: 'Y.O.U Makeups',
    rating: 4.1,
    description: 'Rouge Velvet Matte Lip Cream',
    image:
      'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
  },
};
