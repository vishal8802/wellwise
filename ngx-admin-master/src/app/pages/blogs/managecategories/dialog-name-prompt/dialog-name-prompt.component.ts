import { Component } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { ServicesService } from "../../../../services.service";

@Component({
  selector: "ngx-dialog-name-prompt",
  templateUrl: "dialog-name-prompt.component.html",
  styleUrls: ["dialog-name-prompt.component.scss"]
})
export class DialogNamePromptComponent {
  constructor(
    protected ref: NbDialogRef<DialogNamePromptComponent>,
    private auth: ServicesService
  ) {}

  delete(yes) {
    console.log(`yes =`, yes);
    if (yes) {
      this.ref.close(yes);
    }

    this.ref.close(yes);
  }
}
