import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Checkbox } from '../checkbox';
import { Container, Icon, Label, LabelContainer } from './styles';

interface TaskProps {
  completed?: boolean;
  label: string;
  onCompleted: () => void;
  onRemove: () => void;
}

export function Task ({
  completed = false,
  label,
  onCompleted,
  onRemove
}: TaskProps) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={onCompleted}>
        <LabelContainer>
          <Checkbox isChecked={completed} />
          <Label completed={completed}>{label}</Label>
        </LabelContainer>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={onRemove}>
        <Icon name="delete-outline" />
      </TouchableOpacity>
    </Container>
  );
}
