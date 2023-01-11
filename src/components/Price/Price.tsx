import React from 'react';
import { StyledPrice } from './Price.styled';

export type PriceSize = 'large' | 'medium' | 'small';

export interface IPriceProps {
  size?: PriceSize;
  amount: number;
  priceOff?: boolean;
}

export const Price = ({ size = 'medium', amount, priceOff = false }: IPriceProps) => {
  return (
    <StyledPrice size={size} priceOff={priceOff}>
      <strong className='amount'>{amount}</strong>
      <span className='currency'>원</span>
    </StyledPrice>
  );
};
