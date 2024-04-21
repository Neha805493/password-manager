// app.module.ts

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PasswordDetailsComponent } from './password-details/password-details.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordDetailsComponent,
    PasswordFormComponent,
    PasswordListComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
