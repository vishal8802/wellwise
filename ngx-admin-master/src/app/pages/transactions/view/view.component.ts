import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
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
  ]
})
export class ViewComponent {
  transactions: any;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      transaction_id: {
        title: "Transaction_ID",
        type: "number"
      },
      from: {
        title: "Paid By",
        type: "string"
      },
      to: {
        title: "Paid to",
        type: "string"
      },
      date: {
        title: "Date",
        type: "string"
      },
      amount: {
        title: "Amount",
        type: "string"
      },
      payment_mode: {
        title: "Payment Mode",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private auth: ServicesService) {
    this.getTransaction();
  }

  getTransaction() {
    this.auth.get_transactions().subscribe(t => {
      this.transactions = t;
      this.source.load(this.transactions);
      console.log(this.transactions);
    });
  }
}
