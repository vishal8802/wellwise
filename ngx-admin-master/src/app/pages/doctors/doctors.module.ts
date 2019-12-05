import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbChatModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbListModule,
  NbDialogModule
} from "@nebular/theme";
import { FormsModule } from "@angular/forms";

import { ThemeModule } from "../../@theme/theme.module";

import {
  DoctorsRoutingModule,
  routedComponents
} from "./doctors-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    DoctorsRoutingModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbDialogModule,
    NbInputModule,
    Ng2SmartTableModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    NbActionsModule,
    NbAlertModule,
    NbButtonModule,
    NbCalendarKitModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbCardModule,
    NbChatModule,
    NbIconModule,
    NbProgressBarModule,
    NbSelectModule,
    NbSpinnerModule,
    NbTabsetModule
  ],

  declarations: [...routedComponents]
})
export class DoctorsModule {}
