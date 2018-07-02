import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-web',
  templateUrl: './start-web.component.html',
  styleUrls: ['./start-web.component.scss']
})
export class StartWebComponent implements OnInit {

  exampleInputEmail1 :string;
  exampleInputPassword1 : string;

  request : any;

  constructor() { }

  ngOnInit() {
  }

  btnSubmit(){
    this.request = {
      "email" : this.exampleInputEmail1,
      "password" : this.exampleInputPassword1
    }  
  }

}
