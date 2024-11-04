import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/core/shared/socket.service';
import { AuthService } from '../services/auth.service';
import { navItems } from 'src/app/core/default-layout/_nav';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.authService.admin = false;
    this.authService.islogin = false;
    this.authService.suser = false;
  }

  public navItems = navItems;
  user: any; // Declare user property
  userId: number;

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router, private socket: SocketService) { }

  login() {
    const val = this.loginForm.value;
    console.log("val: ", val);
    this.authService.login(val.email, val.password).subscribe(
      (res: any) => {
        this.userId = res.id;
        console.log(this.userId);
        // Get user details after getting the user ID
        this.authService.getUserById(this.userId).subscribe(
          (user: any) => {
            console.log("user : ",user);
            if (user && user.password === val.password) {
              localStorage.setItem("email", user.email);
              this.authService.islogin = true;
              console.log("user role : " , user.role.name)
              if (user.role.name === 'admin') {
                this.authService.admin = true;
                this.router.navigate(['/dashboard']);
              } else {
                this.authService.suser = true;
                this.router.navigate(['/home']);
              }
            }
          },
          (error) => {
            console.error('Error fetching user details:', error);
            // Handle error appropriately
          }
        );
      },
      (error) => {
        console.error('Login error:', error);
        // Handle error appropriately
      }
    );
  }



  isError: boolean = false;

  onSingIn() {
    this.router.navigate(['/dashboard']);
  }
}
