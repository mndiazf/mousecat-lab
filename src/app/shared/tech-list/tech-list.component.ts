import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de que CommonModule esté importado

export interface TechBadge {
  name: string;
  iconUrl: string;
}

export interface TechCategory {
  name: string;
  technologies: TechBadge[];
}

@Component({
  selector: 'app-tech-list',
  imports: [CommonModule],
  templateUrl: './tech-list.component.html',
  styleUrl: './tech-list.component.scss'
})
export class TechListComponent {
  title: string = '';
  categories: TechCategory[] = [
    {
      name: 'Frameworks y Librerías',
      technologies: [
        { name: 'React', iconUrl: '/react.webp' },
        { name: 'Angular', iconUrl: '/angular.webp' },
        { name: 'Spring', iconUrl: '/spring.webp' },
        { name: '.NET', iconUrl: '/dotnet.webp' },
        { name: 'Ionic', iconUrl: '/ionic.webp' },
        { name: 'Express JS', iconUrl: '/express.webp' },
        { name: 'NestJS', iconUrl: '/nest.webp' },
      ]
    },
    {
      name: 'Lenguajes de Programación',
      technologies: [
        { name: 'JavaScript', iconUrl: '/javascript.webp' },
        { name: 'TypeScript', iconUrl: '/typescript.webp' },
        { name: 'Python', iconUrl: '/python.webp' },
        { name: 'Java', iconUrl: '/java.webp' },
        { name: 'Node.js', iconUrl: '/nodejs.webp' },
        { name: 'C#', iconUrl: '/c-4.webp' },
      ]
    },
    {
      name: 'Bases de Datos',
      technologies: [
        { name: 'MySQL', iconUrl: '/mysql.webp' },
        { name: 'PostgreSQL', iconUrl: '/postgresql.webp' },
        { name: 'SQL Server', iconUrl: '/sql-server.webp' },
        { name: 'Oracle SQL', iconUrl: '/oracle-sql.webp' },
        { name: 'Maria db', iconUrl: '/mariadb.webp' },
        { name: 'Mongo db', iconUrl: '/mongodb.webp' },
      ]
    },
    {
      name: 'Cloud y Servicios Web',
      technologies: [
        { name: 'AWS', iconUrl: '/aws.webp' },
        { name: 'Azure', iconUrl: '/azure.webp' },
        { name: 'GCP', iconUrl: '/gcp.webp' },
        { name: 'Docker', iconUrl: '/docker.webp' },
        { name: 'Github Actions', iconUrl: '/github-actions.webp' },
        { name: 'Terraform', iconUrl: '/terraform.webp' },
      ]
    },
    {
      name: 'Herramientas de Diseño y Desarrollo Web',
      technologies: [
        { name: 'HTML5', iconUrl: '/html5.webp' },
        { name: 'CSS', iconUrl: '/css.webp' },
        { name: 'Tailwind', iconUrl: '/Tailwind.webp' },
        { name: 'Figma', iconUrl: '/figma.webp' },
        { name: 'Angular Material', iconUrl: '/material.webp' },
        { name: 'Draw IO', iconUrl: '/drawio.webp' },
      ]
    },
    {
      name: 'Pasarelas de Pago',
      technologies: [
        { name: 'PayPal', iconUrl: '/paypal.webp' },
        { name: 'FLOW', iconUrl: '/flow.webp' },
        { name: 'Mercado Pago', iconUrl: '/mercadopago.webp' },
        { name: 'WebPay', iconUrl: '/webpay.webp' },


      ]
    }
  ];
}
