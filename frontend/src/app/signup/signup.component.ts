import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: any = {
    name: ``,
    phone: ``,
    email: ``,
    password: ``,
    repassword: ``,
    role: `patient`
  };

  constructor(private api: ServicesService) {}

  ngOnInit() {}
  alphabetOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode > 64 && charCode < 123) || charCode == 32) {
      return true;
    }
    return false;
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  checkEmail(email) {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) return false;
    return true;
  }

  checkPassword(password) {
    let filter = /^(?=.{8,})/;
    if (!filter.test(password)) return false;
    return true;
  }

  validate() {
    let validated = true;
    if (this.user.name == "") {
      validated = false;
    } else if (!this.checkEmail(this.user.email)) {
      validated = false;
    } else if (this.user.phone == "") {
      validated = false;
    } else if (!this.checkPassword(this.user.password)) {
      validated = false;
    } else if (this.user.password != this.user.repassword) {
      validated = false;
    }
    return validated;
  }

  signup(user: any) {
    console.log(this.validate());
    if (this.validate()) {
      this.api.signup(user).subscribe(user => {
        console.log(user);
      });
    } else {
      alert("fill all fields");
    }
  }
}
