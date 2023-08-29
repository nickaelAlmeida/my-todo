import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Header = styled.View`

  position: absolute;

  width: 100%;
  height: 173px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;
