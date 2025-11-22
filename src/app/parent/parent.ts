import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'parent',
  template: `
    Data recieved: {{ parentMessage }}

    @if(isVisible){
    <child [(message)]="parentMessage" [(parentObject)]="parentObject"></child>}
    <input [(ngModel)]="parentObject.age" />
    <input [(ngModel)]="parentObject.name" />
    <button (click)="handleCheck()">remove</button>
  `,
  imports: [Child, FormsModule],
})
export class Parent {
  parentMessage = 'check';
  isVisible = true;

  parentObject = {
    name: 'minh',
    age: 32,
  };
  constructor() {
    setInterval(() => {
      this.parentMessage = 'data from Child' + Date.now();
    }, 1000);
  }

  handleCheck() {
    this.isVisible = !this.isVisible;
  }
}
