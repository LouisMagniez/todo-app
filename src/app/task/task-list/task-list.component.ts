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
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  isDone (task: Task, isChecked: boolean) {
    if (isChecked) {
      console.table(TASKS)
      task.done = true
      // eslint-disable-next-line prefer-const
      const taskElement = document.getElementById('task' + task.id)
      console.table(task)
      console.log('taskElement :', taskElement)
      taskElement?.classList.add('isDone')
      console.log('taskClassList :', taskElement?.classList)
    } else {
      console.table(TASKS)
      task.done = false
      const taskElement = document.getElementById('task' + task.id)
      console.table(task)
      console.log('taskElement :', taskElement)
      taskElement?.classList.remove('isDone')
      console.log('taskClassList :', taskElement?.classList)
    }
  }
}
