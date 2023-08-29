import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="align-center" color="primary">
      <span >Todo App</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'todo-app'
}
