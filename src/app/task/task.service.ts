import { Injectable } from "@angular/core"
import { Task } from "./task"

@Injectable()
export class TaskService {
  getTaskList(): Task[] {
    let localTASKS = localStorage.getItem("TaskList")
    let parsedTaskList: Task[] = []
    if (localTASKS) {
      for (let task of JSON.parse(localTASKS)) {
        parsedTaskList.unshift(task)
      }
    }
    console.log("in getTask : ", parsedTaskList)
    this.sortTaskList(parsedTaskList)
    return parsedTaskList
  }

  getTaskListLength(): number {
    return this.getTaskList().length
  }

  generateNewTaskId(): number {
    let newTaskId = this.getTaskList().length + 1
    let localTASKS = localStorage.getItem("TaskList")
    let existingId
    if (localTASKS) {
      existingId = JSON.parse(localTASKS).filter(
        (task: { id: number }) => task.id === newTaskId
      )
      while (existingId.id === newTaskId) {
        existingId = JSON.parse(localTASKS).filter(
          (task: { id: number }) => task.id === newTaskId
        )
        newTaskId++
      }
    }
    return newTaskId
  }

  addTask(task: Task) {
    let taskList: Task[] = this.getTaskList()
    taskList.push(task)
    localStorage.setItem("TaskList", JSON.stringify(taskList))
    console.log("localStorage in addTask : ", localStorage)
  }

  updateTask(taskToUpdate: Task) {
    let taskList: Task[] = this.getTaskList()
    for (let task of taskList) {
      if (task.id === taskToUpdate.id) {
        taskList.splice(taskList.indexOf(task), 1, taskToUpdate)
        console.log("index of the task to replace : ", taskList.indexOf(task))
      }
    }
    localStorage.setItem("TaskList", JSON.stringify(taskList))
    console.log("localStorage in updateTask : ", localStorage)
  }

  sortTaskList(listToSort: Task[]) {
    listToSort.sort((a, b) => b.id - a.id)
    return listToSort
  }

  searchFilter(searchedTaskList: Task[], filterBy: string): Task[] {
    filterBy = filterBy.toLocaleLowerCase()
    if (searchedTaskList) {
      searchedTaskList = searchedTaskList.filter(
        (task: Task) =>
          task.content.toLocaleLowerCase().indexOf(filterBy) !== -1
      )
    }
    return searchedTaskList
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
