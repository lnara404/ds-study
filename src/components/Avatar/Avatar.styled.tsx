import styled from '@emotion/styled';
import { AvatarSize } from './Avatar';

const sizeTypeCss = {
  medium: {
    width: '32px',
    height: '32px'
  },
  small: {
    width: '24px',
    height: '24px'
  }
};

export const StyledAvatar = styled.div<{ size: AvatarSize }>`
  display: inline-flex;
  overflow: hidden;
  ${({ size }) => sizeTypeCss[size]};

  border-radius: 50%;
`;

export const StyledAvatarImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
