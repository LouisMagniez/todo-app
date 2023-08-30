import { Injectable } from '@angular/core'
import { type Task } from './task'
import { TASKS } from './mock-task-list'

@Injectable()

export class TaskService {
  getTaskList (): Task[] {
    return TASKS
  }

  addTask (task: Task): any {
    return TASKS.unshift(task)
  }
}
