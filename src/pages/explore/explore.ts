import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { MovieProvider } from '../../providers/movie/movie';


@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _movie: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }
getPopularMovies(){
 // popularMovies();
}
}