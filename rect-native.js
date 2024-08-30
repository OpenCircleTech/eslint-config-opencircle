module.exports = {
  // 1. Configuração do ambiente de execução do código
  env: {
    // Define o ambiente ECMAScript 2021, permitindo todas as funcionalidades modernas do JavaScript.
    es2021: true,

    // Inclui suporte para variáveis globais usadas pelo Jest, uma biblioteca de testes.
    jest: true,
  },

  // 2. Extensões de configuração para ESLint que serão herdadas
  extends: [
    // Conjunto de regras recomendadas para React, garantindo boas práticas ao usar o React.
    'plugin:react/recommended',

    // Regras recomendadas para o uso correto dos React Hooks, garantindo que eles sejam usados corretamente.
    'plugin:react-hooks/recommended',

    // Extensão padrão do ESLint para JavaScript Standard Style, impondo um estilo de código consistente.
    'standard',

    // Regras recomendadas para TypeScript, adicionando verificações de código específicas para TypeScript.
    'plugin:@typescript-eslint/recommended',

    // Integra o Prettier com o ESLint, desabilitando regras que possam conflitar com a formatação do Prettier.
    'plugin:prettier/recommended',
  ],

  // 3. Especifica qual parser o ESLint deve usar para entender o código TypeScript
  parser: '@typescript-eslint/parser',

  // 4. Configurações adicionais para o parser
  parserOptions: {
    // Configurações relacionadas a funcionalidades do ECMAScript
    ecmaFeatures: {
      // Permite a análise de JSX, que é necessária para projetos React.
      jsx: true
    },

    // Define a versão do ECMAScript a ser usada. 'latest' permite a sintaxe mais recente.
    ecmaVersion: 'latest',

    // Define o tipo de módulo de código. 'module' permite o uso de import/export do ES6.
    sourceType: 'module'
  },

  // 5. Plugins adicionais para adicionar regras específicas ou funcionalidades extras ao ESLint
  plugins: [
    // Plugin que adiciona regras específicas para React.
    'react',

    // Plugin para adicionar regras específicas para TypeScript, melhorando a análise de código.
    '@typescript-eslint'
  ],

  // 6. Regras específicas de linting para o projeto
  rules: {
    // Enforce o uso de tags de fechamento automático quando um componente não possui filhos.
    "react/self-closing-comp": "error",

    // Integra o Prettier ao ESLint e define regras de formatação específicas para o projeto.
    'prettier/prettier': ["error", {
      'printWidth': 80,         // Define a largura máxima da linha.
      'tabWidth': 2,            // Define a largura do tab.
      'singleQuote': true,      // Usa aspas simples para strings.
      'trailingComma': 'all',   // Adiciona uma vírgula ao final de objetos, arrays, etc.
      'arrowParens': 'always',  // Sempre usa parênteses em arrow functions, mesmo com um único parâmetro.
      'semi': false,            // Desabilita o uso de ponto e vírgula no final das linhas.
      'endOfLine': 'auto',      // Configura o final de linha automaticamente para o sistema operacional usado.
    }],

    // Desativa a verificação de 'React' em escopo JSX. Isso é desnecessário no React 17+.
    'react/react-in-jsx-scope': 'off',

    // Desativa a verificação de tipos de propriedades (prop-types), pois o TypeScript já faz a verificação de tipos.
    'react/prop-types': 'off',

    // Regra desativada ou ajustada conforme necessário para propriedades específicas do React Native.
    'react/no-unknown-property': 'off',
  },

  // 7. Configurações adicionais para plugins e análise de código
  settings: {
    react: {
      // Detecta automaticamente a versão do React utilizada no projeto, configurando as regras de acordo.
      version: 'detect',
    },
    'import/parsers': {
      // Define o parser para arquivos TypeScript, garantindo que o ESLint processe corretamente arquivos '.ts', '.tsx' e '.d.ts'.
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },

  // 8. Padrões de arquivos ou diretórios a serem ignorados pelo ESLint durante a análise
  ignorePatterns: [
    // Ignora a pasta 'node_modules' para evitar erros ao analisar pacotes de terceiros.
    'node_modules'
  ]
}