import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoot } from "./app.component";

@NgModule({
  bootstrap: [AppRoot],
  declarations: [AppRoot],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class AppModule {}
