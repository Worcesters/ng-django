import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrlApi } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl: string = baseUrlApi + 'chatbot/';

  constructor(private http: HttpClient) { }

  public askQuestion(question: string): Observable<any> {
    return this.http.post(this.apiUrl, { question: question, conversation: this.getConversation() });
  }

  // public getWelcomeMessage(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  public setConversation(conversation: string): void {
    localStorage.setItem('conversation', conversation);
  }

  public getConversation(): string {
    return localStorage.getItem('conversation') || '';
  }

}
