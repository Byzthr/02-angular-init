import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    template: `
    <h1>Contador</h1>
    <p>
        Este texto me representa que flipas
        Mira este contador: {{ counter }}
    </p>

    <button (click)="increaseValueBy(1)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="increaseValueBy(-1)">-1</button>
`,
    standalone: false
})
export class CounterComponent {
    constructor() {

    }
}