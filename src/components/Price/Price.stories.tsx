import { Story, Meta } from '@storybook/react';
import { IPriceProps, Price } from './Price';

export default {
  title: 'Components/Price',
  component: Price
} as Meta;

const PriceTemplate: Story<IPriceProps> = ({ ...rest }) => {
  return <Price {...rest} />;
};
export const PriceStory = PriceTemplate.bind({});
PriceStory.storyName = 'basic';
PriceStory.args = {
  size: 'medium',
  amount: 40000,
  priceOff: false
};
