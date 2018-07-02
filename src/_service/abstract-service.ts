import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export abstract class AbstractService {

    baseUrl = environment.baseUrl;

    constructor(private http: Http) { }

    httpPost(path: string, jsonString: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + path, jsonString, options);
    }

    httpGet(path: string): Observable<Response> {
        let headers = new Headers({ 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*', 
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.baseUrl + path, options);
    }
    
}
