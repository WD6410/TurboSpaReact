import { alovaInstance } from 'shared/config/apiConfig';
import { endpointApi } from 'shared/config/constants';
import { Task } from '../model';

export const tasksApi = () => {
  return alovaInstance.Get<Task[]>(endpointApi.tasks);
};
