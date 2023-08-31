/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component } from '@angular/core'
import { type Task } from '../task'
import { TaskService } from '../task.service'
// import { TASKS } from '../mock-task-list'

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
  /*
  columns = [
    {
      columnDef: 'title',
      header: 'Title',
      cell: (task: Task) => `${task.title}`
    },
    {
      columnDef: 'desc',
      header: 'Description',
      cell: (task: Task) => `${task.desc}`
    }
  ]

  displayedColumns = this.columns.map(c => c.columnDef)
  dataSource = TASKS
*/
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit () {
    this.taskList = this.taskService.getTaskList()
    console.table(this.taskList)
  }
}
