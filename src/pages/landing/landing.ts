import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  popMovieList: any[];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _movie: MovieProvider) {}

  ionViewWillEnter(){
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
