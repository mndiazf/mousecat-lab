import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';
import { RouterModule } from '@angular/router';

interface ServiceItem {
  title: string;
  backgroundImageUrl: string;
  link: string;
}


interface ServiceCategory {
  id: string;
  categoryName: string;
  items: ServiceItem[];
}


@Component({
  selector: 'app-services-section',
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  animations: [
    trigger('fadeCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ServicesSectionComponent {
serviceCategories: ServiceCategory[] = [
  {
    id: 'software-development',
    categoryName: 'Desarrollo de Software',
    items: [
      {
        title: 'Desarrollo de App Web',
        backgroundImageUrl: '/web-dev.webp',
        link: 'services/web-design'
      },
      {
        title: 'eCommerce',
        backgroundImageUrl: '/ecommerce.webp',
        link: 'services/ecommerce'
      },
      {
        title: 'Integración de Sistemas',
        backgroundImageUrl: '/system-integration.webp',
        link: 'services/integration-systems'
      },
      {
        title: 'Software a Medida',
        backgroundImageUrl: '/custom-software.webp',
        link: 'services/custom-software'
      }
    ]
  },
  {
    id: 'mobile-apps',
    categoryName: 'App Móviles',
    items: [
      {
        title: 'Desarrollo de Aplicaciones Móviles',
        backgroundImageUrl: '/mobile-apps.webp',
        link: 'services/mobile-apps'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    categoryName: 'Soluciones Cloud',
    items: [
      {
        title: 'Diseño de Soluciones Cloud',
        backgroundImageUrl: '/cloud-design.webp',
        link: 'services/cloud-solutions-design'
      },
      {
        title: 'Despliegue de Infraestructura Cloud',
        backgroundImageUrl: '/cloud-deploy.webp',
        link: 'services/infrastructure-deployment'
      },
      {
        title: 'Mantención y Soporte Cloud',
        backgroundImageUrl: '/cloud-support.webp',
        link: 'services/cloud-maintenance-support'
      }
    ]
  },
  {
    id: 'other-services',
    categoryName: 'Otros Servicios',
    items: [
      {
        title: 'Asesoría Tecnológica',
        backgroundImageUrl: '/consulting.webp',
        link: 'services/it-consulting'
      },
      {
        title: 'Soporte y Mantenimiento de Software',
        backgroundImageUrl: '/maintenance.webp',
        link: 'services/software-support-maintenance'
      }
    ]
  }
];


  selectedServiceCategoryId: string = this.serviceCategories[0]?.id || '';
  animationKey = 0;

  selectServiceCategory(categoryId: string) {
    this.selectedServiceCategoryId = categoryId;
    this.animationKey++; // forza reanimación
  }

  get displayedServices(): ServiceItem[] {
    const selected = this.serviceCategories.find(c => c.id === this.selectedServiceCategoryId);
    return selected ? selected.items : [];
  }
  
}