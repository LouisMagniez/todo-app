import { Component } from '@angular/core'
import { TASKS } from '../mock-task-list'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [
  ]
})
export class TaskListComponent {
  taskList = TASKS

  ngOnInit () {
    console.log('toto')
    console.table(this.taskList)
  }
}
