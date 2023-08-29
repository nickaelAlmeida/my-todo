import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`

  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 15px;
  margin-bottom: 8px;

  border-width: 1px;
  border-radius: 8px;

  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_400};
    background-color: ${theme.COLORS.GRAY_500};
  `}
`;

export const LabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<{ completed?: boolean; }>`

  flex: 1;
  margin: 0 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  ${({ theme, completed }) => completed && css`
    color: ${theme.COLORS.GRAY_300};
    text-decoration: line-through;
    text-decoration-color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_300
}))``;
