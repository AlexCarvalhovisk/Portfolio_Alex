import { Component } from '@angular/core';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';

@Component({
  selector: 'app-site-alex',
  imports: [],
  templateUrl: './site-alex.component.html',
  styleUrl: './site-alex.component.css'
})
export class SiteAlexComponent {

btnMenu: HTMLElement | null = null;
menu: HTMLCollectionOf<Element> | null = null;
overlayMenuMobile: HTMLCollectionOf<Element> | null = null;

  ngOnInit() {
    this.btnMenu = document.getElementById('btn-menu');
    this.menu = document.getElementsByClassName('menu-mobile');
    this.overlayMenuMobile = document.getElementsByClassName('overlay-menu-mobile');

    if (this.btnMenu && this.menu && this.overlayMenuMobile) {
      this.btnMenu.addEventListener('click', () => {
        this.menu?.[0].classList.add('abrir-menu');
      });

      this.menu[0].addEventListener('click', () => {
        this.menu?.[0].classList.remove('abrir-menu');
      });

      this.overlayMenuMobile[0].addEventListener('click', () => {
        this.menu?.[0].classList.remove('abrir-menu');
      });
    }
  }
}
