import AsyncStorage from '@react-native-async-storage/async-storage';
import { TASKS_COLLECTION_KEY } from './config';
import { Task } from '../interfaces/task';
import { tasksGetAll } from './tasks-get-all';

export async function taskRemove (id: string): Promise<Task[]> {
  try {

    const tasks = await tasksGetAll();
    const filtered = tasks.filter(({ id: taskId }) => taskId !== id);
    const data = JSON.stringify(filtered);

    await AsyncStorage.setItem(TASKS_COLLECTION_KEY, data);
    return filtered;

  } catch (error) {
    throw error;
  }
}
