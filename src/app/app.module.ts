import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { HeaderComponent } from "./header/header.component";
import { SearchCardComponent } from "./search-card/search-card.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeaderComponent,
    SearchCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
