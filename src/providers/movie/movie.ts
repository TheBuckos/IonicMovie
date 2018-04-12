import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  
  savedMovies: any[]= [];

  api: string = "?api_key=e43aaac490cc35e0316bbc5bd9e5ad30";
  options: string = "&include_adult=false&language=en-US";
  base_url: string = "https://api.themoviedb.org/3/search/movie";

  constructor(private http: HttpClient) { }
  
  getData(query: string){
    console.log(this.base_url + this.api + this.options + "&query=" + query)
      return this.http.get(this.base_url + this.api + this.options + "&query=" + query)
    }
    selectMovie(movie){
    this.savedMovies.push(movie);

    console.log(this.savedMovies);
    
  }

  getMovie(movie){
    return this.savedMovies;
  }
  
   deleteMovie(currentMovie) {

    this.savedMovies.splice(this.savedMovies.indexOf(currentMovie), 1);
    //console.log("Deleting " + this.savedMovies.title);
   
  }
}

