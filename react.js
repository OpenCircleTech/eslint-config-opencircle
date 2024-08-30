module.exports = {
  // 1. Configura o ambiente onde o código será executado
  env: {
    browser: true,   // Suporta variáveis globais específicas de navegador, como 'window'.
    es2021: true,    // Permite a sintaxe do ECMAScript 2021.
    jest: true,      // Suporta variáveis globais específicas do Jest, um framework de testes.
  },

  // 2. Extensões de configuração que o ESLint deve herdar e usar
  extends: [
    'plugin:react/recommended',           // Configuração recomendada para React.
    'plugin:react-hooks/recommended',     // Regras recomendadas para garantir o uso correto dos React Hooks.
    'standard',                           // Segue o padrão de estilo de código JavaScript Standard Style.
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para o TypeScript.
    'plugin:prettier/recommended',        // Integração recomendada do Prettier com ESLint.
  ],

  // 3. Parser que o ESLint deve usar para analisar o código
  parser: '@typescript-eslint/parser',    // Utiliza o parser TypeScript para que o ESLint entenda a sintaxe TypeScript.

  // 4. Configurações de parsing para o parser selecionado
  parserOptions: {
    ecmaFeatures: {
      jsx: true  // Permite o uso de JSX, útil para projetos React.
    },
    ecmaVersion: 'latest', // Permite o uso da sintaxe moderna do ECMAScript.
    sourceType: 'module'   // Permite o uso de imports do ES6.
  },

  // 5. Plugins adicionais para fornecer regras específicas ou funcionalidades adicionais
  plugins: [
    'react',              // Plugin para adicionar regras específicas para React.
    'jsx-a11y',           // Plugin para verificar acessibilidade em componentes JSX.
    '@typescript-eslint'  // Plugin para adicionar regras específicas para TypeScript.
  ],

  // 6. Regras específicas que sobrescrevem regras padrão ou definem novas regras
  rules: {
    "react/self-closing-comp": "error", // Força o uso de tags de fechamento automático quando possível (<Component />).
    'prettier/prettier': ["error", {    // Integra o Prettier ao ESLint e define regras de formatação.
      'printWidth': 80,                 // Largura máxima de linha.
      'tabWidth': 2,                    // Largura do tab.
      'singleQuote': true,              // Usar aspas simples em vez de duplas.
      'trailingComma': 'all',           // Adicionar vírgula final em listas.
      'arrowParens': 'always',          // Sempre usar parênteses em arrow functions.
      'semi': false,                    // Não usar ponto e vírgula ao final de uma linha.
      'endOfLine': 'auto',              // Mantém o final de linha automaticamente conforme o sistema operacional.
    }],
    'react/react-in-jsx-scope': 'off',  // Desativa a necessidade de importar 'React' ao usar JSX (não necessário no React 17+).
    'react/prop-types': 'off',          // Desativa a verificação de tipos das props (relevante para TypeScript).
    'jsx-a11y/alt-text': [              // Verifica o uso correto de atributos 'alt' para imagens para acessibilidade.
      'warn',
      {
        elements: ['img'],              // Aplica a regra a elementos 'img'.
        img: ['Image'],                 // Aplicável a componentes 'Image'.
      },
    ],
    'jsx-a11y/aria-props': 'warn',      // Verifica o uso correto de propriedades ARIA.
    'jsx-a11y/aria-proptypes': 'warn',  // Verifica os tipos das propriedades ARIA.
    'jsx-a11y/aria-unsupported-elements': 'warn', // Verifica se elementos que não suportam ARIA não a usam.
    'jsx-a11y/role-has-required-aria-props': 'warn', // Verifica se as roles possuem os ARIA props requeridos.
    'jsx-a11y/role-supports-aria-props': 'warn', // Verifica se a role suporta o ARIA props usados.
    'react/no-unknown-property': 'error', // Erro ao usar propriedades desconhecidas em JSX.
  },

  // 7. Configurações adicionais para o ambiente React e o parser de importação
  settings: {
    react: {
      version: 'detect',  // Detecta automaticamente a versão do React instalada no projeto.
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'], // Configura o parser para arquivos TypeScript.
    },
  },

  // 8. Padrões de arquivo ou diretórios a serem ignorados pelo ESLint
  ignorePatterns: [
    'node_modules'  // Ignora a pasta 'node_modules' durante o linting.
  ]
}