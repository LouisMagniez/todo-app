import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
