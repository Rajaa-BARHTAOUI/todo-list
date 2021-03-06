import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers';
import { User } from '../models';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'AuthPage';
  user: User;

  constructor(platform: Platform, app: App, statusBar: StatusBar, splashScreen: SplashScreen, private _AuthProvider: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    app.viewDidLoad.subscribe(view => {
      console.log(view);
      this.getUserData();
    })
  }
  getUserData() {
    this._AuthProvider.getUserData().then(user => {
      console.log('user from storage:',user);
      if (!!user) {
        this.user =  JSON.parse(user);
        if (this.rootPage = 'AuthPage') this.rootPage = 'HomePage';
      }
      else this.rootPage = 'AuthPage';
    })
  }
}
