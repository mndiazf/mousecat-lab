import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TechBadge {
  name: string;
  color: string;
  iconUrl: string;
}

@Component({
  selector: 'app-tech-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-list.component.html',
  styleUrl: './tech-list.component.scss'
})
export class TechListComponent {
  @Input() technologies: TechBadge[] = [];
  @Input() title: string = 'Tecnologías con las que trabajamos';
}
