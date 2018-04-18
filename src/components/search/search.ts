import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {
  
  query: string;
  
  /*Creates an EventEmitter "update" that will update the value of 
  query thorugh the updateQuery method */
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
  
  //Creates template reference
  @ViewChild("myInput") input: ElementRef;
  
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
  
  // public autoFocus(){
  //   console.log('Also in')
  //   this.input.elementRef.ionFocus;
  // }
}
