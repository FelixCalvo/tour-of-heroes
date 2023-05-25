import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  //add()un mensaje a la memoria caché
  add(message: string) {
    this.messages.push(message);
  }

  //clear()caché.
  clear() {
    this.messages = [];
  }
}