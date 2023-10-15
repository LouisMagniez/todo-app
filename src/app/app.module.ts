import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { TaskModule } from "./task/task.module"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import {
  NoopAnimationsModule,
  provideAnimations,
  BrowserAnimationsModule,
} from "@angular/platform-browser/animations"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from "@angular/material/button"
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import { MatIconModule } from "@angular/material/icon"

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TaskModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
