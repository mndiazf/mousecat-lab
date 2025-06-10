import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://mousecat-api-224437866016.us-central1.run.app/api/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}