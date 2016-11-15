import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacesPage } from '../pages/places/places';
import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';
import { FriendsPage } from '../pages/friends/friends';
import { TabsPage } from '../pages/tabs/tabs';

const pages = [
    MyApp,
    HomePage,
    PlacesPage,
    AddPage,
    AroundPage,
    FriendsPage,
    TabsPage,
]

@NgModule({
  declarations: pages,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: []
})
export class AppModule {}
