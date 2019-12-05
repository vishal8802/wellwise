import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { ServicesService } from "../../../services.service";
import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./view.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ]
})
export class ViewComponent {
  data1: any;
  users: any = [];
  header = `All users`;
  temp: any;
  filtered_users: any = [];
  settings = {
    actions: false,
    columns: {
      name: {
        title: "Name",
        type: "string"
      },
      phone: {
        title: "Phone",
        type: "string"
      },
      password: {
        title: "Password",
        type: "string"
      },
      email: {
        title: "Email",
        type: "string"
      },
      role: {
        title: "Role",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private auth: ServicesService) {
    this.auth.get_user().subscribe(users => {
      this.data1 = users;
      console.log(this.data1);
      this.data1.forEach(d => {
        this.temp = d;
        let n, e;
        if (d.role == "doctor") {
          n = this.temp.doctor[0].name;
          e = this.temp.doctor[0].email;
        } else {
          e = this.temp.patient[0].email;
          n = this.temp.patient[0].name;
        }
        let user = {
          name: n,
          phone: d.phone,
          email: e,
          password: "na",
          role: d.role
        };
        this.users.push(user);
      });
      this.filtered_users = this.users;
      this.source.load(this.filtered_users);
    });
  }

  filter(filter_type) {
    if (filter_type == "doctor") {
      this.header = "Doctors";
      this.filtered_users = this.users;
      this.filtered_users = this.filtered_users.filter(u => u.role == "doctor");
    }
    if (filter_type == "all") {
      this.header = "All users";
      this.filtered_users = this.users;
    }
    if (filter_type == "patient") {
      this.header = "Normal users";
      this.filtered_users = this.users;
      this.filtered_users = this.filtered_users.filter(
        u => u.role == "patient"
      );
    }
    this.source.load(this.filtered_users);
  }
}
