import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: "Krillin",
        power: 500
    },{
        id: uuid(),
        name: "Goku",
        power:10000
    },{
        id: uuid(),
        name: "Vegeta",
        power:8000
    }];

    onNewCharacter(character: Character): number {
        const newCharacter: Character = {id: uuid(), ...character};

        this.characters.push(character)
        console.log(character)
        return this.characters.length - 1;
    }

    deleteCharacterById(id: string): string {
        const newArray: Character[] = this.characters.filter((character) => character.id !== id);
        this.characters = newArray;
        console.log(id);
        return id;
    }
}