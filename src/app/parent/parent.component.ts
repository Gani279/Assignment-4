import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css',
    imports: [ChildComponent]
})
export class ParentComponent {
  greetingMessage = 'Hello! How are you?';
  childMessage: string | undefined;

  receiveMessage($event: string | undefined) {
    this.childMessage = $event;
  }
}
