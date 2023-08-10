import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {PatientPageComponent } from './patient-page/patient-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {ManagerComponent} from "./manager/manager.component";
import {DialogContentUserlistDialog} from "./manager/manager.component";
import {DialogContentAddDialog} from "./manager/manager.component";
import {MatTableModule} from "@angular/material/table";
import {ClientpageComponent, DialogContentCartDialog} from "./clientpage/clientpage.component";
import {RegisterComponent} from "./register/register.component";
import {DialogContentExampleDialog} from "./clientpage/clientpage.component";
import {DialogContentInfoDialog} from "./clientpage/clientpage.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from '@angular/material/badge';
import {HttpClientModule} from "@angular/common/http";
import {StorageServiceModule} from 'angular-webstorage-service';
import {MatTreeModule} from "@angular/material/tree";

@NgModule({
  declarations: [

    DialogContentCartDialog,
    DialogContentAddDialog,
    DialogContentUserlistDialog,
    DialogContentInfoDialog,
    DialogContentExampleDialog,
    ClientpageComponent,
    ManagerComponent,
    RegisterComponent,
    AppComponent,
    LoginComponent,
    PatientPageComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatBadgeModule,
    HttpClientModule,
    MatTreeModule
  ],
  providers: [ StorageServiceModule,
    ClientpageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
