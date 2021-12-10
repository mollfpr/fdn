import { Story, Meta } from '@storybook/react';
import { SectionHeading, SectionHeadingProps } from './section-heading';

export default {
  component: SectionHeading,
  title: 'Section Heading',
} as Meta;

const Template: Story<SectionHeadingProps> = (args) => (
  <SectionHeading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: `Editor's Choice`,
  subTitle: 'Curated with love',
};
