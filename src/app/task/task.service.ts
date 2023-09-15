import { Injectable } from "@angular/core"
import { Task } from "./task"
import { TASKS } from "./mock-task-list"

@Injectable()
export class TaskService {
  task!: Task

  getTaskList(): Task[] {
    console.log(this.localGetTaskList())
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

  convertToTaskList(localTASKS: string) {
    let localTaskList: Task[] = []
    if (localTASKS) {
      for (let task of JSON.parse(localTASKS)) {
        localTaskList.push(task)
      }
    }
    return localTaskList
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

  localAddTask() {
    localStorage.clear()
    localStorage.setItem("TaskList", JSON.stringify(TASKS))
    console.log("Inside localTaskUpdate : ", localStorage)
  }

  localGetTaskList() {
    const localTASKS = localStorage.getItem("TaskList")
    let localTaskList: Task[] = []
    if (localTASKS) {
      for (let task of JSON.parse(localTASKS)) {
        localTaskList.push(task)
      }
      return localTaskList
    } else {
      return TASKS
    }
  }
}
