import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSliderModule  } from '@angular/material'; @NgModule({ imports: [ MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatSlideToggleModule ]})
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { VisaComponent } from './components/visa/visa.component';
import { ProjectInformationComponent } from './components/project-information/project-information.component';
import { TrainingInformationComponent } from './components/training-information/training-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProjectFormComponent } from './components/project-information/add-project-form/add-project-form.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisaComponent,
    ProjectInformationComponent,
    TrainingInformationComponent,
    AddProjectFormComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
