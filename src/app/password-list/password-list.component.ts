import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service'; // Adjust the import path
import { Password } from '../password'; // Adjust the import path
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {
  passwords: Password[] = [];

  constructor(private passwordService: PasswordService,private router:Router) { }
  

  ngOnInit(): void {
    this.getPasswords();
  }

  getPasswords(): void {
    this.passwordService.getPasswords()
      .subscribe(
        passwords => {
          this.passwords = passwords;
          console.log('Passwords:', this.passwords);
        },
        error => {
          console.error('Error fetching passwords:', error);
        }
      );
  }
  goToDetails(id:string|number){
    this.router.navigate([`/passwords/${id}`])
  }
  goToEditDetails(id:string|number){
    this.router.navigate([`/edit-password/${id}`])
  }
  deleteRecord(id:string|number){
    this.passwordService.deletePassword(id).subscribe(()=>{
      this.getPasswords();
    })
    
  }
}

