import { Component } from "@angular/core";
import { ServicesService } from "../../../services.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./view.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ],
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent {
  appointments: any;
  tentatively: any;
  confirmed: any;
  rejected: any;
  view2 = true;
  view3 = false;

  statusColor(app: any) {
    if (app.status == "Tentatively") return "#F9C89A";
    if (app.status == "rejected") return "lightgray";
    return "#54b948";
  }

  constructor(private auth: ServicesService) {
    this.getAppointments();
  }

  getAppointments() {
    this.auth.get_app().subscribe(apps => {
      this.appointments = apps;
      this.tentatively = this.appointments.filter(
        a => a.status == "Tentatively"
      );
      this.confirmed = this.appointments.filter(a => a.status == "confirmed");
      this.rejected = this.appointments.filter(a => a.status == "rejected");
    });
  }

  changeView(view) {
    if (view == 3) {
      this.view3 = true;
      this.view2 = false;
      return;
    }
    this.view3 = false;
    this.view2 = true;
  }
}
