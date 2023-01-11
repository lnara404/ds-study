import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PriceSize } from './Price';

export const StyledPrice = styled.div<{ size: PriceSize; priceOff?: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${({ theme, priceOff }) => (priceOff ? theme.color.colorSecondary : theme.color.colorDark)};

  ${({ priceOff }) => priceOff && `text-decoration: line-through`};

  .amount {
    font-family: Tahoma, sans-serif;
    font-weight: ${({ theme, priceOff }) =>
      priceOff ? theme.fontWeight.fontWeight_light : theme.fontWeight.fontWeight_bold};

    ${({ theme, size }) => {
      if (size === 'large') {
        return css`
          font-size: ${theme.fontSize.fontSize_xLarge};
        `;
      } else if (size === 'medium') {
        return css`
          font-size: ${theme.fontSize.fontSize_medium};
        `;
      } else {
        return css`
          font-size: ${theme.fontSize.fontSize_base};
        `;
      }
    }};

    ${({ theme, priceOff }) => priceOff && `font-size: ${theme.fontSize.fontSize_small}`};

    letter-spacing: -2%;
  }

  .currency {
    ${({ theme, size }) => {
      if (size === 'large') {
        return css`
          font-size: ${theme.fontSize.fontSize_large};
        `;
      } else if (size === 'medium') {
        return css`
          font-size: ${theme.fontSize.fontSize_base};
        `;
      } else {
        return css`
          font-size: ${theme.fontSize.fontSize_small};
        `;
      }
    }};

    ${({ theme, priceOff }) => priceOff && `font-size: ${theme.fontSize.fontSize_small}`};

    font-weight: ${({ theme, priceOff }) =>
      priceOff ? theme.fontWeight.fontWeight_light : theme.fontWeight.fontWeight_bold};
  }
`;
