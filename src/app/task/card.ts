import { Task } from "./task"

export class Card {
  id!: number
  content: Task[]

  constructor(content: Task[] = []) {
    this.content = []
  }
}
