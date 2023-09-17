import { Injectable } from "@angular/core"
import { Task } from "./task"
import { TASKS } from "./mock-task-list"

@Injectable()
export class TaskService {
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

  searchFilter(filterBy: string): Task[] {
    filterBy = filterBy.toLocaleLowerCase()
    return TASKS.filter(
      (task: Task) => task.content.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  statusFilter(filteredTaskList: Task[], option: string) {
    switch (option) {
      case "SEE_ALL":
        return filteredTaskList

      case "TO_DO":
        return filteredTaskList.filter((task) => !task.done)

      case "DONE":
        return filteredTaskList.filter((task) => task.done)

      default:
        return filteredTaskList
    }
  }
}
