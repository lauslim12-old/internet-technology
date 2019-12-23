import { Component, OnInit } from '@angular/core';
import { ServerapiService } from '../_shared/services/serverapi.service';
import { UKM } from '../_shared/models/UKM';
import { SistempenggunaService } from '../_shared/services/sistempengguna.service';
import { HttpClient } from '@angular/common/http';
import { AuthorizationService } from '../_shared/services/authorization.service';

@Component({
  selector: 'app-ukm-list',
  templateUrl: './ukm-list.component.html',
  styleUrls: ['./ukm-list.component.css']
})
export class UkmListComponent implements OnInit {
  public ukm: UKM = null;
  public searching: string = '';
  public isLoading: boolean = true;

  constructor(private PelayananApi: ServerapiService, 
    private server: SistempenggunaService, 
    private http: HttpClient,
    private auth: AuthorizationService) { }

  ngOnInit() {
    this.PelayananApi.getAllUKM().subscribe(ukm => {
      this.ukm = ukm;
      console.log(ukm);
      this.isLoading = false;
    },
    error => this.isLoading = false);

  }

  isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  addtoFav(kode: string) {
    var tokenSekarang = localStorage.getItem('access_token');
    var formFavorite = {
      'type': 'ukm',
      'id_kode_nim_isbn_favorited': kode,
      'token': tokenSekarang
    }
    return this.http.post(`https://umn-pti2019.herokuapp.com/api/add-favorites`, formFavorite).subscribe(res => console.log(res), err => console.log(err));

  }

  getDataUKMNormal() {
    this.PelayananApi.getAllUKM().subscribe(ukm => {
      this.ukm = ukm;
      console.log(ukm);
      this.isLoading = false;
    }, error => this.isLoading = false);
  }

  getDataUKMSorted() {
    this.PelayananApi.getAllUKMSortDesc().subscribe( ukm => {
      this.ukm = ukm;
      console.log(ukm);
      this.isLoading = false;
    }, err => this.isLoading = false);
  }

}
