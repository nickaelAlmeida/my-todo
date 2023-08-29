import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ isChecked: boolean; }>`

  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;

  border-radius: 9px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};

  ${({ theme, isChecked }) => isChecked && css`
    border-color: ${theme.COLORS.BLUE_DARK};
    background-color: ${theme.COLORS.BLUE_DARK};
  `}
`;
