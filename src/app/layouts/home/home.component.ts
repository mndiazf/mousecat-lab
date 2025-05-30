import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { HeroAltComponent } from '../../shared/hero-alt/hero-alt.component';
import { ServicesSectionComponent } from '../../shared/services-section/services-section.component';
import { TechnologiesSectionComponent } from '../../shared/technologies-section/technologies-section.component';
import { WhychooseSectionComponent } from '../../shared/whychoose-section/whychoose-section.component';
import { DynamicIndustrySectionComponent } from '../../shared/dynamic-industry-section/dynamic-industry-section.component';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    HeroAltComponent,
    ServicesSectionComponent,
    TechnologiesSectionComponent,
    WhychooseSectionComponent,
    DynamicIndustrySectionComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

}