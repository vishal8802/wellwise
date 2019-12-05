import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DoctorsComponent } from "./doctors.component";
import { ViewComponent } from "./view/view.component";
import { AddComponent } from "./add/add.component";
import { AddSpecializationComponent } from "./addspecialization/addspecialization.component";

const routes: Routes = [
  {
    path: "",
    component: DoctorsComponent,
    children: [
      {
        path: "view",
        component: ViewComponent
      },
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "managespecialization",
        component: AddSpecializationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule {}

export const routedComponents = [
  DoctorsComponent,
  ViewComponent,
  AddComponent,
  AddSpecializationComponent
];
