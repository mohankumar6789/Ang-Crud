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
import { AppParentComponent } from './pages/app-parent/app-parent/app-parent.component';
import { AppChildOnInitComponent } from './pages/oninit/app-child-on-init/app-child-on-init.component';
import { AppParentOninitComponent } from './pages/oninit/app-parent-oninit/app-parent-oninit.component';
import { AppNgdocheckComponent } from './pages/ngdocheck/app-ngdocheck/app-ngdocheck.component';
import { AftercontentCheckedAComponent } from './pages/ngaftercontentInit/aftercontentInit-a/aftercontentInit-a.component';
import { AftercontentCheckedBComponent } from './pages/ngaftercontentInit/aftercontentInit-b/aftercontentInit-b.component';
import { AftercontentCheckedCComponent } from './pages/ngaftercontentInit/aftercontentInit-c/aftercontentInit-c.component';
import { AppAftercontentinitComponent } from './pages/ngafterviewInit/afterviewInit-a/afterviewInit-a.component';
import { AppAftercontentinitBComponent } from './pages/ngafterviewInit/afterviewInit-b/afterviewInit-b.component';
import { AppAftercontentinitCComponent } from './pages/ngafterviewInit/afterviewInit-c/afterviewInit-c.component';
import { AfterviewcheckedAComponent } from './pages/ngafterviewchecked/afterviewchecked-a/afterviewchecked-a.component';
import { AfterviewcheckedBComponent } from './pages/ngafterviewchecked/afterviewchecked-b/afterviewchecked-b.component';
import { AfterviewcheckedCComponent } from './pages/ngafterviewchecked/afterviewchecked-c/afterviewchecked-c.component';
import { OndestroyComponent } from './pages/ngondestroy/ondestroy/ondestroy.component'

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
    AppParentComponent,
    AppChildOnInitComponent,
    AppParentOninitComponent,
    AppNgdocheckComponent,
    AftercontentCheckedAComponent,
    AftercontentCheckedBComponent,
    AftercontentCheckedCComponent,
    AppAftercontentinitComponent,
    AppAftercontentinitBComponent,
    AppAftercontentinitCComponent,
    AfterviewcheckedAComponent,
    AfterviewcheckedBComponent,
    AfterviewcheckedCComponent,
    OndestroyComponent
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

