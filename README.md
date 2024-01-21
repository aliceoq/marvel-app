# Marvel APP

Teste a aplicação [aqui](https://marvel-app-udn3.onrender.com/) ou execute localmente.

## Funcionalidades

- Uso da [Marvel API](https://developer.marvel.com/docs)
- **Armazenamento das chaves** de API nos cookies.
- **Tema claro e escuro**, com a prefêrencia salva nos cookies.
- Listagem de **personagens**, **quadrinhos** e **criadores** com  paginação.
- Busca por nome nas páginas de listagem.
- **Página de detalhamento** com título, imagem, descrição e páginas **relacionadas.**
- Página de componentes, apresentando todos os componentes utilizados.

## Screenshots

![Tela de personagens](/images/ss1.png)
![Tela de quadrinho individual](/images/ss2.png)
![Tela de quadrinhos](/images/ss3.png)

## Documentação

A estrutura do código segue o seguinte formato:
```
marvel-app/
|-- public/
|   |-- fonts /
|   |-- Marvel_Logo.png
|   |-- favicon.ico
|-- src/
|   |-- components/
|   |   |-- TextInput/
|   |   |   |-- index.tsx
|   |   |   |-- styles.ts
|   |-- pages/
|   |   |-- Listing/
|   |   |   |-- ListingPage.tsx
|   |   |   |-- styles.ts
|   |   |-- styles.ts
|   |-- redux/
|   |   |-- store.ts
|   |   |-- themeSlice.ts
|   |   |-- userSlice.ts
|   |-- services/
|   |   |-- api.ts
|   |-- types/
|   |   |-- index.ts
|   |-- utils/
|   |   |-- theme.ts
|   |-- App.tsx
|   |-- main.tsx
|   |-- index.js
|   |-- index.css
|   |-- Router.tsx
|   |-- theme.ts
|-- .gitignore
|-- package.json
|-- README.md
```

### 📂 components

Nesse diretório estão todos os componentes genéricos criados, eles foram criados utilizando `styled-components` e fazem uso do tema claro e escuro definido pela aplicação.

### 📂 pages

Neste diretório estão os componenters das páginas da aplicação, inclui também elementos de layout, que não possuem path associado. Além disso, também contém arquivos de estilo associados às páginas.

- ListingPage - página para listagem, é a mesma para todos os tipos
- CreatorPage, CharacterPage, ComicPage - páginas de item individual
- Auth - página de home, possui apenas o form para inserção das API keys.
- Layout - define o layout das páginas internas
- AuthWrapper - evita que um usuário que não inseriu as API keys consiga visualizar as páginas de listagem
- Components - página que mostra todos os componentes

### 📂 redux

Neste diretório estão todos os arquivos associados ao uso do redux, a `store`, a `userSlice` e `themeSlice`, usados para manter os estados das API keys e do tema selecionado, que podem ser utilizados em diferentes componentes, foi utilizado o `@reduxjs/toolkit`.

### 📂 services

Neste diretório está o arquivo `api.ts`, que contém as configurações do `Axios`, função generalizada para requests e configuração do `interceptor` que adiciona as API keys. 

### 📂 types e utils

Contém tipos e funções utilizadas na aplicação.

### Router

As rotas definitas para aplicação são:
- /: rota que apresenta o componente de autenticação
- /characters, /characters/page/:page - páginas de listagem dos personagens
- /comics, /comics/page/:page - páginas de listagem dos quadrinhos
- /creators, /creators/page/:page - páginas de listagem dos criadores
- /characters/:id - página de personagem individual
- /comics/:id - página de quadrinho individual
- /creators/:id: - página de personagem individual
- /components - página de apresentação dos componentes

### Queries

Para a realização das queries foi utilizada a biblioteca `@tanstack/react-query`. A função padrão de query é definida no arquivo `App.ts`, de forma que só seja necessário passar as QueryKeys adequadas quando for realizar a query em alguma página.

```typescript
  const defaultQueryFn = ({
    queryKey,
  }: {
    queryKey: QueryKey | (Method | string | AxiosRequestConfig<any>)[];
  }): void | Promise<any> => {
    if (!queryKey || !queryKey.length) return;

    return httpRequest(queryKey);
  };

```

A função httpRequest é definida em `/services/api.ts`.

## Como executar a aplicação

### 🔎 Pré-requisitos

Antes de executar o projeto, você deve ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
- [Node.js](https://nodejs.org/pt-br/download/package-manager/)

### 🔨 Clonando o repositório

```
git clone https://github.com/aliceoq/marvel-app.git
```

### 🔎 Instalando as dependências

```bash
yarn
```

### 🏃‍♂️ Executando

```
yarn dev
```

### 🚧 Build

The build will generate the /dist folder with the build files.

```
yarn build
```

E para visualizar o resultado do build rode o comando de preview:

```
yarn preview
```