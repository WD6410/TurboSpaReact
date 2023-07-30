import type { LoaderFunctionArgs } from 'react-router-dom';
import { tasksApi } from '../services/tasksService';
import _ from 'lodash-es';
import { TaskModel } from '../model';

export async function tasksLoader(_props: LoaderFunctionArgs) {
  const tasks = await tasksApi().send();

  return _.map(tasks, (task) => new TaskModel(task));
}
