import { NgModule } from "@angular/core";

import { ThemeModule } from "../../@theme/theme.module";
import { QnaRoutingModule, routedComponents } from "./qna-routing.module";

import { NbAccordionModule } from "@nebular/theme";

@NgModule({
  imports: [NbAccordionModule, ThemeModule, QnaRoutingModule],
  declarations: [...routedComponents]
})
export class QnaModule {}
