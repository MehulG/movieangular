import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor(private httpClient: HttpClient) { }
  public getUpcoming():Observable<any>{
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=`+environment.APIKey);
  }
}
