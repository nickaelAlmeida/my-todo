import { Column, Container, Label, Number, NumberText } from './styles';

interface TasksReportProps {
  total: number;
  completed: number;
}

export function TasksReport ({ total, completed }: TasksReportProps) {
  return (
    <Container>
      <Column>
        <Label>Total</Label>
        <Number>
          <NumberText>{total}</NumberText>
        </Number>
      </Column>

      <Column>
        <Label completed={true}>Completed</Label>
        <Number>
          <NumberText>{completed}</NumberText>
        </Number>
      </Column>
    </Container>
  );
}
