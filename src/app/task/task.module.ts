import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TaskFormComponent } from "./task-form/task-form.component"
import { RouterModule, type Routes } from "@angular/router"
import { TaskListComponent } from "./task-list/task-list.component"
import { FormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { TaskService } from "./task.service"
import { MatTableModule } from "@angular/material/table"
import { MatDividerModule } from "@angular/material/divider"
import { MatListModule } from "@angular/material/list"
import { MatCheckboxModule } from "@angular/material/checkbox"

const taskRoutes: Routes = [{ path: "tasks", component: TaskListComponent }]

@NgModule({
  declarations: [TaskFormComponent, TaskListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    RouterModule.forChild(taskRoutes),
  ],
  providers: [TaskService],
})
export class TaskModule {}
