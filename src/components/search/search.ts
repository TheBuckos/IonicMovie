import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {
  
  query: string;
  
  /*Creates an EventEmitter "update" that will update the value of 
  query thorugh the updateQuery method */
  @Output() 
  update: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
  }

  /*updates the value of 'query' anytime that it changes by way of the input field, 
  this updated value is fed upwards to the SearchResultsPage */
  public updateQuery(){
    console.log("Search bar sending query to landingPage", this.query)
    this.update.emit(this.query);
  }
  
  //resets input field to null (called by searchResultsPage)
  public clearQuery(){
    this.query = null;
  }
}
