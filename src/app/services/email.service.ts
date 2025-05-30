import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  contactPreference: string;
  helpNeeded: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly contactEmail = 'contacto-mousecat@gmail.com';
  
  constructor(private http: HttpClient) {}
  
  /**
   * Envía un correo electrónico con los datos del formulario de contacto
   * Nota: Esta es una implementación simulada. En un entorno real, 
   * necesitarías un backend que procese este envío de correo.
   */
  sendContactForm(formData: ContactFormData): Observable<any> {
    console.log(`Enviando correo a ${this.contactEmail} con los siguientes datos:`, formData);
    
    // En un entorno real, aquí harías una llamada a tu API
    // return this.http.post('/api/send-email', { 
    //   to: this.contactEmail,
    //   subject: `Nuevo contacto: ${formData.helpNeeded}`,
    //   formData 
    // });
    
    // Por ahora, simulamos una respuesta exitosa después de un retraso
    return of({ success: true, message: 'Correo enviado con éxito' })
      .pipe(
        delay(1500), // Simula el tiempo de envío
        catchError(error => {
          console.error('Error al enviar el correo:', error);
          return of({ success: false, message: 'Error al enviar el correo' });
        })
      );
  }
}
