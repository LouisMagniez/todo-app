import { Component } from '@angular/core'
import { Task } from '../task'

@Component({
  selector: 'app-task-add',
  template: `
    <h2>Add a card</h2>
    <app-task-form [task]="task"></app-task-form>
  `
})
export class TaskAddComponent {
  task!: Task

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit () {
    this.task = new Task()
    console.log(this.task)
  }
}
