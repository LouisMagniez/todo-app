import { Injectable } from "@angular/core"
import { Task } from "./task"
import { TASKS } from "./mock-task-list"

@Injectable()
export class TaskService {
  task!: Task
  TASK = TASKS

  getTaskList(): Task[] {
    return TASKS
  }

  addTask(task: Task): any {
    return TASKS.unshift(task)
  }

  searchFilter(filterBy: string): Task[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.TASK.filter(
      (task: Task) => task.content.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }
}
