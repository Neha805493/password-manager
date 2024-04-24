import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from '../password';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent implements OnInit {
  passwordForm!: FormGroup;
  password: Password | null = null;
  id: string | number | null = null;
  isDecrypted: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private passwordService: PasswordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      category: ['', Validators.required],
      app: ['', Validators.required],
      userName: ['', Validators.required],
      encryptedPassword: ['', Validators.required],
    });
    this.getPassword();
    console.error("function fetched correctly");
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      const encryptedPassword = btoa(this.passwordForm.value.encryptedPassword);

      if (this.id) {
        this.passwordService
          .updatePassword({
            id: this.id,
            ...this.passwordForm.value,
            encryptedPassword: encryptedPassword,
          })
          .subscribe(() => {
            console.log('Password added successfully.');
            this.passwordForm.reset();
            this.router.navigate(['/passwords']);
          });
      } else {
        this.passwordService
          .addPassword({ ...this.passwordForm.value, encryptedPassword: encryptedPassword })
          .subscribe(() => {
            console.log('Password added successfully.');
            this.passwordForm.reset();
            this.router.navigate(['/passwords']);
          });
      }
    } else {
      this.passwordForm.markAllAsTouched();
    }
  }
  getPassword(): void {
    const snapshot = this.route.snapshot;
    if (snapshot !== null) {
      const id = snapshot.paramMap.get('id');
      if (id !== null) {
        const parsedId = id;
        this.passwordService
          .getPassword(parsedId)
          .subscribe((password: any) => {
            console.log(password);
            this.password = {
              ...password,
              encryptedPassword: atob(password.encryptedPassword),
            };
            console.log(this.password);
            this.id = password.id;
            delete password['id'];
            this.passwordForm.reset(password);
          });
              } else {
        console.error('ID not provided.');
      }
    } else {
      console.error('Route snapshot is null.');
    }
  }
}


