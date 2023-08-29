import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`

  justify-content: center;
  align-items: center;

  width: 53px;
  height: 53px;
  margin-left: 4px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
`;

export const Label = styled.Text`

  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.GRAY_300
}))``;
