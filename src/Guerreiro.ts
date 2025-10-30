import { fakerPT_BR as faker } from "@faker-js/faker";
import { Personagem } from "./Personagem";

export class Gerreiro extends Personagem {
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
    get forca(): number {
        return this._forca;
    }
    set forca(forca: number) {
        if (forca > 1_500) {
            forca = 1_500;
        }
        this._forca = forca;
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
        let numeroAleatorio = faker.number.int({ min: 0, max: 50 });
        if (numeroAleatorio < alvo.esquiva) {
            console.log(`${alvo.nome} esquivou do ataque de ${this.nome}!`);
        } else {
            const danoCausado = this.poderDeAtaque;
            alvo.vidaAtual -= danoCausado - alvo.resistencia;
            console.log(`${this.nome} atacou ${alvo.nome} e causou ${danoCausado - alvo.resistencia} de dano!`);
        }
    }
    public contraAtacar(this: Personagem, atacante: Personagem): void {
        console.log(`${this.nome} está contra-atacando ${atacante.nome}!`);
        this.atacar(atacante);
    }
    public aprimorarAtaquePrincipal(): void {
        this.forca += this.forca * 0.1;
    }
    regenerarVida(): void {
        const vidaRegenerada = this.vidaMaxima * 0.05;
        this.vidaAtual += vidaRegenerada;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
    }
}