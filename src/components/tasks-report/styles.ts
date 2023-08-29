import styled, { css } from 'styled-components/native';

export const Container = styled.View`

  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<{ completed?: boolean; }>`
  ${({ theme, completed }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${completed ? theme.COLORS.PURPLE : theme.COLORS.BLUE};
  `}
`;

export const Number = styled.View`

  justify-content: center;
  align-items: center;

  margin-left: 8px;
  padding: 4px 8px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const NumberText = styled.Text`

  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
