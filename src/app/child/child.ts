import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div>
      <h2>Child Component</h2>
      <h3>{{ message }}</h3>
      <p>{{ parentObject.age }} - {{ parentObject.name }}</p>
    </div>
  `,
})
export class Child implements OnChanges, OnDestroy {
  @Output() messageChange = new EventEmitter();
  @Input() message: any;
  @Input() parentObject: { name: string; age: number } = { name: '', age: 1 };
  @Output() parentObjectChange = new EventEmitter();

  constructor() {
    setInterval(() => {
      this.message = 'data from Child' + Date.now();
      this.messageChange.emit(this.message);
    }, 1000);

    this.parentObjectChange.emit(this.parentObject);
    console.log(this.parentObject);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentObject'] && changes['parentObject'].currentValue) {
      console.log(
        'current:',
        changes['parentObject'].currentValue,
        'previous: ',
        changes['parentObject'].previousValue
      );
    }
  }

  ngOnDestroy(): void {
    console.log('component remove');
  }
}
