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
    get forca(): number {
        return this._forca;
    }
    get habilidadeMental(): number {
        return this._habilidadeMental;
    }
    get poderDeAtaque(): number {
        return this._poderDeAtaque;
    }
    get esquiva(): number {
        return this._esquiva;
    }
    get resistencia(): number {
        return this._resistencia;
    }
    get vidaAtual(): number {
        return this._vidaAtual;
    }
    set vidaAtual(vida: number) {
        if (vida < 0) {
            this._vidaAtual = 0;
        } else {
            this._vidaAtual = vida;
        }
    }
    get vidaMaxima(): number {
        return this._vidaMaxima;
    }

    public atacar(this: Personagem, alvo: Personagem): void {
        let numeroAleatorio = faker.number.int({ min: 0, max: 100 });
        if (numeroAleatorio < 40 ) {
            console.log(`O ${this.nome} converteu ${alvo.nome} para a sua fé e venceu!`);
            alvo.vidaAtual = 0;
        } else {
            console.log(`${this.nome} tentou converter ${alvo.nome}, mas falhou!`);
        }
    }
    public contraAtacar(this: Personagem, atacante: Personagem): void {
        this.atacar(atacante);
    }
    public aprimorarAtaquePrincipal(): void {
        throw new Error("Este personagem não pode executar esta ação.");
    }
    regenerarVida(): void {
        const vidaRegenerada = this.vidaMaxima * 0.1;
        this.vidaAtual += vidaRegenerada;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
    }
}