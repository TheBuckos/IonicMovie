import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { SearchComponent } from '../../components/search/search'
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  
  query: string;
  movieList: any[];
  @ViewChild(SearchComponent) _search: SearchComponent;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _movie: MovieProvider) {
  }
  
  /*This method is bound to the update event in the child searchComponent, 
  and will be called anytime that a new keystroke updates the query*/
  public getData(event){
    this.query = event;
    if(this.query){
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
  
  ionViewDidEnter(){
    console.log("I'm in!", this._search)
    setTimeout( () => {
      this._search.input.setFocus();
    },250);
  }
  
  ionViewDidLeave(){
    //calls clearQuery on searchComponent 
    this._search.clearQuery()
  }

}
