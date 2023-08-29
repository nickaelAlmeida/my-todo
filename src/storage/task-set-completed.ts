import AsyncStorage from '@react-native-async-storage/async-storage';
import { TASKS_COLLECTION_KEY } from './config';
import { Task } from '../interfaces/task';
import { tasksGetAll } from './tasks-get-all';

export async function taskSetCompleted (id: string): Promise<Task[]> {
  try {

    const tasks = await tasksGetAll();
    const updated = tasks.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
    const data = JSON.stringify(updated);

    await AsyncStorage.setItem(TASKS_COLLECTION_KEY, data);
    return updated;

  } catch (error) {
    throw error;
  }
}
