import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  constructor() { }

  ngOnInit() {
  }
  base_img_url = `https://image.tmdb.org/t/p/w185_and_h278_bestv2`;
  img_path():string{
    return (this.base_img_url + this.movie.backdrop_path);
  }
  description(){
    if(this.movie.overview.length >150){
      return this.movie.overview.slice(0,150)+"...";
    }else{
      return this.movie.overview;
    }
  }

}
