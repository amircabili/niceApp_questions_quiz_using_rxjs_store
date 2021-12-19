import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {  Observable , Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private _dataUrl: string = "https://opentdb.com/api.php?amount=20";
  globalData = new Observable();

  constructor(private http: HttpClient,) { }

  getFilesData(){
    this.globalData = new Observable(observer => {
      let obj : any ;
      this.http.get<any>(this._dataUrl)
        .subscribe(resp=>{
          obj = resp.results
          observer.next(obj);
        })
    });
    return this.globalData;
  }

}
