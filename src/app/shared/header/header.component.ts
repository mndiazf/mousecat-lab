import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // animación del menú móvil principal
    trigger('mobileMenuAnimation', [
      state('closed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('open',   style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ]),
    // animación del submenú "Servicios"
    trigger('mobileSubmenuAnimation', [
      state('closed', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('open',   style({ height: '*', opacity: 1, overflow: 'hidden' })),
      transition('closed <=> open', animate('250ms ease-out')),
    ]),
    // animación genérica del header
    trigger('headerTypeAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  trigger('mobileSubmenuAnimation', [
    transition(':enter', [
      style({ height: '0', opacity: 0 }),
      animate('250ms ease-out', style({ height: '*', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ height: '0', opacity: 0 }))
    ]),
  ])
  ],
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isMobile = false;
  animating = false;
  private readonly MOBILE_BREAKPOINT = 1140;

  // controles de submenú
  dropdowns: { [key: string]: boolean } = { servicios: false };

  ngOnInit(): void { this.checkScreenSize(); }

  @HostListener('window:resize')
  onResize(): void {
    const wasMobile = this.isMobile;
    this.checkScreenSize();
    if (wasMobile && !this.isMobile) {
      this.menuOpen = false;
      this.dropdowns['servicios'] = false;
    }
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < this.MOBILE_BREAKPOINT;
  }

  toggleMenu(): void {
    if (this.animating) return;
    this.menuOpen = !this.menuOpen;
    this.animating = true;
  }

  onMenuAnimationDone(): void {
    this.animating = false;
  }

  toggleSubMenu(key: 'servicios'): void {
    if (this.isMobile) {
      this.dropdowns[key] = !this.dropdowns[key];
    }
  }

  openDropdown(key: 'servicios'): void {
    if (!this.isMobile) {
      this.dropdowns[key] = true;
    }
  }

  closeDropdown(key: 'servicios'): void {
    if (!this.isMobile) {
      this.dropdowns[key] = false;
    }
  }

  toggleDropdown(key: 'servicios'): void {
    if (!this.isMobile) {
      this.dropdowns[key] = !this.dropdowns[key];
    }
  }
}
