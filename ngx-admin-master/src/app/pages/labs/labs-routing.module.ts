import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LabsComponent } from "./labs.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: LabsComponent,
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
export class LabsRoutingModule {}

export const routedComponents = [LabsComponent, ViewComponent];
