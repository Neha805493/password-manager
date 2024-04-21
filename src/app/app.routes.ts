import { Routes } from '@angular/router';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordDetailsComponent } from './password-details/password-details.component';
import { PasswordFormComponent } from './password-form/password-form.component';

export const routes: Routes = [ {
    path: "passwords",
    component: PasswordListComponent,
  },
  {
    path: "passwords/:id",
    component: PasswordDetailsComponent,
  },
  {
    path: "add-password",
    component: PasswordFormComponent,
  },
  
  {
    path: "edit-password/:id",
    component: PasswordFormComponent,
  },
];
