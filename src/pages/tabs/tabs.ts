import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FavoritesPage } from '../favorites/favorites'
import { LandingPage } from '../landing/landing'
import { ExplorePage } from '../explore/explore'
import { SearchResultsPage } from '../search-results/search-results'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  tab1Root = FavoritesPage;
  tab2Root = LandingPage;
  tab3Root = SearchResultsPage;
  tab4Root = ExplorePage;

}
