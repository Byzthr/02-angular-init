import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    template: `
    <h1>Contador</h1>
    <p>
        Mira este contador: {{ counter }}
    </p>

    <button (click)="increaseValueBy(1)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="increaseValueBy(-1)">-1</button>
    <hr>
`,
    standalone: false
})
export class CounterComponent {
    constructor() {
    }
    public title: string = 'Mi primera chamba';
    public counter = 10;
  
    increaseValueBy(quantity: number) {
      this.counter += quantity;
    }
  
    resetValue() {
      this.counter = 10;
    }
}