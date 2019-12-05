import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import { UsersRoutingModule, routedComponents } from "./users-routing.module";
import { AddComponent } from "./add/add.component";

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
  NbRouteTabsetModule,
  NbTabsetModule,
  NbListModule,
  NbDialogModule
} from "@nebular/theme";

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    NgMultiSelectDropDownModule,
    NbCardModule,
    NbIconModule,
    NbRouteTabsetModule,
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
  ],
  declarations: [...routedComponents, AddComponent]
})
export class UsersModule {}
