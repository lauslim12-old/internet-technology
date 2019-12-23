import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UKM, isiUKM, DetailUKM } from '../_shared/models/UKM';
import { ServerapiService } from '../_shared/services/serverapi.service';

@Component({
  selector: 'app-ukm-detail',
  templateUrl: './ukm-detail.component.html',
  styleUrls: ['./ukm-detail.component.css']
})
export class UkmDetailComponent implements OnInit {
  public satuukm: any = null;
  public buffer: string;

  constructor(private pelayan: ServerapiService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params.kode);
      this.buffer = params.kode;
    });

    this.pelayan.getUKMByKode(this.buffer).subscribe(satuukm => {
      this.satuukm = satuukm;
      console.log(satuukm.result);
    })

  }

}
