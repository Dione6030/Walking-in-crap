import { fakerPT_BR as faker } from "@faker-js/faker";
import { Personagem } from "./Personagem";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(nome);
        this.nome = nome + " Warrior";
        this._forca = faker.number.int({ min: 1, max: 1_000 });
        this._habilidadeMental = 0;
        this._poderDeAtaque = this._forca * 10;
        this._esquiva = faker.number.int({ min: 0, max: 50 });
        this._resistencia = faker.number.int({ min: 0, max: 90 });
        this._vidaMaxima = faker.number.int({ min: 1, max: 40_000 });
    }
    public get forca(): number {
        return this._forca;
    }
    set forca(forca: number) {
        if (forca > 1_500) {
            forca = 1_500;
        }
        this._forca = forca;
    }
    public get habilidadeMental(): number {
        return this._habilidadeMental;
    }
    public get poderDeAtaque(): number {
        return this._poderDeAtaque;
    }
    public get esquiva(): number {
        return this._esquiva;
    }
    public get resistencia(): number {
        return this._resistencia;
    }
    public get vidaAtual(): number {
        return this._vidaAtual;
    }
    public set vidaAtual(vida: number) {
        if (vida < 0) {
            this._vidaAtual = 0;
        } else {
            this._vidaAtual = vida;
        }
    }
    public get vidaMaxima(): number {
        return this._vidaMaxima;
    }

    public aprimorarAtaquePrincipal(): void {
        this.forca += this.forca * 0.1;
    }
    public regenerarVida(): void {
        const vidaRegenerada = this.vidaMaxima * 0.05;
        this.vidaAtual += vidaRegenerada;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
    }
}