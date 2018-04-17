import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  
  query: string;
  movieList: any[];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _movie: MovieProvider) {
  }
  
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
      //Clears movieList if there is nothing in search field.
      this.movieList = [];
    }
  }
  
  ionViewWillEnter(){
    //clears movie list on page enter.
    this.movieList = [];
  }

}
