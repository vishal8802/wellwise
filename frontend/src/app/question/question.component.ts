import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  question: any = ``;
  email = ``;
  phone = ``;

  constructor(
    private _actiatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}
  details(question, phone, email) {
    this._router.navigate(["question2"], {
      queryParams: { question, email, phone }
    });
  }
}
