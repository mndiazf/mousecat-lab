import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  menuOpen = false;
  isMobile = false;
  private readonly MOBILE_BREAKPOINT = 1140;
  animating = false;
  megaMenuOpen = false;
  private megaMenuTimeout: any;
  mobileServicesMenuOpen = false;
  mobileCategoryOpenIndex: number|null = null;
  mobileServicesMenuAnimating = false;
  mobileCategoryAnimating = false;
  showTopbar = true;
  isScrolled = false;

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('scroll', this.onWindowScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  @HostListener('window:resize')
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

  onWindowScroll = () => {
    const scrollY = window.scrollY;
    this.showTopbar = scrollY < 10;
    this.isScrolled = scrollY > 28;
  };

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleMenu(): void {
    if (this.animating) return;
    this.menuOpen = !this.menuOpen;
    this.animating = true;
    if (!this.menuOpen) {
      this.closeAllMobileMenus();
    }
  }

  toggleMobileServicesMenu() {
    if (this.mobileServicesMenuAnimating) return;
    this.mobileServicesMenuAnimating = true;
    this.mobileServicesMenuOpen = !this.mobileServicesMenuOpen;
    if (!this.mobileServicesMenuOpen) {
      this.mobileCategoryOpenIndex = null;
    }
    setTimeout(() => {
      this.mobileServicesMenuAnimating = false;
    }, 350);
  }

  toggleMobileCategory(index: number, event: Event) {
    event.stopPropagation();
    if (this.mobileCategoryAnimating) return;
    this.mobileCategoryAnimating = true;
    if (this.mobileCategoryOpenIndex === index) {
      this.mobileCategoryOpenIndex = null;
    } else {
      this.mobileCategoryOpenIndex = index;
    }
    setTimeout(() => {
      this.mobileCategoryAnimating = false;
    }, 350);
  }

  closeAllMobileMenus() {
    this.mobileServicesMenuOpen = false;
    this.mobileCategoryOpenIndex = null;
    this.mobileServicesMenuAnimating = false;
    this.mobileCategoryAnimating = false;
  }

  onMenuAnimationDone(): void {
    this.animating = false;
  }

  showMegaMenu() {
    clearTimeout(this.megaMenuTimeout);
    this.megaMenuOpen = true;
  }

  hideMegaMenu() {
    this.megaMenuTimeout = setTimeout(() => {
      this.megaMenuOpen = false;
    }, 120);
  }

  services = [
    {
      title: 'Desarrollo de Software',
      items: [
        { name: 'Desarrollo Web', link: '/services/web-design' },
        { name: 'eCommerce', link: '/servicios/ecommerce' },
        { name: 'Integración de Sistemas', link: '/servicios/integracion' },
        { name: 'Software a medida', link: '/servicios/medida' }
      ]
    },
    {
      title: 'Aplicaciones Móviles',
      items: [
        { name: 'Desarrollo de Aplicaciones Móviles', link: '/servicios/moviles' }
      ]
    },
    {
      title: 'Soluciones Cloud',
      items: [
        { name: 'Asesoría en soluciones Cloud', link: '/servicios/cloud-asesoria' },
        { name: 'Despliegue de Infraestructura', link: '/servicios/cloud-despliegue' },
        { name: 'Diseño de Soluciones Cloud', link: '/servicios/cloud-diseno' },
        { name: 'Mantención y Soporte Cloud', link: '/servicios/cloud-soporte' }
      ]
    },
    {
      title: 'Otros Servicios',
      items: [
        { name: 'Consultoría TI', link: '/servicios/consultoria' },
        { name: 'Soporte y Mantenimiento', link: '/servicios/soporte' }
      ]
    }
  ];
}
