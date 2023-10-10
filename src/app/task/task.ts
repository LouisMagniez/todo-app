export class Task {
  id!: number
  content: string
  description!: string
  dueDate!: Date
  dueTime!: string
  done: boolean
  edit: boolean

  constructor(
    content: string = "",
    done: boolean = false,
    edit: boolean = false
  ) {
    this.content = content
    this.done = done
    this.edit = edit
  }
}
