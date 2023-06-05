import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdesignModule } from '../materialdesign/materialdesign/materialdesign.module';
import { DialogComponent } from './pages/contact/dialog/dialog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DahsboardComponent } from './pages/contact/dahsboard/dahsboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ContactComponent,
    DahsboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialdesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
