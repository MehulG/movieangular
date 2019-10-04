import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)
export class AppComponent {
  constructor(private router:Router){}
  title = 'TMDB-app';
  searchForm = new FormGroup({
    searchInput: new FormControl(''),
  });
  onSubmit():void{
    console.log(this.searchForm.value.searchInput);
    this.router.navigate(["/search/"+this.searchForm.value.searchInput])
    // window.location.href="/search/"+this.searchForm.value.searchInput;
  }
}
