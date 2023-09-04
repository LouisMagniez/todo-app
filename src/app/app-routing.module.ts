import { NgModule } from "@angular/core"
import { RouterModule, type Routes } from "@angular/router"
import { TaskListComponent } from "./task/task-list/task-list.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  { path: "tasks", component: TaskListComponent },
  { path: "", redirectTo: "tasks", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
