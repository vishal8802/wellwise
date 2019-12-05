import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TransactionsComponent } from "./transactions.component";

import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: TransactionsComponent,
    children: [
      {
        path: "view",
        component: ViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule {}

export const routedComponents = [TransactionsComponent, ViewComponent];
