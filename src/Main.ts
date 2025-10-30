import { Guerreiro } from "./Guerreiro";
import { Mago } from "./Mago";
import { Personagem } from "./Personagem";
import { Padre } from "./Padre";
import Prompt from "prompt-sync";

const teclado = Prompt();

let Personagens: Personagem[] = [];

while(true) {
    console.log("\n=== Menu de Criação de Personagens ===");
    console.log("1. Criar Guerreiro");
    console.log("2. Criar Mago");
    console.log("3. Criar Padre");
    console.log("4. Listar Personagens");
    console.log("5. Batalhar");
    console.log("6. Sair");
    const escolha = teclado("Escolha uma opção: ");

    if (escolha === "6") {
        console.log("Saindo do programa...");
        break;
    }
    switch (escolha) {
        case "1":
            const nomeGuerreiro = teclado("Digite o nome do Guerreiro: ");
            const guerreiro : Guerreiro = new Guerreiro(nomeGuerreiro);
            Personagens.push(guerreiro);
            break;
        case "2":
            const nomeMago = teclado("Digite o nome do Mago: ");
            const mago : Mago = new Mago(nomeMago);
            Personagens.push(mago);
            break;
        case "3":
            const nomePadre = teclado("Digite o nome do Padre: ");
            const padre : Padre = new Padre(nomePadre);
            Personagens.push(padre);
            break;
        case "4":
            console.log("\n=== Lista de Personagens ===");
            Personagens.forEach((personagem, index) => {
                console.log(`${index + 1}. ${personagem.nome} - ${personagem.constructor.name}`);
            });
            break;

        case "5":
            if (Personagens.length < 2) {
                console.log("Precisa haver pelo menos 2 personagens para batalhar.");
                break;
            }
            let t1: number = Math.floor(Math.random() * Personagens.length);
            let t2: number = Math.floor(Math.random() * Personagens.length);
            while (t2 === t1) {
                t2 = Math.floor(Math.random() * Personagens.length);
            }
            const p1: Personagem = Personagens[t1]!;
            const p2: Personagem = Personagens[t2]!;
            p1.atacar(p2);
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
