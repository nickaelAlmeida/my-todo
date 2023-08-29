import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

export function Button ({ ...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Icon name="add-circle-outline" />
    </Container>
  );
}
