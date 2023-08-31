export class Task {
  id!: number
  content: string

  constructor (
    content: string = ''
  ) {
    this.content = content
  }
}
