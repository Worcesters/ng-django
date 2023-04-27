import { Component } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-crashtest',
  templateUrl: './crashtest.component.html',
  styleUrls: [ './crashtest.component.css' ]
})
export class CrashtestComponent {
  val: string = "";
  question: string = '';
  answer: string = '';
  messages: any[] = [];
  conversation: string = ""; // contexte de conversation

  constructor(private chatbotService: ChatbotService) { }

  sendMessage() {
    this.chatbotService.setConversation(this.conversation); // mettre à jour le contexte de conversation
    this.chatbotService.askQuestion(this.question).subscribe((response: any) => {
      this.conversation = response.conversation; // mettre à jour le contexte de conversation avec la réponse de l'API
      this.answer = response.message;
      this.messages.push({ type: 'user', text: this.question }); // Ajout du message de l'utilisateur
      this.messages.push({ type: 'bot', text: response.message }); // Ajout de la réponse du chatbot
      this.question = '';
    });
  }

  changeSide(hoverVal: string = ""){
    if(hoverVal == 'html' || hoverVal == 'css'){
      this.val = 'show-front'
    }
    else if(hoverVal == 'php'){
      this.val = 'show-left'
    }
    else if(hoverVal == 'js'){
      this.val = 'show-right'
    }
    else if(hoverVal == 'angular' || hoverVal == 'angularJs'){
      this.val = 'show-bottom'
    }
    else if(hoverVal == 'python'){
      this.val = 'show-back'
    }
    else if(hoverVal == 'django'){
      this.val = 'show-top'
    }
    return this.val
  }

}
