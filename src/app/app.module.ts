import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdesignModule } from '../materialdesign/materialdesign/materialdesign.module';
import { DialogComponent } from './dialog/dialog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormPageComponent } from './pages/reactive-form/reactive-form-page/reactive-form-page.component';
import { CustomlistComponent } from './customlist/customlist/customlist.component';
import { CustomdetailsComponent } from './customdetails/customdetails/customdetails.component';
import { FormsModule } from '@angular/forms';
import { DecoratorsComponent } from './pages/decorators/decorators/decorators.component';
import { AppChildComponentComponent } from './pages/app-child/app-child-component/app-child-component.component';
import { LifeCyclehooksComponent } from './lifecycle-hooks/life-cyclehooks/life-cyclehooks.component';
import { AppParentComponent } from './pages/app-parent/app-parent/app-parent.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    ReactiveFormPageComponent,
    CustomlistComponent,
    CustomdetailsComponent,
    DecoratorsComponent,
    AppChildComponentComponent,
    LifeCyclehooksComponent,
    AppParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialdesignModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

