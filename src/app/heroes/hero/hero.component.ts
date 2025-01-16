import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public showName: boolean = true;
  public showAge: boolean = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
    this.showName = false;
  }

  changeAge():void  {
    this.age = 25;
    this.showAge = false;
  }

  resetForm():void {
    this.name = 'ironman';
    this.showName = true;
    this.age = 45;
    this.showAge = true;
  }
}
