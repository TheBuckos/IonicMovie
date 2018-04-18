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
  
  public getPopularMovies(){
    this._movie.getPopMovies()
      .subscribe( (data) => {
        this.popMovieList = data["results"];
        this.genreSwap(this.popMovieList, this.genreList)
        console.log(this.popMovieList)
    })
  }
    
  public getGenreList(){
    this._movie.getGenreList()
      .subscribe((data)=>{
        console.log(data)
        this.genreList = data.genres;
        console.log(this.genreList)
      })
  }
  
  public genreSwap(array1,array2){
    for(let obj of array1){
      let newGenre = []
      for (let id of obj.genre_ids){
        for (var genre of array2){
          if(id === genre.id){
            newGenre? newGenre.push(" " + genre.name) : newGenre.push(genre.name)
          }
        }
      }
    obj.genre_ids = newGenre;
    }
  return array1;
  }

}
