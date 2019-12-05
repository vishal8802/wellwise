import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QnaComponent } from "./qna.component";
import { AnsweredComponent } from "./answered/answered.component";
import { UnansweredComponent } from "./unanswered/unanswered.component";

const routes: Routes = [
  {
    path: "",
    component: QnaComponent,
    children: [
      {
        path: "answered",
        component: AnsweredComponent
      },
      {
        path: "unanswered",
        component: UnansweredComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QnaRoutingModule {}

export const routedComponents = [
  QnaComponent,
  AnsweredComponent,
  UnansweredComponent
];
