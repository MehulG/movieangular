import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }
  
  public getTrending():Observable<any>{
    return this.httpClient.get(` https://api.themoviedb.org/3/trending/all/day?api_key=`+ environment.APIKey);
  }

}
