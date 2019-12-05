import { Component } from "@angular/core";

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
  templateUrl: "./addspecialization.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ],
  styleUrls: ["./addspecialization.component.scss"]
})
export class AddSpecializationComponent {
  specs: any = [];

  status: NbComponentStatus = "primary";
  config: ToasterConfig;
  specs_name = ``;
  sorted_specs = [];

  constructor(
    private auth: ServicesService,
    private toastrService: NbToastrService
  ) {
    this.get_specs();
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

  get_specs() {
    this.auth.get_specialization().subscribe(s => {
      console.log(s);
      this.specs = s;
      this.sortByName();
    });
  }

  temp: any;
  addSpecs(name) {
    this.auth.add_specs(name).subscribe(() => {
      this.get_specs();
      this.showToast(this.status, "Specs Added Successfully", ``);
      this.specs_name = ``;
    });
  }
  open_confirmation(name: any) {
    if (confirm("Are you sure ?")) {
      this.auth.delete_specs(name).subscribe(success => {
        console.log(success);
        this.get_specs();
        this.showToast(this.status, "Spec Deleted Successfully", ``);
      });
    }
  }

  editCat(cat) {
    this.specs_name = cat.name;
  }

  sortByName() {
    this.sorted_specs = [];
    this.specs.forEach((s: any) => {
      this.sorted_specs.push(s.name);
    });
    this.sorted_specs.sort();
  }
}
