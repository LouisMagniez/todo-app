/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component } from '@angular/core'
import { type Task } from '../task'
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  constructor (
    // eslint-disable-next-line @typescript-eslint/prefer-readonly
    private taskService: TaskService
  ) {}

  taskList!: Task[]

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit () {
    this.taskList = this.taskService.getTaskList()
    console.table(this.taskList)
  }
}
