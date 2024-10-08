import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersDisplayComponent } from './customers-display/customers-display.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerInputComponent } from './customer-input/customer-input.component';
import { ProjectDownloadComponent } from './project-download/project-download.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomersDisplayComponent,
    CustomerInputComponent,
    ProjectDownloadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
