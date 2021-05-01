import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public warning: string;
  public loading: Boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(f: NgForm): void {    
    if (this.user.userName != "" && this.user.password != ""){
      this.loading = true;
      this.auth.login(this.user).subscribe(
        (success) => {
        // store the returned token in local storage as 'access_token'
        localStorage.setItem('access_token',success.token);
        // redirect to the "vehicles" route
        this.router.navigate(['/not-found']);
        },
        (err) => {
          this.warning = err.error.message;
          this.loading = false;
        }
      );
    }else{
      console.log("Error Submitting request");
      
    }
    
  }
}
