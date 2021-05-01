import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../RegisterUser';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUser: RegisterUser;
  public warning: string;
  public success: Boolean = false;
  public loading: Boolean = false;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.registerUser = new RegisterUser();
  }
  // registers user on form submission and sets the loading, success, warning to be used in html
  onSubmit(f: NgForm): void {    
    if (this.registerUser.userName != "" || this.registerUser.password != this.registerUser.password2){
      this.loading = true;
      this.auth.register(this.registerUser).subscribe(
        (success) => {},
        (err) => {
          this.success = false;
          this.warning = err.error.message;
          this.loading = false;
        },
        () => {
          this.success = true;
          this.warning = null;
          this.loading = false;          
        }
      );
    }else{
      console.log("Submission failed of Register component");
    }
    
  }
}
