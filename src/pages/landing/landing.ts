import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../providers/movie/movie';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  data: any;
  savedMovie: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public _movie: MovieProvider) {
  }
  searchMovie(movie){
    this._movie.getData(movie)
      .subscribe(response => {
        console.log(response)
      this.data = response["results"];
        console.log(this.data)
      }
      )
  }
  getMovie(movie){
    this.savedMovie = this._movie.selectMovie(movie);
    
  }
    addFave(movie) {
    this._user.addFavorite(movie)
      .subscribe(response => {
        console.log(response);
        this._movie.selectMovie(movie);
      }
  );
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
