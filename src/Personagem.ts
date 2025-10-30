import { faker } from "@faker-js/faker";
export class Personagem {
    private _nome: string;
    protected _forca: number;
    protected _habilidadeMental: number;
    protected _poderDeAtaque: number;
    protected _esquiva: number;
    protected _resistencia: number;
    protected _vidaAtual: number;
    protected _vidaMaxima: number;

    constructor(nome: string){
        this._nome = nome;
        this._forca = 0;
        this._habilidadeMental = 0;
        this._poderDeAtaque = 0;
        this._esquiva = 0;
        this._resistencia = 0;
        this._vidaMaxima = 0;
        this._vidaAtual = this._vidaMaxima;
    }
    public get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        if (nome.length < 2 || nome.length > 20) {
            throw new Error("Nome deve ter entre 2 e 20 caracteres.");
        }
        this._nome = nome;
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

    public atacar(this: Personagem, alvo: Personagem): string {
        let numeroAleatorio = faker.number.int({ min: 0, max: 50 });
        if (numeroAleatorio < alvo.esquiva) {
            return `${alvo.nome} esquivou do ataque de ${this.nome}!`;
        } else {
            const danoCausado = this.poderDeAtaque;
            alvo.vidaAtual -= danoCausado;
            return `${this.nome} atacou ${alvo.nome} e causou ${danoCausado} de dano!`;
        }
    }

    public contraAtacar(this: Personagem, atacante: Personagem): string {
        const resultadoAtaque = this.atacar(atacante);
        return `${resultadoAtaque} ${this.nome} contra-atacou ${atacante.nome}!`;
    }

    public aprimorarAtaquePrincipal(): void {}

    public regenerarVida(): void {}

    public estaVivo(): boolean {
        return this.vidaAtual > 0;
    }
}