import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import QRCode from 'qrcode'

/**
 * Generated class for the ShareMyNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-my-notes',
  templateUrl: 'share-my-notes.html',
})
export class ShareMyNotesPage {
  _showHideSearchBar: boolean = true;
  keyWord: string;
  segmentValue: string;
  @ViewChild('qrimage') qrImage: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillEnter() {
    this.segmentValue = 'shared-users';
  }

  ngAfterViewInit() {
    const options = {
      width: 300,
      height: 300
    };
    QRCode.toCanvas(this.qrImage.nativeElement, 'sampletext', options, error => {
      if (error) console.error(error);
    })
  }

}
