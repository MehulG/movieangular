import { Component, OnInit } from '@angular/core';
import {MovieService} from './../movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  movieTernding;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTrendingMovies();
  }
  getTrendingMovies():void{
    this.movieService.getTrending().subscribe(movie => {this.movieTernding = movie; console.log(this.movieTernding.results);});
  }

}
