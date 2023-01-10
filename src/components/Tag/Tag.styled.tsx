import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { TagColorType } from './Tag';

const colorTypeCss = {
  red: {
    color: theme.color.colorWhite,
    backgroundColor: theme.color.colorRed
  },
  green: {
    color: theme.color.colorWhite,
    backgroundColor: theme.color.colorGreen
  },
  grey: {
    color: theme.color.colorSecondary,
    backgroundColor: theme.color.colorBorder
  }
};

export const StyledTag = styled.span<{ colorType: TagColorType }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  font-size: ${({ theme }) => theme.fontSize.fontSize_micro};
  font-weight: ${({ theme }) => theme.fontWeight.fontWeight_bold};
  border-radius: ${({ theme }) => theme.radius.borderRadius_small};

  ${({ colorType }) => colorTypeCss[colorType]};
`;
