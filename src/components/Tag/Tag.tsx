import React from 'react';
import { StyledTag } from './Tag.styled';

export type TagColorType = 'red' | 'green' | 'grey';

export interface ITagProps {
  type?: TagColorType;
  children?: React.ReactNode;
  className?: string;
}

export const Tag = ({ type = 'red', children, className }: ITagProps) => {
  return (
    <StyledTag colorType={type} className={className}>
      {children}
    </StyledTag>
  );
};
