import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ServiceEmployeeService } from './service-employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonComponent,
    CharacteristicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
