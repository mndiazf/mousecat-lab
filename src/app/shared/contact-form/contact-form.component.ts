import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService, ContactFormData } from '../../services/email.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  errorMessage: string | null = null;
  
  // Opciones para el selector
  contactOptions = [
    { value: 'email', label: 'Al correo electrónico' },
    { value: 'phone', label: 'Por teléfono' },
    { value: 'whatsapp', label: 'Por WhatsApp' }
  ];
  
  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-\(\)]+$/)]],
      company: [''],
      contactPreference: ['email', Validators.required],
      helpNeeded: ['cotizacion', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    console.log('Formulario enviado');
    console.log('Estado del formulario:', this.contactForm.valid ? 'Válido' : 'Inválido');
    console.log('Valores del formulario:', this.contactForm.value);
    
    this.submitted = true;
    this.errorMessage = null;
    
    // Verificar cada campo individualmente y mostrar su estado
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      console.log(`Campo ${key}: ${control?.valid ? 'Válido' : 'Inválido'}, Errores:`, control?.errors);
    });
    
    if (this.contactForm.valid) {
      console.log('Formulario válido, procediendo a enviar');
      
      const formData: ContactFormData = {
        firstName: this.contactForm.value.firstName || '',
        lastName: this.contactForm.value.lastName || '',
        email: this.contactForm.value.email || '',
        phone: this.contactForm.value.phone || '',
        company: this.contactForm.value.company || '',
        contactPreference: this.contactForm.value.contactPreference || 'email',
        helpNeeded: this.contactForm.value.helpNeeded || '',
        message: this.contactForm.value.message || ''
      };
      
      console.log('Datos a enviar:', formData);
      
      this.emailService.sendContactForm(formData).subscribe({
        next: (response) => {
          console.log('Respuesta recibida:', response);
          if (response.success) {
            this.success = true;
            this.contactForm.reset();
            
            // Resetear el estado de éxito después de un tiempo
            setTimeout(() => {
              this.success = false;
            }, 5000);
          } else {
            this.errorMessage = response.message || 'Error al enviar el formulario';
          }
          this.submitted = false;
        },
        error: (error) => {
          console.error('Error en la solicitud:', error);
          this.errorMessage = 'Ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.';
          this.submitted = false;
        }
      });
    } else {
      console.log('Formulario inválido, mostrando errores');
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      this.submitted = false;
      this.errorMessage = 'Por favor, completa todos los campos requeridos correctamente.';
    }
  }
  
  get f() { return this.contactForm.controls; }
}
