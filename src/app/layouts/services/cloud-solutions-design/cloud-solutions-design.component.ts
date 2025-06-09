import { Component } from '@angular/core';
import { FaqCategory, FaqComponent } from '../../../shared/faq/faq.component';
import { TechListComponent } from '../../../shared/tech-list/tech-list.component';
import { ContactFormComponent } from '../../../shared/contact-form/contact-form.component';
import { HeroSectionComponent } from '../../../shared/hero-section/hero-section.component';
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-cloud-solutions-design',
  imports: [
    HeroSectionComponent,
    ContactFormComponent,
    TechListComponent,
    FaqComponent,
    FooterComponent
],
  templateUrl: './cloud-solutions-design.component.html',
  styleUrl: './cloud-solutions-design.component.scss'
})
export class CloudSolutionsDesignComponent {

  categories: FaqCategory[] = [
    {
      name: 'Nuestros servicios',
      isActive: true,
      items: [
        { question: '¿Qué servicios ofrecen?', answer: 'Desarrollo de software: desarrollo web, eCommerce, integración de sistemas, software a medida y soporte y mantenimiento de sistemas. Apps Móviles: desarrollo de aplicaciones iOS & Android, asesoría y soporte y mantenimiento. Soluciones Cloud: diseño de soluciones, despliegue de infraestructura, mantención y soporte cloud, asesoría en soluciones e IoT.' },
        { question: '¿Qué tan personalizados son los proyectos?', answer: 'Nuestros proyectos son 100% personalizados. Creemos que cada empresa tiene sus propias necesidades y cada una de ellas requiere de soluciones diferentes o ajustes distintos. Nuestro objetivo será brindar el mejor servicio según sus requerimientos.' },
        { question: 'Tengo un proyecto en otra industria, ¿igual puedo contactarlos?', answer: 'Por supuesto que sí, estamos entusiasmados de poner a disposición nuestro talento y conocimiento en beneficio de un proyecto que sea de una industria en la cual no hemos trabajado. Contáctenos y resolvamos el proyecto juntos.' },
        { question: 'Realizar asesoria previas a la contratación', answer: 'Podemos agendar una reunión para consultar la viabilidad del proyecto y los requerimientos necesarios, así como también, aclarar algunas dudas al respecto. Contáctanos a través de nuestro formulario.' }
      ]
    },
    {
      name: 'Proyecto',
      items: [
        { question: '¿Cuando pueden iniciar nuestro proyecto?', answer: 'Estableceremos un cronograma que se ajuste a sus necesidades.' },
        { question: '¿Podemos hacer cambios en el plan inicial si mi presupuesto, tiempo o necesidades cambian?', answer: 'Sí. Estamos acostumbrados a trabajar con startups, PYMES y grandes empresas, por lo que somos conscientes que las necesidades y prioridades cambian. Si eso sucede, hablemos y veamos cómo podemos adaptarnos a su nuevo escenario.' },
        { question: '¿Tengo que contratar todo el servicio desde cero hasta el lanzamiento o puedo empezar o puedo empezar a trabajar en un proyecto en cualquier etapa?', answer: 'Podemos empezar a trabajar en su proyecto en cualquier etapa.' }
      ]
    },
    {
      name: 'Postventa',
      items: [
        { question: '¿He empezado mi proyecto con otro proveedor, ¿puedo continuar el trabajo con ustedes?', answer: 'Sí. Probablemente comenzaremos con una revisión del proyecto anterior para evaluar su calidad y luego continuaremos construyendo sobre lo que ya tiene.' },
        { question: '¿Cómo puedo saber si el equipo está trabajando en mi proyecto?', answer: 'Podemos utilizar un canal de comunicación como Slack u otra plataforma compartida entre nuestro equipo y el suyo. De ser necesario crearemos tableros compartidos en plataformas colaborativas con el progreso del proyecto. Puede participar en las reuniones de planificaciones y revisiones en caso de que quiera unirse. Tendrá reuniones frecuentes con una persona del equipo asignada a su proyecto.' },
        { question: '¿Cuánto cuesta el mantenimiento y actualizaciones de mi proyecto?', answer: 'El costo del mantenimiento y actualizaciones de su proyecto varía según el tipo de proyecto y la cantidad de actualizaciones que requiera. Podemos ofrecer un presupuesto detallado para el mantenimiento y actualizaciones de su proyecto.' },
        { question: '¿Cuánto tiempo llevará el mantenimiento y actualizaciones de mi proyecto?', answer: 'El tiempo que lleva el mantenimiento y actualizaciones de su proyecto depende del tipo de proyecto y la cantidad de actualizaciones que requiera. Podemos ofrecer un cronograma detallado para el mantenimiento y actualizaciones de su proyecto.' },
      ]
    }
  ]
}
