import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppointmentsComponent } from "./appointments.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: AppointmentsComponent,
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
export class AppointmentsRoutingModule {}

export const routedComponents = [AppointmentsComponent, ViewComponent];
