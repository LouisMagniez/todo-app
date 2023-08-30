import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskFormComponent } from './task-form/task-form.component'
import { RouterModule, type Routes } from '@angular/router'
import { TaskListComponent } from './task-list/task-list.component'
import { FormsModule } from '@angular/forms'
import { TaskAddComponent } from './task-add/task-add.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { TaskService } from './task.service'

const taskRoutes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/add', component: TaskAddComponent }
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
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(taskRoutes)
  ],
  providers: [TaskService]
})
export class TaskModule { }
