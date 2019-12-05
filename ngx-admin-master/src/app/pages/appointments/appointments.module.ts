import { NgModule } from "@angular/core";

import { NbCardModule, NbButtonModule, NbTabsetModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import {
  AppointmentsRoutingModule,
  routedComponents
} from "./appointments-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    AppointmentsRoutingModule,
    NbTabsetModule,
    FormsModule,
    NbButtonModule,
    CommonModule
  ],
  declarations: [...routedComponents],
  providers: []
})
export class AppointmentsModule {}
