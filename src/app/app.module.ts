import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { CustomIconService } from "./services/custom-icon.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatIconModule, HttpClientModule],
  providers: [
    CustomIconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
