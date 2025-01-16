import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Hulk', 'Spiderman', 'Ironman'];

  public removedHero?: string = '';

  removeLastHero() {
    this.removedHero = this.heroNames.pop();
  }
}
