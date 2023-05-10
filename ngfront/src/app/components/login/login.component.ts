import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'app/services/login.service';
import { UserType } from 'app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  authform: FormGroup = new FormGroup({});
	data: UserType = { username: '', password: '' }
  isLoggingIn = false;

  constructor(private authService: UserService){ }
 
  ngOnInit(): void {
    this.authform = new FormGroup({ 
      username: new FormControl(''),
      password: new FormControl('')
    })
    this.isLoggedIn();
  }

  onLogin(){
		this.data = { 'username': this.authform.controls['username'].value, 'password': this.authform.controls['password'].value }
    this.authService.loginUser( this.data ).subscribe(
      response => {
        console.log('Tu es Connecté')
      },
      error => {
        console.error( 'error', error );
      }
    )
  }
	onRegister(){
		this.data = { 'username': this.authform.controls['username'].value, 'password': this.authform.controls['password'].value }
    console.log(this.data)
    this.authService.registerVisitor( this.data ).subscribe(
      response => {
        alert( 'User ' + this.data + ' register.')
      },
      error => {
        console.error( 'error', error );
      }
    )
  }
  isLoggedIn():void{
    if(localStorage.getItem( 'token' )){
      this.isLoggingIn = true;
    }
  }
}
