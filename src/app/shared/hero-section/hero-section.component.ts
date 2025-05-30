import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';


  constructor(private router: Router) {}

  // ngOnInit(): void {
  //   console.log(this.router.url);
  // }

  currentPath: string = '';

  ngOnInit(): void {
    this.currentPath = this.router.url;
    console.log(this.currentPath);
  }
  
  


}
