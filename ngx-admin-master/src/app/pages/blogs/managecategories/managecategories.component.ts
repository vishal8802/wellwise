import { Component } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { DialogNamePromptComponent } from "./dialog-name-prompt/dialog-name-prompt.component";

import { ToasterConfig } from "angular2-toaster";

import "style-loader!angular2-toaster/toaster.css";
import {
  NbGlobalPhysicalPosition,
  NbToastrService,
  NbComponentStatus
} from "@nebular/theme";
import { ServicesService } from "../../../services.service";

@Component({
  selector: "ngx-managecategories",
  templateUrl: "./managecategories.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ],
  styleUrls: ["./managecategories.component.scss"]
})
export class ManagecategoriesComponent {
  categories: any;

  status: NbComponentStatus = "primary";
  config: ToasterConfig;
  blog = {
    cat_name: ""
  };
  constructor(
    private dialogService: NbDialogService,
    private auth: ServicesService,
    private toastrService: NbToastrService
  ) {
    this.get_cat();
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false
    };
    const titleContent = title ? `${title}` : "";
    this.toastrService.show(body, titleContent, config);
  }

  get_cat() {
    this.auth.get_category().subscribe(c => {
      this.categories = c;
      this.categories.sort();
    });
  }

  temp: any;
  add_cat(blog) {
    this.auth.add_category(blog).subscribe(() => {
      this.get_cat();
      this.showToast(this.status, "Category Added Successfully", ``);
      this.blog.cat_name = ``;
    });
  }
  open_confirmation(id: any) {
    this.categories.sort();
    this.dialogService.open(DialogNamePromptComponent).onClose.subscribe(x => {
      if (x)
        this.auth.delete_category(id).subscribe(success => {
          if (success) {
            this.get_cat();
            this.showToast(this.status, "Category Deleted Successfully", ``);
          }
        });
    });
  }

  editCat(cat) {
    this.blog.cat_name = cat.name;
  }
}
