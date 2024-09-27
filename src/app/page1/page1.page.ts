// src/app/page1/page1.page.ts

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {

  constructor(private alertController: AlertController, private router: Router) {}

  async onSubmit() {
    const alert = await this.alertController.create({
      header: 'Datos Enviados',
      message: 'Tu formulario ha sido enviado con éxito.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/page2']); // Navegar a la Página 2
        }
      }]
    });

    await alert.present();
  }
}
