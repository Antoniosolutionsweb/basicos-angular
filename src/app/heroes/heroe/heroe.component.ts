import { Component } from '@angular/core';


@Component({
    selector:'app-heroes',
    templateUrl: 'heroe.component.html'
})
export class HeroesComponent {
    nombre : string = 'Iroman';
    edad: number = 45;

    get nombreCapiitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }
    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }
    cambiarEdad(): void {
        this.edad = 25;
    }
}