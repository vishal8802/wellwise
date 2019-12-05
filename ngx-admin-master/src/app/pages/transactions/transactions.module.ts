import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  TransactionsRoutingModule,
  routedComponents
} from "./transactions-routing.module";
import { NbCardModule } from "@nebular/theme";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    TransactionsRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [...routedComponents]
})
export class TransactionsModule {}
