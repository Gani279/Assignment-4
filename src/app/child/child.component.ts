import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  messageToSend = 'I am fine';

  sendMessage() {
    this.messageEvent.emit(this.messageToSend);
  }
}
