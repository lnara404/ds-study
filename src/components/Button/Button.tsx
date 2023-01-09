import React from 'react';
import { StyledButton } from './Button.styled';

export type ButtonColorType = 'primary' | 'secondary' | 'outlined' | 'ghost';

export type ButtonSize = 'large' | 'medium' | 'small' | 'xSmall';

export interface IButtonProps {
  type?: ButtonColorType;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({ type = 'primary', size = 'medium', disabled, children }: IButtonProps) => {
  return (
    <StyledButton colorType={type} size={size} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
