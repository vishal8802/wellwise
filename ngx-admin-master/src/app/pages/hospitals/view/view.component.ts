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
  hospital: any;
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
      website: {
        title: "Website",
        type: "string"
      },
      doctor: {
        title: "Doctors",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private auth: ServicesService) {
    this.getHospital();
  }

  getHospital() {
    this.auth.get_hospital().subscribe((hospitals: any) => {
      this.hospital = hospitals;
      console.log(hospitals)
      hospitals.forEach((h, i) => {
        let doc_list = h.doctors.join(",\n");
        this.hospital[i].doctor = doc_list;
      });
      this.source.load(this.hospital);
      console.log(this.hospital);
    });
  }
}
