import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SistempenggunaService } from '../_shared/services/sistempengguna.service';
import { ActivatedRoute } from '@angular/router';
import { Registrasi } from '../_shared/models/User';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})

export class RegistrasiComponent implements OnInit {
  public regForm: any;

  constructor(private formBuilder: FormBuilder, 
    private pelayan: SistempenggunaService, 
    public router: ActivatedRoute) { }
  
  ngOnInit() { 
    this.regForm = this.formBuilder.group({
      uname: ['', Validators.required],
      telepon: ['', Validators.required],
      email: ['', Validators.required],
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  newUserRegis() {
    let username = this.regForm.value.uname;
    let telepon = this.regForm.value.telepon;
    let email = this.regForm.value.email;
    let nama_lengkap = this.regForm.value.nama_lengkap;
    let alamat = this.regForm.value.alamat;
    let tanggal_lahir = this.regForm.value.tanggal_lahir;
    let foto = this.regForm.value.foto;
    let password = CryptoJS.SHA512(this.regForm.value.password).toString();

    let formRegistrasi: Registrasi = {
      'user_name': username,
      'telepon': telepon,
      'email': email,
      'nama_lengkap': nama_lengkap,
      'alamat': alamat,
      'tanggal_lahir': tanggal_lahir,
      'foto': foto,
      'password': password,
    }

    this.pelayan.registrasi(formRegistrasi).subscribe(res => { 
      console.log(res);
      alert('User registered successfully!');
    }, err => console.log(err));

  }

  /*ngOnInit():
  void {
    this.dataForm = this.formBuilder.group({
      uname: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      telepon: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]]
    }, {validator: this.checkPasswords} );
  }

  checkPasswords(fg: FormGroup) {
    const pass = fg.controls.password.value;
    const cpass = fg.controls.cpassword.value;
    const control = fg.controls.password;
    const matchcontrol = fg.controls.cpassword;

    if(pass == cpass) {
      matchcontrol.setErrors(null);
      return true;
    }
    else {
      matchcontrol.setErrors({mustMatch: true});
      return false;
    }
  }

  get f() {
    return this.dataForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.dataForm.invalid) {
      alert('Input data error!');
      return;
    }
    else {
      alert('Data has been set!');
      localStorage.setItem('fname', this.f.fname.value);
      localStorage.setItem('lname', this.f.lname.value);
      localStorage.setItem('email', this.f.email.value);
      localStorage.setItem('nim', this.f.nim.value);
    }
  }

  var username = this.f.uname.value;
  /*telepon;
  email = this.f.email.value;
  nama_lengkap;
  alamat;
  tanggal_lahir;
  foto;
  password;*/

  /*
  var registrasi = {
    'user_name': this.username
  };*/

  /*this.register.registrasi(registrasi) {

  }*/
  
}
