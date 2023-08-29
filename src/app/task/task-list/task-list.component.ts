import { Component } from '@angular/core'
import { TASKS } from '../mock-task-list'
import { type Task } from '../task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  taskList: Task[] = TASKS

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  ngOnInit () {
    console.log('toto')
    console.table(this.taskList)
  }
}
