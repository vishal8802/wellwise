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
  settings = {
    actions: false,
    columns: {
      title: {
        title: "Title",
        type: "string"
      },
      name: {
        title: "Full Name",
        type: "string"
      },
      reg_no: {
        title: "Registration No.",
        type: "string"
      },
      phone: {
        title: "Contact",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string"
      },
      charges: {
        title: "Fees",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private auth: ServicesService) {
    // const data = this.service.getData();
    // this.source.load(data);
    // console.log(data);
    this.auth.show_doctors().subscribe(doctors => {
      this.data1 = doctors;
      this.source.load(this.data1.doctor_verified);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
