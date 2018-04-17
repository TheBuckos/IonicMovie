import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieProvider {

  base_url: string = "https://api.themoviedb.org/3";
  base_search: string = "/search/movie";
  base_discover: string = "/discover/movie";
  
  api_key: string = "?api_key=e43aaac490cc35e0316bbc5bd9e5ad30";
  options: string = "&include_adult=false&language=en-US";
  
  sort_pop: string = "&sort_by=popularity.desc";
  
  constructor(private http: HttpClient) { }
  
  public getData(query: string) {
    console.log("ran getData in provider")
    return this.http.get(this.base_url + this.base_search + this.api_key + this.options + "&query=" + query)
      
  }
  
  public getPopMovies() {
    console.log("ran getPopMovies in provider")
    return this.http.get(this.base_url + this.base_discover + this.api_key + this.options + this.sort_pop);
  }
  
  // public selectMovie(movie){
  //   this.savedMovies.push(movie);
  //   console.log(this.savedMovies);
  // }

  // public getMovie(movie){
  //   return this.savedMovies;
  // }
  
  // public deleteMovie(currentMovie) {

  //   this.savedMovies.splice(this.savedMovies.indexOf(currentMovie), 1);
  //   //console.log("Deleting " + this.savedMovies.title);
   
  // }

}

