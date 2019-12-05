import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BlogsComponent } from "./blogs.component";
import { ViewComponent } from "./view/view.component";
import { AddComponent } from "./add/add.component";
import { ManagecategoriesComponent } from "./managecategories/managecategories.component";

const routes: Routes = [
  {
    path: "",
    component: BlogsComponent,
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
        path: "manage",
        component: ManagecategoriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule {}

export const routedComponents = [BlogsComponent, ViewComponent, AddComponent, ManagecategoriesComponent];
