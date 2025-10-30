import { faker } from "@faker-js/faker";
import { Personagem } from "./Personagem";

export class Padre extends Personagem {
    constructor(nome: string) {
        super(nome);
        this.nome = nome + " Priest";
        this._forca = 0;
        this._habilidadeMental = 0;
        this._poderDeAtaque = 0;
        this._esquiva = 0;
        this._resistencia = 0;
        this._vidaMaxima = faker.number.int({ min: 1, max: 8_000 });
    }
    public get forca(): number {
        return this._forca;
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
        throw new Error("Este personagem não pode executar esta ação.");
    }
    public regenerarVida(): void {
        const vidaRegenerada = this.vidaMaxima * 0.1;
        this.vidaAtual += vidaRegenerada;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
    }
}