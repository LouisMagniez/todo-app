/* eslint-disable @typescript-eslint/prefer-readonly */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component, Input } from '@angular/core'
import { Task } from '../task'
import { Router } from '@angular/router'
import { TaskService } from '../task.service'
import { TASKS } from '../mock-task-list'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  @Input() task!: Task

  constructor (
    private router: Router,
    private taskService: TaskService
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit () {
    this.task = new Task()
    this.task.id = +TASKS.indexOf(this.task) + 1
    console.log(this.task)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  onSubmit () {
    console.log(this.task, 'form submit')
    this.taskService.addTask(this.task)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigate(['/tasks'])
    this.task = new Task()
    console.table(TASKS)
  }
}
