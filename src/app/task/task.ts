export class Task {
  id!: number
  title: string
  desc: string

  constructor (
    title: string = 'Title...',
    desc: string = ''
  ) {
    this.title = title
    this.desc = desc
  }
}
