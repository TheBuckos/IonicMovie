import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {
  
  query: string;
  
  @Output() 
  update: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
  }

  updateQuery(){
    console.log("Search bar sending query to landingPage", this.query)
    this.update.emit(this.query);
  }
  
  
}
