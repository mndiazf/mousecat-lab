import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FaqCategory {
  name: string;
  isActive?: boolean;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input() title: string = 'Preguntas frecuentes';
  @Input() categories: FaqCategory[] = [];
  
  activeCategory: string = '';
  
  constructor() {}
  
  ngOnInit() {
    // Establecer la primera categoría como activa por defecto
    if (this.categories.length > 0) {
      this.activeCategory = this.categories[0].name;
      this.categories[0].isActive = true;
    }
  }
  
  toggleCategory(categoryName: string) {
    this.activeCategory = this.activeCategory === categoryName ? '' : categoryName;
    
    // Actualizar el estado activo de las categorías
    this.categories.forEach(category => {
      category.isActive = category.name === this.activeCategory;
    });
  }
  
  toggleQuestion(item: FaqItem) {
    item.isOpen = !item.isOpen;
    
    // Cerrar otras preguntas en la misma categoría (opcional)
    // this.categories.find(c => c.isActive)?.items.forEach(q => {
    //   if (q !== item) q.isOpen = false;
    // });
  }
}
