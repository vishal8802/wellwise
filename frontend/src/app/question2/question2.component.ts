import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServicesService } from "../services.service";

@Component({
  selector: "app-question2",
  templateUrl: "./question2.component.html",
  styleUrls: ["./question2.component.css"]
})
export class Question2Component implements OnInit {
  val = true;

  question: any;
  age: any;
  city: any;
  state: any;
  email: any;
  phone: any;
  user_phone: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ServicesService
  ) {
    this.route.queryParams.subscribe(params => {
      this.question = params["question"] || 0;
      this.email = params["email"] || 0;
      this.phone = params["phone"] || 0;
    });
    this.user_phone = localStorage.getItem("phone");
  }

  ngOnInit() {}
  edit() {
    this.val = false;
  }

  askNow() {
    let ques_obj = {
      question: this.question,
      age: this.age,
      city: this.city,
      state: this.state,
      email: this.email,
      phone: this.phone,
      user_phone: this.user_phone
    };
    this.api.ask_ques(ques_obj).subscribe(res => {
      console.log(res);
    });
  }
}
