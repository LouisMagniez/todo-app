import { Component } from '@angular/core'
import { Task } from '../task'

@Component({
  selector: 'app-task-add',
  template: `
    <mat-card class="task-card">
      <mat-card-header class="align-center">
        <mat-card-title>
          Add a card
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-task-form [task]="task"></app-task-form>
      </mat-card-content>
    </mat-card>
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
