import { Component, OnInit } from '@angular/core';
import { SistempenggunaService } from '../_shared/services/sistempengguna.service';
import { Registrasi, Update } from '../_shared/models/User';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  public user: Registrasi;
  public regForm: any;
  public hasil: Update;
  public isLoading: boolean = true;

  constructor(public server: SistempenggunaService, 
    public formBuilder: FormBuilder, 
    public router: Router) { }

  ngOnInit() {
    var tokenSekarang = localStorage.getItem('access_token');
    this.server.verifikasi(tokenSekarang).subscribe(res => {
      console.log(res);
      this.server.user = res.result.user;
      console.log(this.server.user);
      this.user = this.server.user;
      this.isLoading = false;
    },
    err => console.log(err));

    this.regForm = this.formBuilder.group({
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  updateProfile() {
    let token = localStorage.getItem('access_token');
    let nama_lengkap = this.regForm.value.nama_lengkap;
    let alamat = this.regForm.value.alamat;
    let tanggal_lahir = this.regForm.value.tanggal_lahir;
    let foto = this.regForm.value.foto;
    let password = CryptoJS.SHA512(this.regForm.value.password).toString();

    let formRegistrasi: Update = {
      'nama_lengkap': nama_lengkap,
      'alamat': alamat,
      'tanggal_lahir': tanggal_lahir,
      'foto': foto,
      'password': password,
      'token': token,
    }

    console.log(formRegistrasi);
    this.server.update(formRegistrasi).subscribe((hasil:any) => {
        console.log(hasil);
        localStorage.setItem('access_token', hasil.token);
        alert('Data updated!');
        this.router.navigate(['/']);
    }, err => console.log(err));
  }

  logout() {
    this.server.logout();
  }

}
