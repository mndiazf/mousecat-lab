import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TechBadge {
  name: string;
  color: string;
  iconUrl?: string;
}


@Component({
  selector: 'app-technologies-section',
  imports: [
    CommonModule
  ],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.scss'
})
export class TechnologiesSectionComponent {
  technologies: TechBadge[] = [
    { name: 'JavaScript',  color: '#FFFFFF', iconUrl: '/javascript.webp' }, 
    { name: 'React',       color: '#FFFFFF', iconUrl: '/react.webp' },    
    { name: 'Microsoft Azure',         color: '#FFFFFF', iconUrl: '/azure.webp' },   
    { name: 'Angular',     color: '#FFFFFF', iconUrl: '/angular.webp' },     
    { name: 'Node.js',     color: '#FFFFFF', iconUrl: '/nodejs.webp' },     
    { name: 'Java',        color: '#FFFFFF', iconUrl: '/java.webp' },        
    { name: 'Spring',      color: '#FFFFFF', iconUrl: '/spring.webp' },      
    { name: 'AWS',         color: '#FFFFFF', iconUrl: '/aws.webp' },        
    { name: '.NET',         color: '#FFFFFF', iconUrl: '/dotnet.webp' },  
    { name: 'Docker',      color: '#FFFFFF', iconUrl: '/docker.webp' },      
    { name: 'MySQL',       color: '#FFFFFF', iconUrl: '/mysql.webp' },    
    { name: 'Google Cloud',       color: '#FFFFFF', iconUrl: '/gcp.webp' },    
    { name: 'PostgreSQL',  color: '#FFFFFF', iconUrl: '/postgresql.webp' },  
    { name: 'TypeScript',  color: '#FFFFFF', iconUrl: '/typescript.webp' },  
    { name: 'Python',      color: '#FFFFFF', iconUrl: '/python.webp' },      
  ];
}