import { NgModule } from "@angular/core";
import { Ng2SmartTableModule } from "ng2-smart-table";
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
  NbListModule
} from "@nebular/theme";

import { DialogNamePromptComponent } from "./managecategories/dialog-name-prompt/dialog-name-prompt.component";

import { ThemeModule } from "../../@theme/theme.module";
import { BlogsRoutingModule, routedComponents } from "./blogs-routing.module";
import { FormsModule } from "@angular/forms";

const COMPONENTS = [DialogNamePromptComponent];

const ENTRY_COMPONENTS = [DialogNamePromptComponent];

// const MODULES = [NbDialogModule.forChild(), NbWindowModule.forChild()];

const SERVICES = [];

@NgModule({
  imports: [
    ThemeModule,
    NbListModule,
    FormsModule,
    BlogsRoutingModule,
    Ng2SmartTableModule,
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
    NbTabsetModule
  ],
  declarations: [...routedComponents, ...COMPONENTS],
  providers: [...SERVICES],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class BlogsModule {}
