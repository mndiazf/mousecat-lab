import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-industry-section',
  imports: [],
  templateUrl: './dynamic-industry-section.component.html',
  styleUrl: './dynamic-industry-section.component.scss'
})
export class DynamicIndustrySectionComponent {
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
}