import { Injectable } from "@angular/core"
import { Task } from "./task"
import { Card } from "./card"

@Injectable()
export class TaskService {
  getTaskList(cardID: number): Task[] {
    let currentCard = this.getCard(cardID)
    let taskList: Task[] = []
    if (currentCard) {
      let Card: Card = currentCard
      for (let task of Card.content) {
        taskList.unshift(task)
      }
    }
    console.log("getTaskList : ", taskList)
    console.log("getTaskList : ", cardID)
    this.sortTaskList(taskList)
    return taskList
  }

  generateNewTaskId(cardID: number): number {
    let newTaskId =
      Math.max(...this.getTaskList(cardID).map((task) => task.id)) + 1
    return newTaskId
  }

  addTask(taskToAdd: Task, formCardID: number) {
    let taskList: Task[] = this.getTaskList(formCardID)
    taskToAdd.id = this.generateNewTaskId(formCardID)
    taskList.push(taskToAdd)
    this.setTaskList(taskList, formCardID)
    console.log("addTask : ", taskToAdd)
  }

  deleteTask(taskToDelete: Task, cardID: number) {
    let taskList: Task[] = this.getTaskList(cardID)
    console.log("delete task :", taskList)
    console.log("delete task :", taskToDelete)
    for (let task of taskList) {
      if (task.id === taskToDelete.id) {
        taskList.splice(taskList.indexOf(task), 1)
      }
    }
    this.setTaskList(taskList, cardID)
  }

  updateTask(taskToUpdate: Task, cardID: number) {
    let taskList: Task[] = this.getTaskList(cardID)
    for (let task of taskList) {
      if (task.id === taskToUpdate.id) {
        taskList.splice(taskList.indexOf(task), 1, taskToUpdate)
      }
    }
    this.setTaskList(taskList, cardID)
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

  cardListTemplate() {
    const template = ["Pommes", "Cassonade", "Citron", "Vanille", "Canelle"]
    let taskList: Task[] = []
    let task: Task = new Task()
    for (let i = 0; i < 5; i++) {
      task.id = i
      task.content = template[i]
      task.done = false
      if (i === 1 || i === 3) {
        task.done = true
      }
      taskList.push(task)
      task = new Task()
    }
    return taskList
  }

  getCard(cardID: number) {
    return this.getCardList().find((card) => card.id === cardID)
  }

  getCardList() {
    let cardList = localStorage.getItem("CardList")
    let parsedCardList: Card[] = []
    if (cardList) {
      for (let card of JSON.parse(cardList)) {
        parsedCardList.unshift(card)
      }
    }

    return parsedCardList
  }

  initCard() {
    if (localStorage.getItem("CardList")) return
    else this.addCard()
  }

  addCard() {
    let cardList: Card[] = this.getCardList()
    let newCard = new Card()
    newCard.id = this.generateNewCardId()
    newCard.content = this.cardListTemplate()
    cardList.push(newCard)
    localStorage.setItem("CardList", JSON.stringify(cardList))
    console.log(localStorage)
  }

  generateNewCardId() {
    let newCardId = 1
    let cardList = localStorage.getItem("CardList")
    if (cardList) {
      newCardId = Math.max(...this.getCardList().map((card) => card.id)) + 1
    }
    return newCardId
  }

  setTaskList(taskList: Task[], cardID: number) {
    let cardList: Card[] = this.getCardList()
    let currentCard = this.getCard(cardID)
    if (currentCard) {
      currentCard.content = taskList
      for (let card of cardList) {
        if (card.id === currentCard.id) {
          cardList.splice(cardList.indexOf(card), 1, currentCard)
        }
      }
      localStorage.setItem("CardList", JSON.stringify(cardList))
      console.log("in setTaskList : ", localStorage)
    }
  }
}
