import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent
      },
      {
        path: "iot-dashboard",
        component: DashboardComponent
      },

      {
        path: "doctors",
        loadChildren: () =>
          import("./doctors/doctors.module").then(m => m.DoctorsModule)
      },
      {
        path: "blogs",
        loadChildren: () =>
          import("./blogs/blogs.module").then(m => m.BlogsModule)
      },
      {
        path: "appointments",
        loadChildren: () =>
          import("./appointments/appointments.module").then(
            m => m.AppointmentsModule
          )
      },
      {
        path: "hospitals",
        loadChildren: () =>
          import("./hospitals/hospitals.module").then(m => m.HospitalModule)
      },
      {
        path: "labs",
        loadChildren: () => import("./labs/labs.module").then(m => m.LabsModule)
      },
      {
        path: "transactions",
        loadChildren: () =>
          import("./transactions/transactions.module").then(
            m => m.TransactionsModule
          )
      },
      {
        path: "qna",
        loadChildren: () => import("./qna/qna.module").then(m => m.QnaModule)
      },
      {
        path: "users",
        loadChildren: () =>
          import("./users/users.module").then(m => m.UsersModule)
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
