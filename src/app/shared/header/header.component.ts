import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('mobileMenuAnimation', [
      state('closed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      transition('closed <=> open', [
        animate('300ms cubic-bezier(0.4,0,0.2,1)')
      ])
    ]),
    trigger('headerTypeAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isMobile: boolean = false;
  private readonly MOBILE_BREAKPOINT = 1140; // Cambiado de 768 a 1140
  animating = false; // NUEVO: bandera para bloquear clicks durante animación

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const wasMobile = this.isMobile;
    this.checkScreenSize();
    if (wasMobile && !this.isMobile) {
      this.menuOpen = false;
    }
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < this.MOBILE_BREAKPOINT;
  }

  toggleMenu(): void {
    if (this.animating) return; // Bloquea clicks durante animación
    this.menuOpen = !this.menuOpen;
    this.animating = true;
  }

  onMenuAnimationDone(): void {
    this.animating = false;
  }
}
