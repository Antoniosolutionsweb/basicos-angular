import {Injectable} from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface'

@Injectable()

export class DbzService{

    private _personajes: Personaje[] = [

        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 14900
        },
      ]
      get personajes():Personaje[]{
        return [...this._personajes]
      }
    constructor(){}

    agregrPersonaje(personaje:Personaje){
        this._personajes.push(personaje)
    }
}