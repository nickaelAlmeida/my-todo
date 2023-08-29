import { MaterialIcons } from '@expo/vector-icons';
import { Container } from './styles';

export function Checkbox ({ isChecked = false }: { isChecked?: boolean; }) {
  return (
    <Container isChecked={isChecked}>
      {isChecked && (<MaterialIcons name="check" size={12} color="#fff" />)}
    </Container>
  );
}
