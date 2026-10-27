import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Departamento } from '../models/Departamento';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServiceDepartamentos {

    constructor(private _http: HttpClient) {

    }

    getDepartamentos(): Observable<any> {
        return this._http.get(environment.urlDepartamentos + "api/Departamentos");
    }

    insertarDepartamento(departamento: any): Observable<any> {
        //let dep = JSON.stringify(departamento);

        let httpHeaders = new HttpHeaders();
        // Incluimos la key de content-type
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');

        return this._http.post(environment.urlDepartamentos + "api/Departamentos", departamento, {headers: httpHeaders});
    }

}