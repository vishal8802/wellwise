import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users.component";
import { ViewComponent } from "./view/view.component";

import { AddComponent } from "./add/add.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "view",
        component: ViewComponent
      },
      {
        path: "add",
        component: AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

export const routedComponents = [UsersComponent, ViewComponent, AddComponent];
