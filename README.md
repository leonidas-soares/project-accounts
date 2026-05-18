🏦 Sistema de Gerenciamento de Contas
Um sistema de gerenciamento de contas bancárias via CLI desenvolvido com Node.js, criado a partir de um projeto sugerido pelo curso Node.js do Zero a Maestria da udemy — mas expandido com conceitos de arquitetura de software e padrões de projeto além do que foi apresentado em aula.
---
💡 Sobre o Projeto
O curso propôs um projeto simples de gerenciamento de contas. Aproveitei a oportunidade para aplicar conhecimentos que já tinha junto ao que estava sendo ensinado, resultando em um código mais estruturado e mais próximo de um projeto real.
O que o sistema faz
Criar uma conta bancária
Fazer login em uma conta existente
Depositar dinheiro
Sacar dinheiro
Verificar saldo
Visualizar histórico de transações
---
🏗️ Arquitetura e Padrões de Projeto
O projeto vai além de um script simples ao aplicar conceitos reais de arquitetura de software:
Command Pattern — cada operação (depósito, saque, verificar saldo) é encapsulada como uma função isolada com responsabilidade única, registrada em um `commandMap` utilizando `Map`.
Arquitetura em Camadas — separação clara de responsabilidades entre as camadas:
Camada	Responsabilidade
`prompts/`	Entrada do usuário — interações com o Inquirer
`commands/`	Operações de negócio
`service/`	Lógica de negócio e validações
`repository/`	Leitura e escrita de dados
`models/`	Estrutura de dados, schema e factories
`utils/`	Funções genéricas de output e formatação
`constants/`	Valores estáticos e configurações
`enum/`	Conjuntos fechados de opções
---
🛠️ Tecnologias
Node.js — runtime
Inquirer (`@inquirer/prompts`) — prompts interativos no CLI
Chalk — formatação de output no terminal
Zod — validação de schema e modelagem de dados
ESLint — análise estática de código
Prettier — formatação de código
EditorConfig — consistência entre editores
---
📁 Estrutura do Projeto
```
src/
├── auth/
│   └── handleLogin.js
├── commands/
│   └── accountCommands.js
├── constants/
│   └── accountConfig.js
├── enum/
│   ├── menuActionsEnum.js
│   ├── sessionStatesEnum.js
│   └── transactionTypesEnum.js
├── model/
│   └── account.js
├── prompts/
│   ├── accountMenuPrompt.js
│   └── authMenuPrompt.js
├── repository/
│   └── accountRepository.js
├── service/
│   └── accountService.js
├── utils/
│   ├── displayMessage.js
│   ├── handleFile.js
│   ├── handleNumber.js
│   └── message.js
└── index.js
```
---
🚀 Como executar
Requisitos: Node.js v18+
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/project-accounts.git

# Acesse o projeto
cd project-accounts

# Instale as dependências
npm install

# Execute o projeto
npm start
```
---
📌 O que foi aplicado além do curso
Command Pattern com `Map` no lugar de `switch/case`
Schema Zod com validação por campo reutilizada nos prompts do Inquirer
Factory functions como alternativa POE às classes OOP
`Object.freeze` para enums e constantes
Separação entre camadas `service`, `repository` e `commands`
ESLint + Prettier + EditorConfig configurados do zero
---
🔭 Próximos passos
Conforme o curso avança, o plano é evoluir o projeto com:
Camada de tratamento de erros
Integração com banco de dados
Criptografia de senha com bcrypt
Autenticação com JWT
Testes unitários
---
📄 Licença
MIT
