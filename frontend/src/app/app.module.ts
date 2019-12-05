import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// import bootstrap from "bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { FormsModule } from "@angular/forms";
import { QuestionComponent } from "./question/question.component";
import { Question2Component } from "./question2/question2.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LogindoctComponent } from "./logindoct/logindoct.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { GetappComponent } from "./getapp/getapp.component";
import { ConsultComponent } from "./consult/consult.component";
import { PaymentComponent } from "./payment/payment.component";
import { RelpageComponent } from "./relpage/relpage.component";
import { ServicesService } from "./services.service";
import { HttpClientModule } from "@angular/common/http";

//materialize modules
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AppointmentComponent,
    QuestionComponent,
    Question2Component,
    LogindoctComponent,
    DoctorsComponent,
    GetappComponent,
    ConsultComponent,
    PaymentComponent,
    RelpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
