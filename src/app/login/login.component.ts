import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SistempenggunaService } from '../_shared/services/sistempengguna.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../_shared/models/User';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public regForm: any;

  constructor(public http: HttpClient, 
    public formBuilder: FormBuilder, 
    public pelayan: SistempenggunaService, 
    public router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      uname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  userLogin() {
    var username = this.regForm.value.uname;
    var password =  CryptoJS.SHA512(this.regForm.value.password).toString();
    var rememberme = <HTMLInputElement> document.getElementById('rememberme');
    var isChecked = rememberme.checked;
    console.log(isChecked);

    var formLogin: Login = {
      'user_name': username,
      'password': password,
      'remember_me': isChecked
    }

    this.pelayan.login(formLogin.user_name, formLogin.password, formLogin.remember_me)
    .subscribe(res => { 
      console.log(res);
      alert('Logged in successfully!');
      this.router.navigate(['/profile']);
    }, err => console.log(err));
  }

}
