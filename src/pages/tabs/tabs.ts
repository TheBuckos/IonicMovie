import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FavoritesPage } from '../favorites/favorites'
import { LandingPage } from '../landing/landing'
import { ExplorePage } from '../explore/explore'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  tab2Root = FavoritesPage;
  tab1Root = LandingPage;
  tab3Root = ExplorePage;

}
