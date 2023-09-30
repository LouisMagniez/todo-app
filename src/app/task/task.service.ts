import { Injectable } from "@angular/core"
import { Task } from "./task"
import { Card } from "./card"

@Injectable()
export class TaskService {
  getTaskList(cardID: number): Task[] {
    let localTASKS = localStorage.getItem("TaskList" + cardID)
    let parsedTaskList: Task[] = []
    if (localTASKS) {
      for (let task of JSON.parse(localTASKS)) {
        parsedTaskList.unshift(task)
      }
    }
    this.sortTaskList(parsedTaskList)
    return parsedTaskList
  }

  generateNewTaskId(cardID: number): number {
    let newTaskId = 1
    let localTASKS = localStorage.getItem("TaskList" + cardID)
    if (localTASKS) {
      newTaskId =
        Math.max(...this.getTaskList(cardID).map((task) => task.id)) + 1
    }
    return newTaskId
  }

  addTask(taskToAdd: Task, formCardID: number) {
    let taskList: Task[] = this.getTaskList(taskToAdd.cardID)
    taskToAdd.id = this.generateNewTaskId(taskToAdd.cardID)
    taskToAdd.cardID = formCardID
    taskList.push(taskToAdd)
    localStorage.setItem(
      "TaskList" + taskToAdd.cardID,
      JSON.stringify(taskList)
    )
    console.log(taskToAdd)
  }

  deleteTask(taskToDelete: Task) {
    let taskList: Task[] = this.getTaskList(taskToDelete.cardID)
    console.log(taskList)
    console.log(taskToDelete)
    for (let task of taskList) {
      if (task.id === taskToDelete.id) {
        taskList.splice(taskList.indexOf(task), 1)
      }
    }
    localStorage.setItem(
      "TaskList" + taskToDelete.cardID,
      JSON.stringify(taskList)
    )
  }

  updateTask(taskToUpdate: Task) {
    let taskList: Task[] = this.getTaskList(taskToUpdate.cardID)
    for (let task of taskList) {
      if (task.id === taskToUpdate.id) {
        taskList.splice(taskList.indexOf(task), 1, taskToUpdate)
      }
    }
    localStorage.setItem(
      "TaskList" + taskToUpdate.cardID,
      JSON.stringify(taskList)
    )
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

  statusFilter(searchedTaskList: Task[], filterDoneStatus: string) {
    switch (filterDoneStatus) {
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

  manageTaskCounter(counterType: string, taskListToCount: Task[]) {
    switch (counterType) {
      case "ALL":
        return taskListToCount.length

      case "TO_DO":
        return this.statusFilter(taskListToCount, "TO_DO").length

      case "DONE":
        return this.statusFilter(taskListToCount, "DONE").length

      default:
        return 0
    }
  }

  getCardList() {
    let cardList: string
    let parsedCardList = []

    cardList = JSON.stringify(localStorage)

    console.log(cardList)

    parsedCardList = JSON.parse(cardList)

    console.log(cardList)
    console.log(parsedCardList)

    return parsedCardList
  }

  cardListTemplate() {
    const template = ["Pommes", "Cassonade", "Citron", "Vanille", "Canelle"]
    let taskList: Task[] = []
    let task: Task = new Task()
    for (let i = 0; i < 5; i++) {
      task.id = i
      task.content = template[i]
      if (task.content === "Cassonade" || "Vanille") {
        task.done = true
      }
      taskList.push(task)
      task = new Task()
    }
    return taskList
  }

  generateCard(cardID: number) {
    let newCard = new Card()
    newCard.content = this.cardListTemplate()
    if (localStorage.getItem("TaskList" + cardID)) {
      return
    }
    localStorage.setItem("TaskList" + cardID, JSON.stringify(newCard))
  }
}
