/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component } from '@angular/core'
import { Task } from '../task'
import { TaskService } from '../task.service'
import { TASKS } from '../mock-task-list'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  TASK = TASKS

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
/*
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  isDone (task: Task, isChecked: boolean) {
    if (isChecked) {
      task.done = true
      console.log(task.done)
    } else {
      task.done = false
      console.log(task.done)
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  updateStyle (task: Task) {
    if (task.done) {
    } else {
      document.querySelector('.tasksList')?.toggleAttribute('doneStyle')
    }
  } */
}
