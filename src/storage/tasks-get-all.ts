import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../interfaces/task';
import { TASKS_COLLECTION_KEY } from './config';

export async function tasksGetAll (): Promise<Task[]> {
  try {

    const data = await AsyncStorage.getItem(TASKS_COLLECTION_KEY);
    const tasks: Task[] = data ? JSON.parse(data) : [];

    return tasks;

  } catch (error) {
    throw error;
  }
}
