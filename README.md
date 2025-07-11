# BuildZone - Assistente de Meta para Jogos

## Descrição

O **BuildZone** é um assistente inteligente para gamers, focado em fornecer dicas, estratégias, builds e informações atualizadas sobre os principais jogos competitivos, como Valorant, League of Legends e CS:GO.  
Utilizando a API Gemini da Google, o projeto faz perguntas contextualizadas e retorna respostas diretas e objetivas, sempre baseadas no patch mais recente do jogo.

## Funcionalidades

- Interface web responsiva e moderna.
- Consulta à API Gemini para respostas inteligentes e atualizadas.
- Suporte a múltiplos jogos.
- Respostas em Markdown, convertidas para HTML.
- Validação de campos obrigatórios.
- Feedback visual durante o carregamento da resposta.

## Como funciona

1. O usuário informa sua chave de API Gemini.
2. Seleciona o jogo desejado.
3. Digita sua dúvida ou pedido de dica/build.
4. O assistente consulta a API Gemini e exibe a resposta formatada na tela.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [Showdown.js](https://github.com/showdownjs/showdown) para conversão de Markdown em HTML
- API Gemini (Google Generative Language)

## Como rodar o projeto

1. Clone este repositório.
2. Abra o arquivo `src/pages/index.html` em seu navegador.
3. Insira sua API KEY do Gemini, selecione o jogo e faça sua pergunta!

## Estrutura de pastas

```
src/
 ├─ pages/
 │   └─ index.html
 ├─ styles/
 │   └─ style.css
 └─ script/
     └─ script.js
assets/
 └─ bg.jpg
```

## Observações

- É necessário possuir uma API KEY válida da Gemini para utilizar o assistente.
- As respostas são limitadas a 500 caracteres e sempre baseadas no patch atual do jogo.
- O projeto não armazena dados do usuário.

## Licença

Este projeto é apenas para fins educacionais e não possui licença comercial.

---
**Desenvolvido por Claudio Vasconcellos durante o NLW Agents da Rocktseat**
