import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface ServiceCard {
  icon: string;   // nombre de la clase / svg
  title: string;
}

interface TechBadge {
  name: string;
  color: string;
  iconUrl?: string; // Nueva propiedad para la URL del icono (opcional)
}

interface IndustryCard {
  icon: string;
  title: string;
  description: string;
}

// New interfaces for categorized services
interface ServiceItem {
  title: string;
  backgroundImageUrl: string; // URL for the background image
  // description?: string; // Optional: if you want a short description on the card
}

interface ServiceCategory {
  id: string; // e.g., 'software-development', 'mobile-apps'
  categoryName: string;
  items: ServiceItem[];
}

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy { // Implementa OnInit y OnDestroy
  year = new Date().getFullYear();

  // Old services structure (will be replaced or modified)
  /*
  services: ServiceCard[] = [
    { icon: 'code',          title: 'Desarrollo Web' },
    { icon: 'shopping-cart', title: 'eCommerce' },
    { icon: 'settings',      title: 'Integración de Sistemas' },
    { icon: 'laptop',        title: 'Software a medida' },
  ];
  */

  // New categorized services structure
  serviceCategories: ServiceCategory[] = [
    {
      id: 'software-development',
      categoryName: 'Desarrollo de Software',
      items: [
        { title: 'Desarrollo de App Web', backgroundImageUrl: '/web-dev.png' }, // Replace with actual image paths
        { title: 'eCommerce', backgroundImageUrl: '/ecommerce.png' },
        { title: 'Integración de Sistemas', backgroundImageUrl: '/system-integration.png' },
        { title: 'Software a Medida', backgroundImageUrl: '/custom-software.png' },
      ]
    },
    {
      id: 'mobile-apps',
      categoryName: 'App Móviles',
      items: [
        { title: 'Desarrollo de Aplicaciones Móviles', backgroundImageUrl: '/mobile-apps.png' },
      ]
    },
    {
      id: 'cloud-solutions',
      categoryName: 'Soluciones Cloud',
      items: [
        { title: 'Diseño de Soluciones Cloud', backgroundImageUrl: '/cloud-design.png' },
        { title: 'Despliegue de Infraestructura Cloud', backgroundImageUrl: '/cloud-deploy.png' },
        { title: 'Mantención y Soporte Cloud', backgroundImageUrl: '/cloud-support.png' },
      ]
    },
    {
      id: 'other-services',
      categoryName: 'Otros Servicios',
      items: [
        { title: 'Asesoría Tecnológica', backgroundImageUrl: '/consulting.png' },
        { title: 'Soporte y Mantenimiento de Software', backgroundImageUrl: '/maintenance.png' },
      ]
    }
  ];

  selectedServiceCategoryId: string = this.serviceCategories[0]?.id || ''; // Default to the first category

  technologies: TechBadge[] = [
    { name: 'JavaScript',  color: '#FFFFFF', iconUrl: '/javascript.png' }, 
    { name: 'React',       color: '#FFFFFF', iconUrl: '/react.png' },      
    { name: 'Angular',     color: '#FFFFFF', iconUrl: '/angular.png' },     
    { name: 'Node.js',     color: '#FFFFFF', iconUrl: '/nodejs.webp' },     
    { name: 'Java',        color: '#FFFFFF', iconUrl: '/java.webp' },        
    { name: 'Spring',      color: '#FFFFFF', iconUrl: '/spring.svg' },      
    { name: 'AWS',         color: '#FFFFFF', iconUrl: '/aws.png' },         
    { name: 'Docker',      color: '#FFFFFF', iconUrl: '/docker.png' },      
    { name: 'MySQL',       color: '#FFFFFF', iconUrl: '/mysql.webp' },      
    { name: 'PostgreSQL',  color: '#FFFFFF', iconUrl: '/postgresql.png' },  
    { name: 'TypeScript',  color: '#FFFFFF', iconUrl: '/typescript.png' },  
    { name: 'Python',      color: '#FFFFFF', iconUrl: '/python.webp' },      
  ];

  industries: IndustryCard[] = [
    { icon: 'store',        title: 'Retail',             description: 'Soluciones para comercio minorista y mayorista' },
    { icon: 'heart',        title: 'Salud',              description: 'Sistemas para clínicas, hospitales y telemedicina' },
    { icon: 'graduation',   title: 'Educación',          description: 'Plataformas educativas y e-learning' },
    { icon: 'truck',        title: 'Logística',          description: 'Gestión de cadena de suministro y distribución' },
    { icon: 'credit-card',  title: 'Servicios Financieros', description: 'Fintech, banca digital y pagos' },
    { icon: 'users',        title: 'Recursos Humanos',   description: 'Gestión de talento y nóminas' },
  ];

  // Nuevas propiedades para la sección de industrias animada
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
    // Agrega más industrias según necesites
  ];
  currentAnimatedIndustry: string = this.animatedIndustryNames[0];
  private industryAnimationInterval: any;
  private currentIndustryIndex: number = 0;
  isIndustryAnimatingOut: boolean = false; // Nueva variable para el estado de la animación

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      projectType: ['', Validators.required],
      message: ['', Validators.required],
    });

    // Iniciar la animación de industrias
    this.startIndustryAnimation();
  }

  ngOnDestroy(): void {
    // Detener la animación para evitar memory leaks
    if (this.industryAnimationInterval) {
      clearInterval(this.industryAnimationInterval);
    }
  }

  startIndustryAnimation(): void {
    this.industryAnimationInterval = setInterval(() => {
      this.isIndustryAnimatingOut = true; // Comienza la animación de salida

      setTimeout(() => { // Espera a que termine la animación de salida
        this.currentIndustryIndex = (this.currentIndustryIndex + 1) % this.animatedIndustryNames.length;
        this.currentAnimatedIndustry = this.animatedIndustryNames[this.currentIndustryIndex];
        this.isIndustryAnimatingOut = false; // Comienza la animación de entrada
      }, 500); // Este tiempo debe coincidir con la duración de la animación de salida en SCSS

    }, 2500); // Intervalo total entre cambios de industria (2000ms para mostrar + 500ms para animar)
  }

  selectServiceCategory(categoryId: string): void {
    this.selectedServiceCategoryId = categoryId;
  }

  get displayedServices(): ServiceItem[] {
    const selectedCategory = this.serviceCategories.find(cat => cat.id === this.selectedServiceCategoryId);
    return selectedCategory ? selectedCategory.items : [];
  }

  submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    // Obtener los datos del formulario
    const formData = this.contactForm.value;
    
    // Crear el cuerpo del correo con formato
    const subject = `Nuevo contacto desde web: ${formData.name}`;
    const body = `Nombre: ${formData.name}\n\n` +
                `Email: ${formData.email}\n\n` +
                `Empresa: ${formData.company || 'No especificada'}\n\n` +
                `Tipo de proyecto: ${formData.projectType}\n\n` +
                `Mensaje:\n${formData.message}`;
    
    // Crear el enlace mailto para abrir el cliente de correo predeterminado
    const mailtoLink = `mailto:contactomousecat.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo con los datos prellenados
    window.location.href = mailtoLink;
    
    // Resetear el formulario después de enviar
    this.contactForm.reset();
    
    // Opcional: mostrar confirmación
    setTimeout(() => {
      alert('¡Formulario preparado para envío!');
    }, 500);
  }
}