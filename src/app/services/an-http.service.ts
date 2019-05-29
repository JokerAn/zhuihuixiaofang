import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest, HttpInterceptor, HttpEventType }
  from '@angular/common/http';
import { Subject, from } from 'rxjs';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, filter, tap, finalize, map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { AnDataService } from './an-data.service';
@Injectable({
  providedIn: 'root'
})

export class AnHttpService {
  public http: any;
  constructor(HttpClient: HttpClient, public anData: AnDataService) {
    this.http = HttpClient
  }

  public get(url: any, myOptions: any = {}) {
    let httpParams = new HttpParams();
    if (myOptions.params) {
      for (const key in myOptions.params) {
        if (myOptions.params[key] === false || myOptions.params[key]) {
          httpParams = httpParams.set(key, myOptions.params[key]);
        }
      }
    }
    let options: any = {
      params: httpParams,
      headers: new HttpHeaders({})
    }
    if (myOptions['responseType'] != undefined) {
      options.responseType = myOptions['responseType']
    }
    if (localStorage.user_token) {
      options.headers = new HttpHeaders({
        'Authorization': localStorage.user_token
      })
    };
    console.log({ 'options': options });
    return this.http.get(url, options).pipe(
      map((res: any) => {
        return res
      })
    )
  }

  public post(url, data = {}, myOptions = {}) {
    let options: any = {
      headers: new HttpHeaders({})
    };
    if (myOptions['responseType'] != undefined) {
      options.responseType = myOptions['responseType']
    }
    if (localStorage.user_token) {
      options.headers = new HttpHeaders({
        'Authorization': localStorage.user_token
      })
    }
    return this.http.post(url, data, options).pipe(
      map((res: any) => {
        console.log('99999999999999999999999999999');
        return res
      }
      ))

  }




}