import { Component } from "@angular/core";
import { ServicesService } from "../../../services.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./answered.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ],
  styleUrls: ["./answered.component.scss"]
})
export class AnsweredComponent {
  ques: any;
  temp: any;
  countdown = 5;

  confirm = 0;

  constructor(private auth: ServicesService) {
    this.getQna();
  }

  getQna() {
    this.auth.get_qna().subscribe(qna => {
      console.log(qna);
      this.temp = qna;
      this.ques = this.temp.resolved_qna;
    });
  }
  showMsg = false;
  startCd(id) {
    this.showMsg = true;
    this.confirm += 2;
    if (this.confirm >= 4) {
      this.auth.del_qna(id).subscribe(res => {
        this.getQna();
        this.confirm = 0;
        this.showMsg = false;
      });
    }
    setTimeout(() => {
      this.confirm = 0;
      this.showMsg = false;
    }, 4000);
  }
}
