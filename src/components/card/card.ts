import { Component } from '@angular/core';
import { MovieProvider } from '../../providers/movie/movie';


@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  popMoviesList: any[];
  text: string;

  constructor(public _movie: MovieProvider) {
   // this.popMoviesList = this._movie.popular_movies; 
    }

}
