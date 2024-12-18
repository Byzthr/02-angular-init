import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'Mi primera chamba';
  public counter = 10;

  increaseValueBy(quantity: number) {
    this.counter += quantity;
  }

  resetValue() {
    this.counter = 10;
  }
}
