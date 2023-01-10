import { Story, Meta } from '@storybook/react';
import { Tag, ITagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag
} as Meta;

const TagTemplate: Story<ITagProps> = ({ children, ...rest }) => {
  return <Tag {...rest}>{children}</Tag>;
};
export const TagStory = TagTemplate.bind({});
TagStory.storyName = 'basic';
TagStory.args = {
  type: 'red',
  children: 'Badge'
};
