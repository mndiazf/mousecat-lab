import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section.component';
import { ContactFormComponent } from "../../shared/contact-form/contact-form.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-about-us',
  imports: [
    HeroSectionComponent,
    ContactFormComponent,
    FooterComponent
],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  @ViewChild('contactFormSection') contactFormSection!: ElementRef;

  scrollToContactForm(): void {
    this.contactFormSection?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
  }

}
