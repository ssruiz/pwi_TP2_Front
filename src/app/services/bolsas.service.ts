import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { parse, stringify } from 'flatted/esm';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class BolsaService {
    public url: string;
    form: FormGroup = new FormGroup({
        cliente: new FormControl(),
        filtro: new FormControl(''),
        vencimiento: new FormControl()
    });
    constructor(private _http: HttpClient) {
        this.url = Global.url;
    }
    /*
    saveProject(project :Project) : Observable<any>
    {
        let params = JSON.stringify(project);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save',params,{headers:headers});
    }
    */
    getBolsas(parametros: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'appication/json');
        return this._http.get(this.url + 'bolsas', { params: parametros });
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
