import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import {
  HospitalRoutingModule,
  routedComponents
} from "./hospitals-routing.module";

import { NbCardModule } from "@nebular/theme";

@NgModule({
  imports: [
    ThemeModule,
    HospitalRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    NgMultiSelectDropDownModule,
    NbCardModule
  ],
  declarations: [...routedComponents]
})
export class HospitalModule {}
