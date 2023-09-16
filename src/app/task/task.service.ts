import { Injectable } from "@angular/core"
import { Task } from "./task"
import { TASKS } from "./mock-task-list"

@Injectable()
export class TaskService {
  task!: Task

  getTaskList(): Task[] {
    return TASKS
  }

  getTaskListLength(): number {
    return TASKS.length
  }

  generateNewTaskId(): number {
    return TASKS.length + 1
  }

  addTask(task: Task) {
    return TASKS.unshift(task)
  }

  statusFilter(option: string) {
    switch (option) {
      case "SEE_ALL":
        return TASKS

      case "TO_DO":
        return TASKS.filter((task) => !task.done)

      case "DONE":
        return TASKS.filter((task) => task.done)

      default:
        return TASKS
    }
  }

  manageTaskCounter(counterType: string) {
    switch (counterType) {
      case "ALL":
        return this.getTaskListLength()

      case "TO_DO":
        return this.statusFilter("TO_DO").length

      case "DONE":
        return this.statusFilter("DONE").length

      default:
        return 0
    }
  }
}
