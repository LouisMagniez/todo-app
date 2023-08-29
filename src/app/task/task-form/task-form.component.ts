/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, Input } from '@angular/core'
import { Task } from '../task'
import { TASKS } from '../mock-task-list'
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  @Input() task!: Task

  constructor (
    // eslint-disable-next-line @typescript-eslint/prefer-readonly
    private router: Router
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onSubmit () {
    console.log(this.task, 'form submit')
    TASKS.push(this.task)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigate(['/tasks'])
  }
}
