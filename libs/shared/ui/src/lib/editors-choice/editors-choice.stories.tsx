import { Story, Meta } from '@storybook/react';
import { EditorsChoice, EditorsChoiceProps } from './editors-choice';

export default {
  component: EditorsChoice,
  title: 'Editors Choice',
} as Meta;

const Template: Story<EditorsChoiceProps> = (args) => (
  <EditorsChoice {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  editorsChoice: [
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image:
          'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image:
          'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image:
          'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image:
          'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png',
      },
    },
    {
      editor: 'annedean',
      role: 'Associate Editor',
      product: {
        name: 'Y.O.U Makeups',
        rating: 4.1,
        description: 'Rouge Velvet Matte Lip Cream',
        image:
          'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1621926306_yellow_800x800.png',
      },
    },
  ],
};
