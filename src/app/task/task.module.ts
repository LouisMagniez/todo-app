import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskFormComponent } from './task-form/task-form.component'
import { RouterModule, type Routes } from '@angular/router'
import { TaskListComponent } from './task-list/task-list.component'
import { FormsModule } from '@angular/forms'
import { TaskAddComponent } from './task-add/task-add.component'

const taskRoutes: Routes = [
  { path: 'tasks', component: TaskListComponent }
]

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(taskRoutes)
  ]
})
export class TaskModule { }
