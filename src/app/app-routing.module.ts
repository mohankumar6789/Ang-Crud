import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormPageComponent } from './pages/reactive-form/reactive-form-page/reactive-form-page.component';

const routes: Routes = [
  {path: 'pages/contact', component: ContactComponent},
  {path: 'pages/dashboard', component: DashboardComponent},
  {path: 'pages/login', component: LoginComponent},
  {path: 'pages/reactive-form-page', component: ReactiveFormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
