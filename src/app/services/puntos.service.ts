import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { parse, stringify } from 'flatted/esm';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class PuntosService {

    public url: string;
    form: FormGroup = new FormGroup({
        cliente: new FormControl(),
        fi: new FormControl(undefined),
        ff: new FormControl(undefined),
        concepto: new FormControl()
    });

    formUso: FormGroup = new FormGroup({
        cliente_id: new FormControl(),
        concepto_id: new FormControl(undefined),
        puntaje: new FormControl(undefined)
    });

    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }
    
    usarPuntos(body :any) : Observable<any>
    {     
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'puntos/usarPuntos',body,{headers:headers});
    }
    /*
    */
    getPuntos(parametros: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'appication/json');
        return this._http.get(this.url + 'puntos', { params: parametros });
    }
    /*
        getProject(id): Observable<any>
        {
            let headers = new HttpHeaders().set('Content-Type','application/json');
            return this._http.get(this.url+'getProject/'+id, {headers:headers});
        }
    
        deleteProject(id): Observable<any>{
            let headers = new HttpHeaders().set('Content-Type','application/json');
            return this._http.delete(this.url+'project/'+id, {headers:headers});
        }
    
        updateProject(project): Observable<any>{
            let params = stringify(project);
            let headers = new HttpHeaders().set('Content-Type','application/json');
            return this._http.put(this.url+'project/'+project._id, params );
        }*/
}
