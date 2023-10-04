export class Task {
  id!: number
  content: string
  description: string
  done: boolean
  edit: boolean

  constructor(
    content: string = "",
    description: string = "",
    done: boolean = false,
    edit: boolean = false
  ) {
    this.content = content
    this.description = description
    this.done = done
    this.edit = edit
  }
}
