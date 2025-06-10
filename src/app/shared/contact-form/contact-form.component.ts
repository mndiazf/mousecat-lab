import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,          // para *ngIf, *ngFor, etc.
    ReactiveFormsModule,   // para formularios reactivos
    MatSnackBarModule      // para mensajes emergentes
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private snackBar = inject(MatSnackBar);

  form: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    empresa: [''],
    canalContacto: ['correo', Validators.required],
    tipoAyuda: ['cotizacion', Validators.required],
    mensaje: ['', Validators.required]
  });

  loading = false;

  onSubmit() {
    if (this.form.invalid || this.loading) return;

    this.loading = true;

    this.contactService.sendContactForm(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Mensaje enviado correctamente ✅', 'Cerrar', { duration: 4000 });
        this.form.reset({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          empresa: '',
          canalContacto: 'correo',
          tipoAyuda: 'cotizacion',
          mensaje: ''
        });
        
        // Marca el formulario como válido y limpio
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.form.updateValueAndValidity();
        
        this.loading = false;
      },
      error: () => {
        this.snackBar.open('❌ Error al enviar el formulario', 'Cerrar', { duration: 4000 });
        this.loading = false;
      }
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
