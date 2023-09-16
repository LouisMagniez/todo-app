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
}
