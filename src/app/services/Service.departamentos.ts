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

    insertarDepartamento(departamento: Departamento): Observable<any> {
        let dep = JSON.stringify(departamento);

        let httpHeaders = new HttpHeaders();
        // Incluimos la key de content-type
        httpHeaders = httpHeaders.set('Content-Type', 'application/json');
        console.log(httpHeaders);
        

        return this._http.post(environment.urlDepartamentos + "api/Departamentos", dep, {headers: httpHeaders});
    }

    actualizarDepartamento(dep: Departamento): Observable<any> {

        let json = JSON.stringify(dep);

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(environment.urlDepartamentos + "api/Departamentos", json, {headers: headers});
    }

    findDepartamento(id: number) {
        return this._http.get(environment.urlDepartamentos + "api/Departamentos/" + id);
    }

    deleteDepartamento(id: number): Observable<any> {
        return this._http.delete(environment.urlDepartamentos + "api/Departamentos/" + id);
    }
}