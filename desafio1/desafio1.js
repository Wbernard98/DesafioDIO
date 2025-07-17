/* Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 
 
 
Bons estudos 😉*/

const PromptSync = require("prompt-sync");
const prompt = PromptSync();

let nome = prompt("Digite o nome do herói: ")
let quantidadeDeExperiencia = Number(prompt("digite sua quantidade de experiencia: "))
let nivelHeroi

    if (quantidadeDeExperiencia <=1000){
        nivelHeroi = "Ferro"
    }else if(quantidadeDeExperiencia>1000 && quantidadeDeExperiencia <=2000){
        nivelHeroi = "Bronze"
    }else if(quantidadeDeExperiencia >=2001 && quantidadeDeExperiencia <=5000){
        nivelHeroi = "Prata"
    }else if(quantidadeDeExperiencia >=5001 && quantidadeDeExperiencia <=7000){
        nivelHeroi = "Ouro"
    }else if(quantidadeDeExperiencia >= 7001 && quantidadeDeExperiencia <=8000){
        nivelHeroi = "Platina"
    }else if(quantidadeDeExperiencia >=8001 && quantidadeDeExperiencia <=9000){
        nivelHeroi = "Platina"
    }else if(quantidadeDeExperiencia>= 9001 && quantidadeDeExperiencia <10000){
        nivelHeroi = "Radiante"
    }else {
        nivelHeroi = "Radiante"
    }
    console.log(`O heroi de nome ${nome} está no nivel de ${nivelHeroi}`)

