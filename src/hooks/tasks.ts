import { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { Task } from '../interfaces/task';
import { tasksGetAll } from '../storage/tasks-get-all';
import { taskAdd } from '../storage/task-add';
import { taskRemove } from '../storage/task-remove';
import { taskSetCompleted } from '../storage/task-set-completed';

export function useTasks () {

  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  const [totTasks, totCompleted] = useMemo(() => {
    const completedCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
    return [tasks.length, completedCount];
  }, [tasks]);

  const getAll = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await tasksGetAll();
      setTasks(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('ToDo List', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const add = async (label: string): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await taskAdd({ label, completed: false });
      setTasks(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('ToDo List', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const setCompleted = async (id: string): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await taskSetCompleted(id);
      setTasks(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('ToDo List', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const removeConfirm = async (id: string): Promise<void> => {
    try {
      setIsLoading(true);
      const newList = await taskRemove(id);
      setTasks(newList);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('ToDo List', 'Something went wrong. Try again later.');
      console.error(error);
    }
  };

  const remove = async (id: string): Promise<void> => {
    Alert.alert(
      'Remove Task',
      'Are you sure you want to remove the task?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', onPress: () => removeConfirm(id) }
      ]
    );
  };

  useEffect(() => {
    getAll();
  }, []);

  return {
    isLoading,
    tasks,
    totTasks,
    totCompleted,
    add,
    setCompleted,
    remove
  };
}
