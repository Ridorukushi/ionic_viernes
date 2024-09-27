// src/app/page2/page2.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page {

  constructor(private router: Router) {}

  cerrarSesion() {
    this.router.navigate(['/home']); // Navegar de vuelta a la página principal
  }

}
