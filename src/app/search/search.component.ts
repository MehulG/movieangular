import { Component, OnInit } from '@angular/core';
import {SearchService} from './../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute, private searchService:SearchService) {

   }
   movieSearch;

  ngOnInit() {
    this.getSearchMovies(this.route.snapshot.paramMap.get('query'));
  }
  getSearchMovies(query:string):void{
    this.searchService.getSearch(query).subscribe(movie => {this.movieSearch = movie; console.log(this.movieSearch.results);});
  }

}
