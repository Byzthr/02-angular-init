import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {
  public title: string = "Manines de Dragon Ball"

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter
  
  emitDeleteCharacter(id?: string):void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
    console.log(id);
  }

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]
}
