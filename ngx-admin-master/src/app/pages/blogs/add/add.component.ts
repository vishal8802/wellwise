import { Component } from "@angular/core";
import { ServicesService } from "../../../services.service";

import { ToasterConfig } from "angular2-toaster";
import "style-loader!angular2-toaster/toaster.css";
import {
  NbGlobalPhysicalPosition,
  NbToastrService,
  NbComponentStatus
} from "@nebular/theme";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./add.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ]
})
export class AddComponent {
  categories: any;
  config: ToasterConfig;
  col = [1];
  blog: any;
  status: NbComponentStatus = "primary";

  constructor(
    private auth: ServicesService,
    private toastrService: NbToastrService
  ) {
    this.auth.get_category().subscribe(cat => {
      this.categories = cat;
    });

    this.blog = {
      category: "",
      topic: "",
      heading: [],
      content: []
    };
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 4000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false
    };
    const titleContent = title ? `. ${title}` : "";
    this.toastrService.show(body, titleContent, config);
  }

  addCol() {
    if (this.blog.heading[this.col.length - 1] != null)
      this.col.push(this.col.length + 1);
  }
  removeCol() {
    if (this.col.length > 1) this.col.pop();
  }

  add(blog: any) {
    this.auth.add_blog(blog).subscribe(doctor => {
      this.showToast(this.status, "Blog Added", ``);
    });
  }
}
