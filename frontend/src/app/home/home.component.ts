import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private api: ServicesService) {
    this.getQues();
  }

  getQues() {
    this.api.get_ques().subscribe(q => {
      console.log(q);
    });
  }
  ngOnInit() {}
}
