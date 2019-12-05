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

      :host nb-tab {
        padding: 1.25rem;
      }
    `
  ]
})
export class ViewComponent {
  data: any;
  
  //inside users array : [0]->admin, [1]->doctor, [2]->patient
  users: any = [[], [], []];

  header = `All users`;
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

  admin: LocalDataSource = new LocalDataSource();
  doctor: LocalDataSource = new LocalDataSource();
  patient: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private auth: ServicesService) {
    this.getUser();
  }

  getUser() {
    this.auth.get_user().subscribe(user => {
      this.data = user;

      this.data.forEach((u: any) => {
        if (u.role == "admin") {
          let new_user = {
            name: u.admin[0].name,
            email: u.admin[0].email,
            role: u.role,
            phone: u.phone
          };
          this.users[0].push(new_user);
        } else if (u.role == "patient") {
          let new_user = {
            name: u.patient[0].name,
            email: u.patient[0].email,
            role: u.role,
            phone: u.phone
          };
          this.users[2].push(new_user);
        } else if (u.role == "doctor") {
          let new_user = {
            name: u.doctor[0].name,
            email: u.doctor[0].email,
            role: u.role,
            phone: u.phone
          };
          this.users[1].push(new_user);
        }
      });
      this.doctor.load(this.users[1]);
      this.patient.load(this.users[2]);
      this.admin.load(this.users[0]);
    });
  }
}
