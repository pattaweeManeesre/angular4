import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../../_service/person/person.service';

@Component({
  selector: 'app-detail-page',
  template: '<app-tabel-page *ngIf="callTable" [dataHeader]="dataHeader" [dataBody]="dataBody"></app-tabel-page>',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  @Input("data")
  data : any;

  private dataResponseGetAllPerson: any[];
  dataHeader: any[];
  dataBody: any[];
  callTable: boolean = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.info("call api data ngOnChanges")
    console.info(this.data)
    this.clearData();

    let dataJson: any = this.data
    this.personService.getAllPerson(dataJson.password)
      .toPromise()
      .then((responseData) => {
        console.info("responseData")
        console.info(responseData)  
        this.dataResponseGetAllPerson = responseData.person;
        this.sentDataToComponent();
      })
      .catch(error => {
        this.dataResponseGetAllPerson = [];  
      });
  }

  sentDataToComponent(): void{
    console.info("sentDataToComponent")
    this.dataHeader = Object.keys(this.dataResponseGetAllPerson[0])
     
    console.info("dataHeader")
    console.info(this.dataHeader)

    this.dataResponseGetAllPerson.forEach(item => {
      this.dataBody.push(item);
    })

    this.callTable = true;
    
    console.info("dataBody")
    console.info(this.dataBody)
  }

  clearData(): void{
    this.dataHeader = []
    this.dataBody = []
    this.callTable = false;
  }

}
