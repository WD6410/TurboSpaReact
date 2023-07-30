import { appUtils } from 'shared/utils';

export type TaskStatus = 'TODO' | 'IN PROGRESS' | 'TESTING' | 'DONE';

export const mapStatusColor: Record<TaskStatus, string> = {
  TODO: '#F59F00',
  'IN PROGRESS': '#1C7ED6',
  TESTING: '#F76707',
  DONE: '#37B24D',
};

export interface Task {
  id: string | number;
  title: string;
  tag: string;
  status: TaskStatus;
  author: string;
  authorUrl: string;
  createdAt: string;
  updatedAt: string;
}

export class TaskModel implements Task {
  id: string | number;
  title: string;
  tag: string;
  status: TaskStatus;
  author: string;
  authorUrl: string;
  createdAt: string;
  updatedAt: string;

  constructor(task: Task) {
    this.id = task.id;
    this.title = task.title;
    this.tag = task.tag;
    this.status = task.status;
    this.author = task.author;
    this.authorUrl = task.authorUrl;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }

  getNetID() {
    return `NET-${this.id}`;
  }

  getCreatedAt() {
    return appUtils.formatDate(this.createdAt);
  }

  getUpdatedAt() {
    return appUtils.formatDate(this.updatedAt);
  }

  getColorByStatus() {
    return mapStatusColor[this.status];
  }
}
