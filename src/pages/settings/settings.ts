import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../../providers/settings';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  items:any = []
  constructor(public navCtrl: NavController, private settings:Settings) {
      this.items = this.settings.settings;
  }

  ionViewDidLoad() {
    console.log('Hello SettingsPage Page');
  }

}
