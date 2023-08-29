import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { TASKS_COLLECTION_KEY } from './config';
import { Task } from '../interfaces/task';
import { tasksGetAll } from './tasks-get-all';

export async function taskAdd (task: Omit<Task, 'id'>): Promise<Task[]> {
  try {

    const tasks = await tasksGetAll();
    const newList = [...tasks, { ...task, id: String(uuid.v4()) }];
    const data = JSON.stringify(newList);

    await AsyncStorage.setItem(TASKS_COLLECTION_KEY, data);
    return newList;

  } catch (error) {
    throw (error);
  }
}
