import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ServicesService } from "../../../services.service";
import { validate } from "./validator";

import { ToasterConfig } from "angular2-toaster";
import "style-loader!angular2-toaster/toaster.css";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService
} from "@nebular/theme";
import { combineLatest } from "rxjs";

@Component({
  selector: "ngx-tabs",
  styleUrls: ["./add.component.scss"],
  templateUrl: "./add.component.html"
})
export class AddComponent {
  admin: any;
  user: any;
  config: ToasterConfig;
  status: NbComponentStatus = "primary";
  alert: any = ``;
  constructor(
    private router: Router,
    private auth: ServicesService,
    private toastrService: NbToastrService
  ) {
    this.initializeAdmin();
    this.initializeUser();
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
    const titleContent = title ? ` ${title}` : "";
    this.toastrService.show(body, titleContent, config);
  }

  initializeAdmin() {
    this.admin = {
      name: ``,
      password: ``,
      repassword: ``,
      email: ``,
      phone: ``,
      role: `admin`
    };
  }

  initializeUser() {
    this.user = {
      name: ``,
      password: ``,
      repassword: ``,
      email: ``,
      phone: ``,
      role: `patient`
    };
  }

  addAdmin(admin: any) {
    console.log(admin);
    let valid = validate(admin);
    if (valid.status) {
      this.auth.add_user(admin).subscribe(() => {
        this.showToast(this.status, "Admin Added Successfully", ``);
        this.initializeAdmin();
      });
    } else {
      this.alert = valid.mgs;
      console.log(this.alert);
    }
  }
  addUser(user: any) {
    console.log(user);
    let valid = validate(user);
    if (valid.status) {
      this.auth.add_user(user).subscribe(() => {
        this.showToast(this.status, "User Profile Added Successfully", ``);
        this.initializeUser();
      });
    } else {
      this.alert = valid.msg;
    }
  }
  routeTo() {
    this.router.navigate(["pages/doctors/add"]);
  }
}
