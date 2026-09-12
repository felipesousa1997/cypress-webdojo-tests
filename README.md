# Testes Automatizados Webdojo --- Cypress

## 📋 Sobre o projeto

Este projeto contém uma suíte de **testes automatizados end-to-end
(E2E)** desenvolvida com **Cypress** para validar o funcionamento da
aplicação Webdojo.

A aplicação Webdojo está localizada no mesmo repositório do projeto de
testes. Dessa forma, antes da execução dos testes, é necessário iniciar
a aplicação em ambiente de desenvolvimento.

O projeto tem como objetivo praticar e demonstrar conceitos de automação
de testes web, incluindo:

-   Automação de cenários funcionais;
-   Testes E2E com Cypress;
-   Organização de testes e dados de teste;
-   Uso de fixtures;
-   Criação de comandos customizados;
-   Reutilização de ações;
-   Validação de diferentes comportamentos da aplicação;
-   Execução de testes em modo headless.

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

-   **Cypress** --- framework para automação de testes E2E;
-   **JavaScript** --- linguagem utilizada na implementação dos testes;
-   **Node.js / npm** --- gerenciamento de dependências e execução dos
    scripts;
-   **Webdojo** --- aplicação utilizada como sistema sob teste.

------------------------------------------------------------------------

## 📁 Estrutura do projeto

A estrutura principal do diretório `cypress` está organizada da seguinte
forma:

``` text
cypress/
├── e2e/
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
└── support/
    ├── actions/
    │   └── consultancy.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

### `cypress/e2e/`

Diretório destinado aos **casos de teste E2E**.

Os arquivos dessa pasta contêm os cenários que serão executados pelo
Cypress para validar os comportamentos da aplicação Webdojo.

Exemplos de responsabilidades:

-   Acesso às páginas da aplicação;
-   Preenchimento de formulários;
-   Interação com elementos;
-   Validação de resultados;
-   Execução de fluxos completos de negócio.

### `cypress/fixtures/`

Diretório destinado aos **dados utilizados pelos testes**.

Atualmente, o projeto possui:

  -----------------------------------------------------------------------
  Arquivo                             Finalidade
  ----------------------------------- -----------------------------------
  `cep.json`                          Dados relacionados a CEP utilizados
                                      durante os testes

  `consultancy.json`                  Dados utilizados nos cenários de
                                      consultoria

  `document.pdf`                      Arquivo utilizado em cenários que
                                      envolvem upload/documentos
  -----------------------------------------------------------------------

A utilização de fixtures permite separar os dados de teste da
implementação dos cenários, facilitando a manutenção e reutilização das
informações.

### `cypress/support/`

Contém arquivos de suporte utilizados pelos testes.

#### `actions/consultancy.actions.js`

Arquivo destinado à centralização de **ações relacionadas aos fluxos de
consultoria**.

A separação dessas ações ajuda a evitar duplicação de código e torna os
testes E2E mais legíveis.

#### `commands.js`

Arquivo destinado à definição de **comandos customizados do Cypress**.

Comandos reutilizáveis podem ser criados aqui para encapsular
comportamentos que aparecem em diferentes cenários de teste.

#### `e2e.js`

Arquivo de configuração e inicialização dos testes E2E.

É carregado pelo Cypress antes da execução dos testes e pode ser
utilizado para configurações e comportamentos compartilhados.

#### `utils.js`

Arquivo destinado a **funções utilitárias** utilizadas pelos testes,
permitindo centralizar pequenas operações e regras reutilizáveis.

------------------------------------------------------------------------

## 🚀 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

-   **Node.js**
-   **npm**

Também é necessário ter o projeto da aplicação Webdojo disponível no
mesmo repositório.

------------------------------------------------------------------------

## ▶️ Executando a aplicação Webdojo

Como a aplicação Webdojo está no mesmo repositório dos testes, ela
precisa estar em execução antes da suíte de testes.

No terminal, execute:

``` bash
npm run dev
```

Esse comando inicia a aplicação em ambiente de desenvolvimento.

> **Importante:** mantenha o processo da aplicação em execução enquanto
> os testes Cypress estiverem sendo executados.

------------------------------------------------------------------------

## 🧪 Executando os testes

Com a aplicação Webdojo em execução, abra outro terminal e execute:

``` bash
npm test
```

O script `test` está configurado para executar:

``` bash
npx cypress run
```

A execução ocorre em **modo headless**, permitindo executar a suíte de
testes diretamente pelo terminal.

### Execução direta com Cypress

Também é possível executar diretamente:

``` bash
npx cypress run
```

------------------------------------------------------------------------

## 🔄 Fluxo de execução

O fluxo básico para executar o projeto é:

``` text
1. Instalar dependências
        ↓
2. Iniciar a aplicação Webdojo
        ↓
   npm run dev
        ↓
3. Abrir outro terminal
        ↓
4. Executar os testes
        ↓
   npm test
        ↓
5. Cypress executa os cenários E2E
        ↓
6. Resultado dos testes
```

------------------------------------------------------------------------

## 💻 Instalação e execução do projeto

Caso o projeto esteja sendo executado pela primeira vez, siga os passos
abaixo.

### 1. Clonar o repositório

``` bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acessar o diretório do projeto

``` bash
cd <DIRETORIO_DO_PROJETO>
```

### 3. Instalar as dependências

``` bash
npm install
```

### 4. Iniciar a aplicação Webdojo

``` bash
npm run dev
```

### 5. Em outro terminal, executar os testes

``` bash
npm test
```

------------------------------------------------------------------------

## 🧩 Organização dos testes

A arquitetura do projeto busca separar diferentes responsabilidades:

``` text
Testes E2E
   │
   ├── Cenários de teste
   │
   ├── Fixtures
   │      └── Dados utilizados pelos testes
   │
   ├── Actions
   │      └── Fluxos reutilizáveis
   │
   ├── Commands
   │      └── Comandos customizados do Cypress
   │
   └── Utils
          └── Funções auxiliares
```

Essa organização facilita a **manutenção, reutilização e
escalabilidade** da suíte de testes.

------------------------------------------------------------------------

## 📊 Objetivo da automação

A automação tem como objetivo reduzir a necessidade de execução manual e
aumentar a confiabilidade dos testes de regressão da aplicação Webdojo.

Com a suíte automatizada, é possível executar repetidamente os
principais fluxos da aplicação e identificar rapidamente comportamentos
que deixaram de funcionar após alterações no sistema.

------------------------------------------------------------------------

## ✅ Boas práticas adotadas

Entre as práticas utilizadas no projeto estão:

-   Separação dos dados de teste utilizando `fixtures`;
-   Reutilização de ações;
-   Criação de comandos customizados;
-   Organização dos testes por responsabilidade;
-   Utilização de funções utilitárias;
-   Execução automatizada pelo npm;
-   Execução dos testes em modo headless;
-   Separação entre a aplicação e a suíte de testes dentro do mesmo
    repositório.

------------------------------------------------------------------------

## 📌 Comandos principais

  Comando             Descrição
  ------------------- ---------------------------------------
  `npm install`       Instala as dependências do projeto
  `npm run dev`       Inicia a aplicação Webdojo
  `npm test`          Executa a suíte de testes Cypress
  `npx cypress run`   Executa diretamente os testes Cypress

------------------------------------------------------------------------

## 👨‍💻 Projeto

**Projeto:** Testes Automatizados Webdojo\
**Framework:** Cypress\
**Linguagem:** JavaScript\
**Tipo de teste:** End-to-End (E2E)

------------------------------------------------------------------------

## 📄 Observação

Este projeto possui caráter prático e foi desenvolvido com foco no
aprendizado e aplicação de conceitos de **Quality Assurance (QA),
automação de testes e desenvolvimento de uma suíte de testes E2E com
Cypress**.
