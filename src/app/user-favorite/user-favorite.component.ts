import { Component, OnInit } from '@angular/core';
import { SistempenggunaService } from '../_shared/services/sistempengguna.service';
import { Registrasi } from '../_shared/models/User';
import { UKMDelete, UKMFavorite, UKM, isiUKM } from '../_shared/models/UKM';
import { HttpClient } from '@angular/common/http';
import { ServerapiService } from '../_shared/services/serverapi.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css']
})

export class UserFavoriteComponent implements OnInit {
  public user: Registrasi;
  public ukm: any;
  public perbandingan: UKM;
  public hasilAkhir: isiUKM[] = [];
  public username: string;
  public buffer: UKMFavorite[] = [];

  constructor(public server: SistempenggunaService, 
    public pelayan: ServerapiService, 
    private http: HttpClient) { }

  ngOnInit() {
    var tokenSekarang = localStorage.getItem('access_token');

    this.server.verifikasi(tokenSekarang).subscribe(res => {
      console.log(res);
      this.server.user = res.result.user;
      console.log(this.server.user);
      this.username = this.server.user.user_name;
      console.log(this.username);
      this.getFav();
    },
      err => console.log(err));
  }

  getFav() {
    this.http.get<UKMFavorite>(`https://umn-pti2019.herokuapp.com/api/user/${this.username}/favorites?type=ukm`).subscribe(result => {
      this.ukm = result;
      this.pengecekan();
    }, error => console.log(error));
  }

  pengecekan() {
    this.pelayan.getAllUKM().subscribe(res => {
      this.perbandingan = res;
      this.disamain();
    }, err => console.log(err));
  }

  disamain() {
    // Sequential Search
    let i = 0;
    let j = 0;
    let panjang = this.ukm.result;
    while(i < panjang.length) {
      let buffer = this.ukm.result[i].id_kode_nim_isbn_favorited;
      for(j = 0; j < this.perbandingan.result.count; j++) {
        if(buffer == this.perbandingan.result.ukm[j].kode) {
          this.hasilAkhir.push(this.perbandingan.result.ukm[j]);
        }
      }
      i++;
    }
    console.log(this.hasilAkhir);
  }

  delFav(id_kode_nim_isbn_favorited: string) {
    let tokenSekarang = localStorage.getItem('access_token');
    let hapus: UKMDelete = {
      'type': 'ukm',
      'id_kode_nim_isbn_favorited': id_kode_nim_isbn_favorited,
      'token': tokenSekarang
    };
    this.pelayan.deleteFavorite(hapus).subscribe(res => console.log(res), err => console.log(err));
    this.getFav();
  }

}
