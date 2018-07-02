import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { AbstractService } from '../abstract-service';
import { environment } from '../../environments/environment';
import "rxjs/add/operator/map"

@Injectable()
export class PersonService extends AbstractService {

    constructor(http: Http) { super(http) }

    getAllPerson(parameter: string): Observable<any> {
        return this.httpGet(environment.personAll+"/"+parameter)
        .map((response: Response) => {
            return response.json();
        });
    }

}