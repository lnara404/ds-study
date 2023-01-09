import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const ButtonTemplate: Story<IButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
export const ButtonStory = ButtonTemplate.bind({});
ButtonStory.storyName = 'basic';
ButtonStory.args = {
  type: 'primary',
  children: '버튼입니다'
};
