import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import { LabsRoutingModule, routedComponents } from "./labs-routing.module";

import { NbCardModule } from "@nebular/theme";

@NgModule({
  imports: [
    ThemeModule,
    LabsRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    NgMultiSelectDropDownModule,
    NbCardModule
  ],
  declarations: [...routedComponents]
})
export class LabsModule {}
