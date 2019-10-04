import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }
  public getSearch(query:string):Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=`+environment.APIKey+`&query=`+query);
  }
}
