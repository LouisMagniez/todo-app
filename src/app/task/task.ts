export class Task {
  id: number | undefined
  title: string
  desc: string

  constructor (
    title: string = 'Title ...',
    desc: ''
  ) {
    this.title = title
    this.desc = desc
  }
}
