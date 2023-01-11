import { Story, Meta } from '@storybook/react';
import { Avatar, IAvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

const AvatarTemplate: Story<IAvatarProps> = ({ ...rest }) => {
  return <Avatar {...rest} />;
};
export const AvatarStory = AvatarTemplate.bind({});
AvatarStory.storyName = 'basic';
AvatarStory.args = {
  size: 'medium',
  imageUrl: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202007/13/img_20200713162813_1c06b26a.webp'
};
