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

  localInitTASKS() {
    let localTASKS = localStorage.getItem("TaskList")
    if (localTASKS) {
      TASKS.pop()
      for (let task of JSON.parse(localTASKS)) {
        TASKS.push(task)
      }
    }
  }

  localUpdateTask() {
    localStorage.clear()
    localStorage.setItem("TaskList", JSON.stringify(TASKS))
  }
  searchFilter(filterBy: string): Task[] {
    filterBy = filterBy.toLocaleLowerCase()
    return TASKS.filter(
      (task: Task) => task.content.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  statusFilter(searchedTaskList: Task[], option: string) {
    switch (option) {
      case "SEE_ALL":
        return searchedTaskList

      case "TO_DO":
        return searchedTaskList.filter((task) => !task.done)

      case "DONE":
        return searchedTaskList.filter((task) => task.done)

      default:
        return searchedTaskList
    }
  }
}
