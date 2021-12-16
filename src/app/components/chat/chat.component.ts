import { Component, OnInit } from '@angular/core';
import { ChatWindowDto, FrientListDto } from 'src/app/interfaces/userListDto';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatWindow: ChatWindowDto[] = [];
  frientList: FrientListDto[] = [
    {
      id: 1,
      name: 'John link',
    },
    {
      id: 2,
      name: 'Peter parker',
    },
    {
      id: 3,
      name: 'Julia wadson',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  showUserChat(user: FrientListDto): void {
    const window: ChatWindowDto = { ...user, messages: [], inputText: '' };
    const found = this.chatWindow.some(item => item.id === user.id);
    if (found === false) {
      this.chatWindow.push(window);
    }
  }

  onSendClick(chat: ChatWindowDto): void {
    const index = this.chatWindow.findIndex(item => item.id === chat.id);
    const obj = { text: chat.inputText };
    if (index > -1) {
      this.chatWindow[index].messages.push(obj);
    }
    chat.inputText = '';
  }

}
