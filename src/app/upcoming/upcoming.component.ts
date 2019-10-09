import { Component, OnInit } from '@angular/core';
import {UpcomingService} from './../upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private movieService:UpcomingService) { }
  movieTernding;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTrendingMovies();
  }
  getTrendingMovies():void{
    this.movieService.getUpcoming().subscribe(movie => {this.movieTernding = movie; console.log(this.movieTernding.results);});
  }
}
