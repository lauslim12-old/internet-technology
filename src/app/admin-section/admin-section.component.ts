import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ServerapiService } from '../_shared/services/serverapi.service';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  public updateForm: any;
  public addUKMForm: any;

  constructor(public http: HttpClient,
    public formBuilder: FormBuilder,
    public server: ServerapiService) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      kode: ['', Validators.required],
      nama: ['', Validators.required],
      anggota: ['', Validators.required],
      foto: ['', Validators.required],
      deskripsi: ['', Validators.required],
      mulai: ['', Validators.required],
      selesai: ['', Validators.required]
    })

    this.addUKMForm = this.formBuilder.group({
      kode: ['', Validators.required],
      nama: ['', Validators.required],
      anggota: ['', Validators.required],
      foto: ['', Validators.required],
      deskripsi: ['', Validators.required],
      mulai: ['', Validators.required],
      selesai: ['', Validators.required]
    })
  }

  updateUKM() {
    var token = localStorage.getItem('access_token');
    let nama = this.updateForm.value.nama;
    let anggota = this.updateForm.value.anggota;
    let foto = this.updateForm.value.foto;
    let deskripsi = this.updateForm.value.deskripsi;
    let mulai = this.updateForm.value.mulai;
    let selesai = this.updateForm.value.selesai;
    let kode = this.updateForm.value.kode;
    console.log(kode);

    let kirimUKM = {
      'nama': nama,
      'anggota': anggota,
      'foto': foto,
      'deskripsi': deskripsi,
      'jam_mulai': mulai,
      'jam_selesai': selesai,
      'token': token
    }
    this.http.put(`https://umn-pti2019.herokuapp.com/api/ukm/${kode}`, kirimUKM).subscribe(res => console.log(res), err => console.log(err));
  }
  
  addUKM() {
    var token = localStorage.getItem('access_token');
    let nama = this.addUKMForm.value.nama;
    let anggota = this.addUKMForm.value.anggota;
    let foto = this.addUKMForm.value.foto;
    let deskripsi = this.addUKMForm.value.deskripsi;
    let mulai = this.addUKMForm.value.mulai;
    let selesai = this.addUKMForm.value.selesai;
    let kode = this.addUKMForm.value.kode;
    console.log(kode);

    let kirimUKM = {
      'kode': kode,
      'nama': nama,
      'anggota': anggota,
      'foto': foto,
      'deskripsi': deskripsi,
      'jam_mulai': mulai,
      'jam_selesai': selesai,
      'token': token
    }
    
    this.server.addUKM(kirimUKM).subscribe(res => console.log(res), err => console.log(err));
  }

}
