import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HospitalComponent } from "./hospitals.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: HospitalComponent,
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
export class HospitalRoutingModule {}

export const routedComponents = [HospitalComponent, ViewComponent];
