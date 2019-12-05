import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { QuestionComponent } from './question/question.component';
import { Question2Component } from './question2/question2.component';
import { LogindoctComponent } from './logindoct/logindoct.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { GetappComponent } from './getapp/getapp.component';
import { ConsultComponent } from './consult/consult.component';
import { PaymentComponent } from './payment/payment.component';
import { RelpageComponent } from './relpage/relpage.component';



const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'appointment',component:AppointmentComponent},
{path:'question',component:QuestionComponent},
{path:'question2',component:Question2Component},
{path:'logindoct',component:LogindoctComponent},
{path:'doctors',component:DoctorsComponent},
{path:'getapp',component:GetappComponent},
{path:'consult',component:ConsultComponent},
{path:'payment',component:PaymentComponent},
{path:'relpage',component:RelpageComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
