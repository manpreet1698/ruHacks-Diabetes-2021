import { Component } from '@angular/core';
import { Router, Event, NavigationStart} from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString: String;
  public token: any;
  otherTheme: boolean = false;
  icon = 'light_mode'; 

  changeTheme(){ // Toggles between light and dark mode
    this.otherTheme = !this.otherTheme;
  }


  toggleIcon() {
    if (this.icon === 'light_mode') {
        this.icon = 'dark_mode';
    } else {
        this.icon = 'light_mode'
    }
  }

  
  constructor(private router: Router, private auth: AuthService){}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) { // only read the token on "NavigationStart"
        this.token = this.auth.readToken();
      }
    });
  }
  // removes token from locastorage and navigates to login menu
  logout(){    
    localStorage.clear();
    this.router.navigate(['login'])
  }

  title = 'Hacker-u';
}
