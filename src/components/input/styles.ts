import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput).attrs<{ isFocused: boolean; }>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`

  flex: 1;

  min-height: 54px;
  max-height: 54px;
  padding: 16px;

  border-radius: 6px;
  border-width: 1px;

  ${({ theme, isFocused }) => css`

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};

    border-color: ${isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
    background-color: ${theme.COLORS.GRAY_500};
  `}
`;
