import React from 'react';
import { StyledAvatar, StyledAvatarImage } from './Avatar.styled';
import defaultImage from '../../../public/img-user-default.png';

export type AvatarSize = 'medium' | 'small';

export interface IAvatarProps {
  size?: AvatarSize;
  imageUrl: string;
}

export const Avatar = ({ size = 'medium', imageUrl = defaultImage }: IAvatarProps) => {
  return (
    <StyledAvatar size={size}>
      <StyledAvatarImage src={imageUrl} alt='프로필' />
    </StyledAvatar>
  );
};
