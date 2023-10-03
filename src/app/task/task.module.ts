import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TaskFormComponent } from "./task-form/task-form.component"
import { RouterModule, type Routes } from "@angular/router"
import { TaskCardComponent } from "./task-card/task-card.component"
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
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import { BrowserModule } from "@angular/platform-browser"
import { ReactiveFormsModule } from "@angular/forms"
import { MatRadioModule } from "@angular/material/radio"
import { MatChipsModule } from "@angular/material/chips"
import { A11yModule } from "@angular/cdk/a11y"
import {
  BrowserAnimationsModule,
  provideAnimations,
} from "@angular/platform-browser/animations"
import { TaskEditComponent } from "./task-edit/task-edit.component"
import { TaskCardListComponent } from "./task-card-list/task-card-list.component";
import { TitleEditComponent } from './title-edit/title-edit.component'

const taskRoutes: Routes = [{ path: "tasks", component: TaskCardListComponent }]

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskCardComponent,
    TaskEditComponent,
    TaskCardListComponent,
    TitleEditComponent,
  ],

  imports: [
    CommonModule,
    A11yModule,
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
    MatSlideToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatChipsModule,
    RouterModule.forChild(taskRoutes),
  ],
  providers: [TaskService, provideAnimations()],
})
export class TaskModule {}
