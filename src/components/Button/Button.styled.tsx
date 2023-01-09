import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { ButtonColorType, ButtonSize } from './Button';

const StyledButtonBasic = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.borderRadius_small};
  outline: 0;
`;

const colorTypeCss = {
  primary: {
    color: theme.color.colorWhite,
    backgroundColor: theme.color.colorBlue
  },
  secondary: {
    color: theme.color.colorPrimary,
    backgroundColor: theme.color.colorBorder
  },
  outlined: {
    color: theme.color.colorBlue,
    backgroundColor: theme.color.colorWhite
  },
  ghost: {
    color: theme.color.colorPrimary,
    backgroundColor: theme.color.colorWhite
  }
};

const StyledButtonColor = styled(StyledButtonBasic)<{ colorType: ButtonColorType }>`
  ${({ colorType }) => colorTypeCss[colorType]};
`;

const sizeTypeCss = {
  xSmall: {
    height: '32px',
    padding: '4px 8px'
  },
  small: {
    height: '40px',
    padding: '8px'
  },
  medium: {
    height: '48px',
    padding: '12px 8px'
  },
  large: {
    height: '55px',
    padding: '14px 8px'
  }
};

const StyledButtonSize = styled(StyledButtonColor)<{ size: ButtonSize }>`
  ${({ size }) => sizeTypeCss[size]}
`;

export const StyledButton = styled(StyledButtonSize)<{ colorType: ButtonColorType }>`
  ${({ theme, colorType }) => colorType === 'outlined' && `border: 1px solid ${theme.color.colorBlue}`};

  &:hover {
    box-shadow: inset 100rem 100rem rgb(0 0 0 / 40%);
    ${({ colorType }) => colorType === 'outlined' && `box-shadow: inset 100rem 100rem rgb(236 246 254 / 40%) `};
  }

  &:disabled {
    cursor: default;
    box-shadow: none;
    opacity: 0.4;
  }
`;
