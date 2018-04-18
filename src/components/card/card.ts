import { Component, Input } from '@angular/core';
import { MovieProvider } from '../../providers/movie/movie';


@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
    
  @Input() poster_path: string;
  @Input() title: string;
  @Input() rating: string;
  @Input() release_date: string;
  @Input() genre: string;

  constructor(public _movie: MovieProvider) {
    }

}
