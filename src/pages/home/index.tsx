import { useRef, useState } from 'react';
import { FlatList, Keyboard, TextInput } from 'react-native';
import { useTasks } from '../../hooks/tasks';
import { Loading } from '../../components/loading';
import { Page } from '../../components/page';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { TasksReport } from '../../components/tasks-report';
import { Task } from '../../components/task';
import { ListEmpty } from '../../components/list-empty';
import { Form } from './styles';

export function Home () {

  const inputRef = useRef<TextInput>(null);
  const [taskLabel, setTaskLabel] = useState<string>('');

  const {
    isLoading,
    tasks,
    totTasks,
    totCompleted,
    add,
    setCompleted,
    remove
  } = useTasks();

  const handleAddTask = async () => {

    const label = taskLabel.trim();
    if (label.length === 0) return;

    await add(label);

    inputRef.current?.blur();
    Keyboard.dismiss();
    setTaskLabel('');
  };

  return (
    <Page>
      <Header />

      <Form>
        <Input
          inputRef={inputRef}
          placeholder="Add a new task"
          autoCapitalize="words"
          autoCorrect={false}
          value={taskLabel}
          onChangeText={setTaskLabel}
          returnKeyType="done"
          onSubmitEditing={handleAddTask}
        />

        <Button onPress={handleAddTask} />
      </Form>

      <TasksReport
        total={totTasks}
        completed={totCompleted}
      />

      {isLoading ? <Loading /> :
        <FlatList
          data={tasks}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Task
              completed={item.completed}
              label={item.label}
              onCompleted={() => setCompleted(item.id)}
              onRemove={() => remove(item.id)}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
          showsVerticalScrollIndicator={false}
        />
      }
    </Page>
  );
}
