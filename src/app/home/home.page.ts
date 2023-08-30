import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { AlertController } from '@ionic/angular';
import {GoogleAuth, User} from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  user = {
    email: '',
    name: '',
    givenName: '',
    familyName: '',
    imageUrl: ''
  };
  constructor(
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    const info = await Device.getInfo();
    if (info.platform !== 'web') {
      GoogleAuth.initialize();
    }
  }

  async signIn() {
    const {email, givenName, familyName, name, imageUrl}: User = await GoogleAuth.signIn();
    this.user = {
      email,
      name,
      givenName,
      familyName,
      imageUrl
    };
  }

  async presentAlert(title?: string, message?: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
