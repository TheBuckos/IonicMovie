import { Component } from '@angular/core';
import { MovieProvider } from '..providers/movie/movie';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  @Input() movieID;
  
  constructor(private _search: MovieProvider) {  }
    addMovie(movie) {
      console.log(movie);
    }

}
