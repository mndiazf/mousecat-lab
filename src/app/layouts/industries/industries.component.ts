import { ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeroSectionComponent } from "../../shared/hero-section/hero-section.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";
import { ContactFormComponent } from "../../shared/contact-form/contact-form.component";

@Component({
  selector: 'app-industries',
  imports: [
    HeroSectionComponent,
    CommonModule,
    FooterComponent,
    ContactFormComponent
],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  @ViewChild('contactFormSection') contactFormSection!: ElementRef;

  scrollToContactForm(): void {
    this.contactFormSection?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }
  animatedIndustryNames: string[] = [
    'Retail', 
    'Salud',
    'Educación',
    'Logística',
    'Servicios Financieros',
    'Recursos Humanos',
    'eCommerce',
    'Turismo',
    'Sector Público',
    'PYMES'
  ];

  currentAnimatedIndustry: string = this.animatedIndustryNames[0];
  private industryAnimationInterval: any;
  private currentIndustryIndex: number = 0;
  isIndustryAnimatingOut: boolean = false;

  ngOnInit(): void {
    this.startIndustryAnimation();
  }

  ngOnDestroy(): void {
    if (this.industryAnimationInterval) {
      clearInterval(this.industryAnimationInterval);
    }
  }

  startIndustryAnimation(): void {
    this.industryAnimationInterval = setInterval(() => {
      this.isIndustryAnimatingOut = true;

      setTimeout(() => {
        this.currentIndustryIndex = (this.currentIndustryIndex + 1) % this.animatedIndustryNames.length;
        this.currentAnimatedIndustry = this.animatedIndustryNames[this.currentIndustryIndex];
        this.isIndustryAnimatingOut = false;
      }, 500);
    }, 2500);
  }

  industries = [
    {
      title: 'Educación',
      icon: '🎓',
      description: 'Cree plataformas digitales fáciles de usar para profesores, estudiantes y personal administrativo. Fomente experiencias de aprendizaje en línea fluidas e información precisa'
    },
    {
      title: 'Sector Público',
      icon: '🏛️',
      description: 'Mejore los servicios digitales del sector público con UI/UX accesibles y eficientes, promoviendo la participación ciudadana y la transparencia.'
    },
    {
      title: 'Salud',
      icon: '🏥',
      description: 'Desarrolle diseños de UI/UX seguros y compatibles para mejorar la participación del paciente y optimizar los flujos de trabajo clínicos en el sector de la salud.'
    },
    {
      title: 'Finanzas',
      icon: '💳',
      description: 'Diseñe interfaces centradas en el usuario y basadas en datos para plataformas financieras, garantizando transacciones fluidas, análisis y una seguridad sólida.'
    },
    {
      title: 'eCommerce',
      icon: '🛒',
      description: 'Desarrolle páginas web y/o tiendas en línea personalizadas con un potente panel de administración, integraciones de pagos, gestión de inventario, informes en tiempo real, automatización de envíos, programa de fidelización y más.'
    }
  ];
}