import { Component } from "@angular/core";

import { ServicesService } from "../../../services.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./unanswered.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ]
})
export class UnansweredComponent {
  ques: any;
  temp: any;
  constructor(private auth: ServicesService) {
    this.getQna();
  }

  getQna() {
    this.auth.get_qna().subscribe(qna => {
      this.temp = qna;
      this.ques = this.temp.unresolved_qna;
    });
  }
}
