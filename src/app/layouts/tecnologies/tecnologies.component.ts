import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { TechListComponent } from "../../shared/tech-list/tech-list.component";
import { ContactFormComponent } from "../../shared/contact-form/contact-form.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-tecnologies',
  imports: [
    HeroSectionComponent,
    TechListComponent,
    ContactFormComponent,
    FooterComponent
],
  templateUrl: './tecnologies.component.html',
  styleUrl: './tecnologies.component.scss'
})
export class TecnologiesComponent {

}
