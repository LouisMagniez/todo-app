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
  }

  deleteTask(taskToDelete: Task, cardID: number) {
    let taskList: Task[] = this.getTaskList(cardID)
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

  todoListCounter(searchFilter: string, counterType: string) {
    let cardList = this.getCardList()
    let count: number = 0
    for (let card of cardList) {
      count += this.counterSwitch(counterType, card.content, searchFilter)
    }
    return count
  }

  counterSwitch(
    counterType: string,
    cardContent: Task[],
    searchFilter: string
  ) {
    let filteredCardContent: Task[] = []
    switch (counterType) {
      case "ALL":
        filteredCardContent = this.searchFilter(cardContent, searchFilter)
        return filteredCardContent.length

      case "TO_DO":
        filteredCardContent = this.searchFilter(cardContent, searchFilter)
        filteredCardContent = this.statusFilter(filteredCardContent, "TO_DO")
        return filteredCardContent.length

      case "DONE":
        filteredCardContent = this.searchFilter(cardContent, searchFilter)
        filteredCardContent = this.statusFilter(filteredCardContent, "DONE")
        return filteredCardContent.length

      default:
        return 0
    }
  }

  statusFilter(searchedTaskList: Task[], filterDone: string) {
    switch (filterDone) {
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

  getCard(cardID: number) {
    return this.getCardList().find((card) => card.id === cardID)
  }

  getCardList() {
    let cardList = localStorage.getItem("CardList")
    let parsedCardList: Card[] = []
    if (cardList) {
      for (let card of JSON.parse(cardList)) {
        parsedCardList.push(card)
      }
    }
    this.sortCardList(parsedCardList)
    return parsedCardList
  }

  sortCardList(listToSort: Card[]) {
    listToSort.sort((a, b) => a.id - b.id)
    return listToSort
  }

  initCard() {
    if (localStorage.getItem("CardList")) {
      return
    } else {
      this.generateDefaultCard()
    }
  }

  addCard() {
    let cardList: Card[] = this.getCardList()
    let newCard = new Card()
    newCard.id = this.generateNewCardId()
    newCard.title = this.generateCardTitle()
    cardList.push(newCard)
    this.setCardList(cardList)
  }

  deleteCard(cardToDelete: number) {
    let cardList: Card[] = this.getCardList()
    for (let card of cardList) {
      if (card.id === cardToDelete) {
        cardList.splice(cardList.indexOf(card), 1)
      }
    }
    this.setCardList(cardList)
  }

  setCardList(cardList: Card[]) {
    localStorage.setItem("CardList", JSON.stringify(cardList))
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
      this.setCardList(cardList)
    }
  }

  generateDefaultCard() {
    const template = ["Pommes", "Cassonade", "Citron", "Vanille", "Canelle"]
    let taskList: Task[] = []
    let task: Task = new Task()
    let newCard = new Card()
    let cardList: Card[] = this.getCardList()
    for (let i = 0; i < 5; i++) {
      task.id = i
      task.content = template[i]
      if (i === 1 || i === 3) {
        task.done = true
      }
      taskList.push(task)
      task = new Task()
    }
    newCard.content = taskList
    newCard.id = this.generateNewCardId()
    newCard.title = "Liste de courses"
    cardList.push(newCard)
    this.setCardList(cardList)
  }

  generateCardTitle() {
    let newCardTitle = "New todo list"
    return newCardTitle
  }

  editTitle(editedTitle: string, cardID: number) {
    let currentCard = this.getCard(cardID)
    if (currentCard) {
      currentCard.title = editedTitle
      this.updateCard(currentCard)
    }
  }

  updateCard(cardToUpdate: Card) {
    let cardList: Card[] = this.getCardList()
    for (let card of cardList) {
      if (card.id === cardToUpdate.id) {
        cardList.splice(cardList.indexOf(card), 1, cardToUpdate)
      }
    }
    this.setCardList(cardList)
  }

  checkDateTime(task: Task) {
    if (task.dueDate && task.dueTime) {
      if (this.checkDate(task)) {
        return this.checkTime(task)
      }
    }
    if (task.dueDate) {
      return this.checkDate(task)
    }
    return this.checkTime(task)
  }

  checkDate(task: Task) {
    let nowDate = new Date()
    let taskDate = new Date(task.dueDate)
    return nowDate >= taskDate
  }

  checkTime(task: Task) {
    let nowDate = new Date()
    let nowTime = nowDate.getHours() + ":" + nowDate.getMinutes()
    return nowTime > task.dueTime
  }

  getTimeLeft(task: Task) {
    let nowDate = new Date(),
      nowYear = nowDate.getFullYear(),
      nowMonth = nowDate.getMonth(),
      nowDay = nowDate.getDay(),
      nowHour = nowDate.getHours(),
      nowMinute = nowDate.getMinutes(),
      taskYear = new Date(task.dueDate).getFullYear(),
      taskMonth = new Date(task.dueDate).getMonth(),
      taskDay = new Date(task.dueDate).getDay(),
      taskHour = 0,
      taskMinute = 0

    if (task.dueTime) {
      taskHour = +task.dueTime.slice(0, 2)
      taskMinute = +task.dueTime.slice(2, 4)
    }

    if (nowYear < taskYear) {
      return
    }
    if (nowMonth < taskMonth) {
      return
    }
    if (nowDay < taskDay) {
      return this.calcDaysLeft(nowDay, taskDay)
    }
    if (nowDay === taskDay) {
      return this.calcTimeLeft(nowHour, taskHour, nowMinute, taskMinute)
    }
    return
  }

  calcDaysLeft(nowDay: number, taskDay: number) {
    if (taskDay - nowDay <= 5) {
      return taskDay - nowDay + " days left"
    } else {
      return
    }
  }

  calcTimeLeft(
    nowHour: number,
    taskHour: number,
    nowMinute: number,
    taskMinute: number
  ) {
    let hourLeft = taskHour - nowHour,
      minuteLeft = taskMinute - nowMinute,
      timeLeft = ""

    if (hourLeft > 0) {
      timeLeft += hourLeft
    }

    if (taskMinute > 0) {
      timeLeft += "" + minuteLeft
    }

    if (timeLeft !== "") {
      timeLeft += " left"
    }

    return timeLeft
  }
}
