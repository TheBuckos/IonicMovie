import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  query: string;
  
  movieList: any[];
  popMovieList: any[];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _movie: MovieProvider) {}
  
  public getData(event){
    this.query = event;
    if(this.query){
      console.log("landingPage received query from search bar.", this.query)
      this._movie.getData(this.query)
        .subscribe((data) => {
          console.log(data)
          this.movieList = data["results"];
        })
    }
    else {
      this.movieList = [];
    }
  }

  ionViewWillEnter(){
    this.movieList = [];
    this.popMovieList = [];
    this.getPopularMovies();
  }
  
  public getPopularMovies(){
    this._movie.getPopMovies()
      .subscribe( (data) => {
        console.log(data)
        this.popMovieList = data["results"];
    })
    
  }
}
