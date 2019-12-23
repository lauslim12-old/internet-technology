import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UKM, UKMDelete, UKMTambah } from '../models/UKM';

@Injectable({
  providedIn: 'root'
})

export class ServerapiService {
  private apiURL = 'https://umn-pti2019.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllUKM(): Observable<UKM> {
    return this.http.get<UKM>(`${this.apiURL}/api/ukm?sort=kode&order=asc`);
  }

  getUKMByKode(kode: string): Observable<UKM> {
    return this.http.get<UKM>(`${this.apiURL}/api/ukm/${kode}`);
  }

  getAllUKMSortDesc(): Observable<UKM> {
    return this.http.get<UKM>(`${this.apiURL}/api/ukm?sort=kode&order=desc`);
  }

  deleteFavorite(ukm: UKMDelete): Observable<{}> {
    return this.http.put('https://umn-pti2019.herokuapp.com/api/delete-favorites', ukm);
  }

  addUKM(ukm: UKMTambah) {
    return this.http.post(`${this.apiURL}/api/ukm`, ukm);
  }

}
