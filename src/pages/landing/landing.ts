import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  
  popMovieList: any[];
  genreList: any[];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _movie: MovieProvider) {}

  ionViewWillEnter(){
    this.popMovieList = [];
    this.getGenreList();
    this.getPopularMovies();
  }
  
  /*This method calls the provider to fetch Popular Movies data from MovieDatabase*/
  public getPopularMovies(){
    this._movie.getPopMovies()
      .subscribe( (data) => {
        this.popMovieList = data["results"];
        this.genreSwap(this.popMovieList, this.genreList)
        console.log(this.popMovieList)
    })
  }
  
  /*This method calls the provider to fetch genreList from MovieDatabase*/
  public getGenreList(){
    this._movie.getGenreList()
      .subscribe((data)=>{
        console.log(data)
        this.genreList = data["genres"];
        console.log(this.genreList)
      })
  }
  
  /*This method takes popMovieList and replaces every array associated with the 
  genre_ids property with an array of corresponding genre names*/
  public genreSwap(array1,array2){
    //Iterates through popMovieList
    for(let obj of array1){
      let newGenre = []
      //Iterates through each genre_ids array
      for (let id of obj.genre_ids){
        //iterates through genreLsit
        for (var genre of array2){
          //compares each genre_Id in :genre_ids" with each genre_id in "genreLsit"
          if(id === genre.id){
            /*This makes array populate like this: [Genre, Genre, ...] 
            Instead of like this: [ Genre, Genre]*/
            newGenre? newGenre.push(" " + genre.name) : newGenre.push(genre.name)
          }
        }
      }
    //replaces genre_id array with newGenre Array for each object in popMovieList.
    obj.genre_ids = newGenre;
    }
  //Returns modified popMovieList
  return array1;
  }
}
