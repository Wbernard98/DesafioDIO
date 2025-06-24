🚀 Desafio Classificador de Nível de Herói
✨ Sobre o Projeto
Este projeto simples, desenvolvido em JavaScript, faz parte de um desafio proposto pela Digital Innovation One (DIO). O objetivo é criar um classificador que determina o nível de um herói com base em sua quantidade de experiência (XP). É uma ótima forma de praticar conceitos fundamentais de programação como variáveis, operadores, laços de repetição e estruturas de decisão.

🎯 Objetivo
O programa solicita o nome e a quantidade de XP de um herói. Com base na XP informada, ele classifica o herói em um dos seguintes níveis:

Ferro: XP menor que 1.000
Bronze: XP entre 1.001 e 2.000
Prata: XP entre 2.001 e 5.000
Ouro: XP entre 5.001 e 7.000
Platina: XP entre 7.001 e 8.000
Ascendente: XP entre 8.001 e 9.000
Imortal: XP entre 9.001 e 10.000
Radiante: XP maior ou igual a 10.001
Ao final, uma mensagem é exibida informando o nome do herói e seu respectivo nível.

🛠️ Tecnologias Utilizadas
JavaScript: Linguagem de programação principal.
Node.js: Ambiente de execução para JavaScript (necessário para rodar o script fora do navegador).
prompt-sync: Biblioteca para entrada de dados síncrona via terminal.
VS Code: Editor de código utilizado no desenvolvimento.
📦 Dependências e Instalação
Este projeto utiliza a biblioteca prompt-sync para permitir a interação com o usuário via terminal.

Pré-requisitos:

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.
Um editor de código como o VS Code é recomendado.
Instalando prompt-sync:
Abra o terminal na raiz do seu projeto (no VS Code, você pode usar Ctrl+' ou Cmd+') e execute o comando:

Bash

npm install prompt-sync
⚙️ Como Rodar o Projeto
Clone este repositório:

Bash

git clone https://github.com/seu-usuario/nome-do-seu-repositorio.git
(Lembre-se de substituir seu-usuario e nome-do-seu-repositorio pelos dados do seu repositório no GitHub!)

Navegue até o diretório do projeto:

Bash

cd nome-do-seu-repositorio
Execute o script:
Com o Node.js instalado e a dependência prompt-sync instalada, execute o arquivo JavaScript principal no terminal:

Bash

node index.js
O programa solicitará o nome e a XP do herói, e exibirá a saída diretamente no terminal.

🧑‍💻 Exemplo de Uso e Saída
O programa pedirá duas entradas:

Digite o nome do Herói: Fulano
Digite a quantidade de XP do Herói: 7500
E a saída será:

O Herói de nome Fulano está no nível de Platina
🤝 Contribuição
Sinta-se à vontade para fazer um "fork" deste repositório, propor melhorias ou adicionar novas funcionalidades. Toda contribuição é bem-vinda!

Faça um "fork" do projeto.
Crie uma nova "branch" para sua funcionalidade (git checkout -b feature/sua-nova-funcionalidade).
Faça suas alterações e "commit" (git commit -m 'Adiciona nova funcionalidade').
Faça um "push" para a "branch" (git push origin feature/sua-nova-funcionalidade).
Abra um "Pull Request".
