import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../../shared/hero-section/hero-section.component";
import { ContactFormComponent } from "../../../shared/contact-form/contact-form.component";
import { TechBadge, TechListComponent } from "../../../shared/tech-list/tech-list.component";
import { FaqCategory, FaqComponent } from "../../../shared/faq/faq.component";

@Component({
  selector: 'app-integration-systems',
  standalone: true,
  imports: [
    HeroSectionComponent, 
    ContactFormComponent, 
    TechListComponent, 
    FaqComponent
  ],
  templateUrl: './integration-systems.component.html',
  styleUrls: ['./integration-systems.component.scss']
})
export class IntegrationSystemsComponent {
  technologies: TechBadge[] = [
    { name: 'JavaScript',  color: '#FFFFFF', iconUrl: '/icons/javascript.png' }, 
    { name: 'Node.js',     color: '#FFFFFF', iconUrl: '/icons/nodejs.webp' },     
    { name: 'TypeScript',  color: '#FFFFFF', iconUrl: '/icons/typescript.png' },  
    { name: 'AWS',         color: '#FFFFFF', iconUrl: '/icons/aws.png' },
    { name: 'Docker',      color: '#FFFFFF', iconUrl: '/icons/docker.png' },
    { name: 'Java',        color: '#FFFFFF', iconUrl: '/icons/java.webp' },
    { name: 'Spring',      color: '#FFFFFF', iconUrl: '/icons/spring.svg' },
    { name: 'Python',      color: '#FFFFFF', iconUrl: '/icons/python.webp' },
    { name: 'MySQL',       color: '#FFFFFF', iconUrl: '/icons/mysql.webp' },      
    { name: 'PostgreSQL',  color: '#FFFFFF', iconUrl: '/icons/postgresql.png' },
    { name: 'MongoDB',     color: '#FFFFFF', iconUrl: '/icons/mongodb.png' },
    { name: 'Redis',       color: '#FFFFFF', iconUrl: '/icons/redis.png' }
  ];

  categories: FaqCategory[] = [
    {
      name: 'Integración de Sistemas',
      isActive: true,
      items: [
        { question: '¿Qué es la integración de sistemas?', answer: 'La integración de sistemas es el proceso de conectar diferentes aplicaciones de software, bases de datos y sistemas para que funcionen juntos como un sistema unificado. Esto permite que la información fluya sin problemas entre diferentes partes de una organización.' },
        { question: '¿Qué tipos de sistemas pueden integrarse?', answer: 'Podemos integrar una amplia variedad de sistemas, incluyendo CRM, ERP, sistemas de gestión de inventario, plataformas de comercio electrónico, sistemas de gestión de contenido, herramientas de marketing, aplicaciones de recursos humanos, y más.' },
        { question: '¿Cuánto tiempo toma un proyecto de integración?', answer: 'El tiempo necesario para completar un proyecto de integración varía según la complejidad y el alcance. Los proyectos simples pueden completarse en semanas, mientras que las integraciones más complejas pueden llevar varios meses. Proporcionamos estimaciones detalladas después de evaluar sus necesidades específicas.' }
      ]
    },
    {
      name: 'Tecnología y Métodos',
      items: [
        { question: '¿Qué tecnologías utilizan para la integración?', answer: 'Utilizamos diversas tecnologías dependiendo de sus necesidades específicas, incluyendo APIs RESTful, servicios web SOAP, middleware de integración, ETL (Extract, Transform, Load), ESB (Enterprise Service Bus), y soluciones basadas en la nube como AWS Lambda, Azure Functions, o Google Cloud Functions.' },
        { question: '¿Cómo garantizan la seguridad de los datos durante la integración?', answer: 'La seguridad es nuestra prioridad. Implementamos cifrado de datos, autenticación segura, control de acceso basado en roles, auditoría de actividades, y cumplimos con las regulaciones relevantes como GDPR, HIPAA, o PCI DSS según sea necesario.' },
        { question: '¿Pueden integrar sistemas antiguos con tecnologías modernas?', answer: 'Sí, tenemos experiencia en la integración de sistemas heredados con tecnologías modernas. Utilizamos adaptadores, APIs personalizadas, y otras técnicas para garantizar que sus sistemas antiguos puedan comunicarse eficazmente con las nuevas tecnologías.' }
      ]
    },
    {
      name: 'Soporte y Mantenimiento',
      items: [
        { question: '¿Qué tipo de soporte ofrecen después de la implementación?', answer: 'Ofrecemos varios niveles de soporte post-implementación, desde soporte básico hasta acuerdos de nivel de servicio (SLA) completos. Esto incluye monitoreo proactivo, resolución de problemas, actualizaciones de seguridad, y asistencia técnica continua.' },
        { question: '¿Cómo manejan las actualizaciones y cambios en los sistemas integrados?', answer: 'Diseñamos nuestras integraciones para ser flexibles y adaptables. Cuando uno de sus sistemas se actualiza, evaluamos el impacto y realizamos los ajustes necesarios para garantizar que la integración siga funcionando sin problemas. También ofrecemos servicios de mantenimiento proactivo para anticipar y abordar posibles problemas.' },
        { question: '¿Qué sucede si hay un problema con la integración?', answer: 'Contamos con un proceso de respuesta a incidentes bien definido. Dependiendo de su acuerdo de soporte, ofrecemos diferentes tiempos de respuesta y resolución. Nuestro equipo está disponible para diagnosticar y resolver rápidamente cualquier problema que pueda surgir.' }
      ]
    }
  ];
}
