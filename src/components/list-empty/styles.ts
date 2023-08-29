import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`

  flex: 1;
  justify-content: center;
  align-items: center;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Message = styled.Text<{ bold?: boolean; }>`

  text-align: center;
  margin-bottom: 3px;

  ${({ theme, bold }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 100,
  color: theme.COLORS.GRAY_400
}))`
  margin: 60px 0 30px;
`;
