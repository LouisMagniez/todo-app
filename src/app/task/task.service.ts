import { Injectable } from "@angular/core"
import { Task } from "./task"
import { TASKS } from "./mock-task-list"

@Injectable()
export class TaskService {
  task!: Task

  getTaskList(): Task[] {
    return TASKS
  }

  addTask(task: Task): any {
    return TASKS.unshift(task)
  }
}
