// src/app/home/home.page.ts

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Este es un mensaje de alerta.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
