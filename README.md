# Implementação Do Jogo Da Forca

O jogo da forca oferece uma experiência envolvente e educativa, onde os usuários podem desfrutar de desafios de palavras enquanto aprimoram suas habilidades linguísticas. Com uma interface intuitiva e recursos bem projetados, proporciona uma experiência de jogo fluida e imersiva.

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Comportamento Esperado](#comportamento-esperado)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
- [Autor](#autor)
- [Projeto](#projeto)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- [x] Aprenda a jogar Hangman no menu principal.
- [x] Inicie um jogo e escolha uma categoria.
- [x] Jogue Hangman com uma palavra aleatória selecionada dessa categoria.
- [x] Veja a diminuição atual da saúde com base em suposições incorretas de letras.
- [x] Ganhe o jogo se completar a palavra inteira.
- [x] Perde o jogo se fizer oito palpites errados.
- [x] Pause o jogo e escolha continuar, escolha uma nova categoria ou saia.
- [x] Visualize o layout ideal da interface dependendo do tamanho da tela do dispositivo.
- [x] Veja os estados de foco e foco para todos os elementos interativos da página.
- [x] Navegue por todo o jogo apenas usando o teclado.

### Comportamento Esperado

- [x] Escolha uma palavra aleatória da categoria escolhida para iniciar o jogo. Você precisará calcular o espaçamento das palavras e quando quebrar para uma nova linha, pois alguns nomes/títulos são (intencionalmente) longos.
- [x] Se o jogador adivinhar uma letra corretamente, preencha todos os espaços relevantes e desative a letra no teclado.
- [x] Se o jogador adivinhar errado, desative a letra do teclado e reduza o medidor de saúde. O medidor de saúde deve esvaziar após oito palpites errados. O jogador perde neste momento e o menu aparece.
- [x] Selecionar "jogar novamente" no menu inicia um novo jogo com a mesma categoria. Selecionar "nova categoria" navega para a tela "escolher uma categoria". Sair navega de volta ao menu principal.
- [x] Os jogadores nunca devem ver o mesmo nome/título várias vezes se jogarem mais de uma partida em uma visita. Os dados JSON possuem um booleano "selecionado" para ajudá-lo a filtrar as opções já reproduzidas.
- [x] Clicar no menu hambúrguer durante um jogo deve mostrar o menu "pausado".

### Captura de tela

![](./static/assets/images/result-desktop.png)

### Links

- URL do repositório: [Adicione o URL da solução aqui](https://your-solution-url.com)
- URL da solução: [Adicione o URL do site ativo aqui](https://your-live-site-url.com)

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Web Acessibility(wai-arias, role)
- SEO Básico(meta tags, open graph)
- CSS(Flex Box, Grid Layout)
- Responsive Web Design(RWD)
- Mobile-First Workflow
- TypeScript
- [Svelte](https://svelte.dev/docs/introduction)
- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [Vitest](https://vitest.dev/) - para testes unitários

## Autor

- Site - [Samuel Amaro](https://meu-portfolio-topaz-alpha.vercel.app/)
- Frontend Mentor - [@samuel-amaro](https://www.frontendmentor.io/profile/samuel-amaro)

## Projeto

### Criado um projeto

como criar um novo projeto sveltekit

```bash
# cria um novo projeto no diretório atual
npm create svelte@latest

# cria um novo projeto em my-app
npm create svelte@latest my-app
```

### Desenvolvimento

Depois de criar um projeto e instalar dependências com `npm install` (ou `pnpm install` ou `yarn`), inicie um servidor de desenvolvimento:

```bash
npm run dev

# ou inicie o servidor e abra o aplicativo em uma nova aba do navegador
npm run dev ---open
```

### Building

Para criar uma versão de produção do seu aplicativo:

```bash
npm run build
```

Você pode visualizar a compilação de produção com `npm run preview`.

Para implantar seu aplicativo, pode ser necessário instalar um [adaptador](https://kit.svelte.dev/docs/adapters) para seu ambiente de destino.

### Scripts

#### Format, Lint, Check

Formatar o código (Prettier)

```bash
npm run format
```

---

Executar o Lint

```bash
npm run lint
```

---

Executar a verificação do Svelte

```bash
npm run check #or
npm run check:watch
```
