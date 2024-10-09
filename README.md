# Desafio de Apresentação Pessoal - Frontend Fusion

Bem-vindo ao desafio de apresentação pessoal do processo seletivo do projeto **Frontend Fusion** para a vaga de **Desenvolvedor React Júnior**. Este desafio foi criado para avaliar minhas habilidades em desenvolvimento com React e minha capacidade de criar uma página de apresentação pessoal.

## Visão Geral

O objetivo do desafio foi construir uma página de apresentação pessoal usando **React** com foco em responsividade e estilização. Utilizamos **Tailwind CSS** para simplificar o processo de estilização e garantir um design moderno e responsivo.

## Funcionalidades

1. **Header com Imagem e Texto**:
   - O header exibe meu nome e título ("Arthur Vieira" e "Software Developer") de forma destacada.
   - O fundo da página contém uma imagem personalizada.
   - Em telas maiores (a partir de 768px), o layout muda, colocando o texto e a imagem lado a lado, com o texto à esquerda e a imagem à direita, em formato de quadro com bordas arredondadas e sombra.

2. **Responsividade**:
   - O layout foi projetado para ser totalmente responsivo em diferentes tamanhos de tela, mas sem alterar o comportamento abaixo de 768px.
   - A partir de 768px, a imagem é removida do fundo e colocada ao lado do texto, com bordas arredondadas e sombra definida para criar um efeito de "quadro".

3. **Estilização**:
   - Foi utilizada a biblioteca **Tailwind CSS** para agilizar o processo de estilização, garantindo uma interface limpa e moderna.
   - Em telas pequenas, o layout permanece simples e empilhado, com a imagem no fundo.
   - Em telas maiores, a imagem é exibida separadamente e o texto é ajustado para maior destaque.

## Como Executar

1. Clone o repositório:

   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:
    
    cd nome-do-repositorio

3. Instale as dependências:

    npm install

4. Execute o projeto localmente:
    
    npm run dev

5. Abra o navegador e acesse:

    http://localhost:5173 (ou o endereço sugerido pelo seu terminal).
    
    Obersevação: Algums softwares como Discord, Teams, Zoom podem está utilizando a mesma porta no localhost. Caso isso ocorra, sugiro finalizar a tarefa correspondente a estes programas no gerenciador de tarefas e voltar a executar o acesso.

## Tecnologias Utilizadas

-React: Biblioteca JavaScript para construção de interfaces de usuário.
-Vite: Ferramenta de build para desenvolvimento rápido de front-end.
-Tailwind CSS: Framework de CSS utilitário para estilização rápida e responsiva.

## Estrutura de Arquivos

A estrutura do projeto segue uma organização básica:
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── images/
│   │   └── arthur-portifolio.png
│   └── App.jsx
├── package.json
└── tailwind.config.js

-Header.jsx: Componente que contém o header com o layout responsivo.
-arthur-portifolio.png: Imagem de apresentação usada no layout.
-tailwind.config.js: Configuração do Tailwind CSS.

## Conclusão

Esse projeto demonstra minha capacidade de criar uma página de apresentação pessoal utilizando React e Tailwind CSS, focando em boas práticas de desenvolvimento front-end e responsividade. Espero que tenha sido de acordo com os critérios exigidos pelo desafio!

Autor: Arthur Vieira

Esse `README.md` está claro e direto, explicando o projeto e as tecnologias utilizadas, além de oferecer instruções para rodar o projeto localmente.

Obrigado! 🚀📚💻