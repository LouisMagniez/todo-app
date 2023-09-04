export class Task {
  id!: number
  content: string
  done: boolean

  constructor(content: string = "", done: boolean = false) {
    this.content = content
    this.done = done
  }
}
