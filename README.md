# 🚀 Desafio Classificador de Nível de Herói

## ✨ Sobre o Projeto
Este projeto simples, desenvolvido em JavaScript, faz parte de um desafio proposto pela Digital Innovation One (DIO). O objetivo é criar um classificador que determina o nível de um herói com base em sua quantidade de experiência (XP). É uma ótima forma de praticar conceitos fundamentais de programação como variáveis, operadores, laços de repetição e estruturas de decisão.

## 🎯 Objetivo
O programa solicita o nome e a quantidade de XP de um herói. Com base na XP informada, ele classifica o herói em um dos seguintes níveis:

- Ferro: XP menor que 1.000
- Bronze: XP entre 1.001 e 2.000
- Prata: XP entre 2.001 e 5.000
- Ouro: XP entre 5.001 e 7.000
- Platina: XP entre 7.001 e 8.000
- Ascendente: XP entre 8.001 e 9.000
- Imortal: XP entre 9.001 e 10.000
- Radiante: XP maior ou igual a 10.001

Ao final, uma mensagem é exibida informando o nome do herói e seu respectivo nível.

## 🛠️ Tecnologias Utilizadas
- **JavaScript**: Linguagem de programação principal.
- **Node.js**: Ambiente de execução para JavaScript (necessário para rodar o script fora do navegador).
- **prompt-sync**: Biblioteca para entrada de dados síncrona via terminal.
- **VS Code**: Editor de código utilizado no desenvolvimento.

## 📦 Dependências e Instalação
Este projeto utiliza a biblioteca `prompt-sync` para permitir a interação com o usuário via terminal.

### Pré-requisitos:
- Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
- Um editor de código como o VS Code é recomendado.

### Instalando prompt-sync:
Abra o terminal na raiz do seu projeto (no VS Code, você pode usar `Ctrl+'` ou `Cmd+'`) e execute o comando:

```bash
npm install prompt-sync
