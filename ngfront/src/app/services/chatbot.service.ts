import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }

  askQuestion(question: string) {
    const body = { message: question };
    return this.http.post(baseUrl + 'chatbot/', body);
  }

}
