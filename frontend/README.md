# FABLAB — Frontend

Interface web do **FABLAB**, um editor inteligente de games terapêuticos integrado ao sistema MAIA. Permite que terapeutas criem, editem e publiquem jogos personalizados para pacientes/crianças por meio de um fluxo guiado de 10 engenharias.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Variáveis de Ambiente](#variáveis-de-ambiente)

---

## Visão Geral

O frontend do FABLAB oferece uma experiência visual completa para criação de games terapêuticos, cobrindo desde a autenticação via OAuth MAIA até a exportação final do jogo, passando por editor de cenas, gerenciamento de assets, preview interativo e painel de análise tripla.

---

## Funcionalidades

| Módulo | Descrição |
|---|---|
| **Autenticação** | Login via OAuth MAIA e gerenciamento de sessão |
| **Gestão de Projetos** | Dashboard, criação, duplicação e abertura de projetos |
| **Wizard de Criação** | Fluxo guiado com 10 engenharias (Briefing → Exportação) |
| **Editor de Cenas** | Edição de estrutura, narrativa, personagens, visuais e áudio |
| **Asset Manager** | Upload e gerenciamento de assets do jogo |
| **Preview e Testes** | Pré-visualização, console de debug e monitoramento de eventos |
| **Análise Tripla** | Dashboard com dados quantitativos, qualitativos e automatizados |
| **Integração MAIA** | Consumo da REST API do sistema MAIA |
| **Execução do Game** | Modo de reprodução do jogo para pacientes |
| **Administração** | Gestão de usuários, CapiQuest e monitoramento de infraestrutura |

### As 10 Engenharias do Wizard

1. Briefing
2. Personagens
3. Enredo e Narrativa
4. Configuração Metafórica
5. Capítulos e Cenas
6. Design Visual
7. Som e Áudio
8. Storyboard
9. Meta-Nível
10. Exportação do Game

---

## Tecnologias

> A stack será definida na fase de desenvolvimento. Sugestões planejadas:

- **Framework:** React / Vue.js / Angular
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS / SCSS
- **Gerenciador de estado:** Zustand / Pinia / NgRx
- **Comunicação com API:** Axios / Fetch API
- **Build tool:** Vite / Webpack

---

## Pré-requisitos

- Node.js >= 18.x
- npm >= 9.x ou yarn >= 1.22.x

---

## Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd fablab/frontend

# Instale as dependências
npm install
```

---

## Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Gera o build de produção
npm run build

# Executa os testes unitários
npm run test

# Verifica erros de lint
npm run lint
```

---

## Estrutura de Pastas

```
frontend/
├── public/               # Arquivos estáticos públicos
├── src/
│   ├── assets/           # Imagens, fontes e recursos estáticos
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas/rotas da aplicação
│   ├── modules/          # Módulos por funcionalidade (wizard, editor, etc.)
│   ├── services/         # Camada de comunicação com a API
│   ├── store/            # Gerenciamento de estado global
│   ├── hooks/            # Custom hooks (React) ou composables (Vue)
│   ├── utils/            # Funções utilitárias
│   └── types/            # Tipagens TypeScript
├── .env.example          # Exemplo de variáveis de ambiente
├── package.json
└── README.md
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz de `frontend/` baseado no `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_MAIA_OAUTH_URL=https://maia.example.com/oauth
VITE_MAIA_CLIENT_ID=seu_client_id
```

---

## Atores do Sistema

- **Terapeuta** — usuário principal, cria e gerencia os games
- **Paciente / Criança** — executa os games terapêuticos
- **Administrador** — gerencia usuários e infraestrutura
- **Sistema MAIA** — sistema externo integrado via OAuth e REST API
