import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabel-page',
  templateUrl: './tabel-page.component.html',
  styleUrls: ['./tabel-page.component.scss']
})
export class TabelPageComponent implements OnInit {

  @Input("dataHeader")
  dataHeader: any;

  @Input("dataBody")
  dataBody: any;

  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges(){
    console.info('TabelPageComponent')
    console.info(this.dataHeader)
    console.info(this.dataBody)
  }

}
