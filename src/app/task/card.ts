import { Task } from "./task"

export class Card {
  id!: number
  title: string
  content: Task[]

  constructor(content: Task[] = [], tilte: string = "") {
    this.content = []
    this.title = ""
  }
}
