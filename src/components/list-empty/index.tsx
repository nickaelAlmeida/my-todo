import { Container, Icon, Message } from './styles';

export function ListEmpty () {
  return (
    <Container>
      <Icon name="content-paste" />
      <Message bold={true}>You don't have any tasks registered yet.</Message>
      <Message>Create tasks and organize your to-do items.</Message>
    </Container>
  );
}
