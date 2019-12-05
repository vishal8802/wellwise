import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private api: ServicesService) {}

  user: any = {
    phone: ``,
    password: ``
  };
  ngOnInit() {}
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  login() {
    if (this.user.phone == `` || this.user.password == ``) {
    } else {
      this.api.login(this.user).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem(`token`, res.token);
        localStorage.setItem(`phone`, res.user.phone);
      });
    }
  }
}
