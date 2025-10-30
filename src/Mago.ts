import { faker } from "@faker-js/faker";
import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    constructor(nome: string) {
        super(nome);
        this.nome = nome + " Mage";
        this._forca = 0;
        this._habilidadeMental = faker.number.int({ min: 1, max: 5_000 });
        this._poderDeAtaque = this._habilidadeMental * 10;
        this._esquiva = faker.number.int({ min: 0, max: 30 });
        this._resistencia = faker.number.int({ min: 0, max: 30 });
        this._vidaMaxima = faker.number.int({ min: 1, max: 10_000 });
    }
    public get forca(): number {
        return this._forca;
    }
    public get habilidadeMental(): number {
        return this._habilidadeMental;
    }
    set habilidadeMental(habilidade: number) {
        if (habilidade > 10_000) {
            habilidade = 10_000;
        }
        this._habilidadeMental = habilidade;
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

    public atacar(this: Personagem, alvo: Personagem): string {
        let numeroAleatorio = faker.number.int({ min: 0, max: 100 });
        if (numeroAleatorio > alvo.esquiva && numeroAleatorio >= 70) {
            const danoCausado = this.poderDeAtaque;
            const danoFinal = danoCausado * (alvo.resistencia / 100);
            alvo.vidaAtual -= danoFinal;
            return `${this.nome} lançou um feitiço em ${alvo.nome} e causou ${danoFinal} de dano!`;
        } else if (numeroAleatorio <= alvo.esquiva) {
            return `${alvo.nome} esquivou do feitiço de ${this.nome}!`;
        } else {
            return `${this.nome} tentou lançar um feitiço em ${alvo.nome}, mas falhou!`;
        }
    }

    public aprimorarAtaquePrincipal(): void {
        this.habilidadeMental += this.habilidadeMental * 0.2;
    }
    public regenerarVida(): void {
        const vidaRegenerada = this.vidaMaxima * 0.1;
        this.vidaAtual += vidaRegenerada;
        if (this.vidaAtual > this.vidaMaxima) {
            this.vidaAtual = this.vidaMaxima;
        }
    }
}