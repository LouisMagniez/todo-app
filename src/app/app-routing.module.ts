import { NgModule } from "@angular/core"
import { RouterModule, type Routes } from "@angular/router"
import { TaskCardListComponent } from "./task/task-card-list/task-card-list.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  { path: "tasks", component: TaskCardListComponent },
  { path: "", redirectTo: "tasks", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
