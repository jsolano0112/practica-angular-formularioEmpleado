import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ServiceEmployeeService } from './service-employee.service';
import { EmployeesService } from './employees.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { WhoComponentComponent } from './who-component/who-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'projects', component:ProjectsComponentComponent},
  {path:'whoiam', component:WhoComponentComponent},
  {path:'contact', component:ContactComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonComponent,
    CharacteristicsComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    WhoComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [ServiceEmployeeService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
