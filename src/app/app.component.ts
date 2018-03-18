import { CustomIconService } from './services/custom-icon.service';
import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private customIconService: CustomIconService
  ) {
    this.matIconRegistry.addSvgIcon(
      "evil_face",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/evil.svg")
    );

    // using service to register custom icon
    this.customIconService.init();
  }
}
