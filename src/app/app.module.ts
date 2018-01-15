import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { EmployeesService } from './employees.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
