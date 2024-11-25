import antfu from '@antfu/eslint-config';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';

const eslint = () => {
  /** @type {import('eslint').Linter.Config[]} */
  const configs = [];

  configs.unshift(pluginPrettier);

  configs.unshift(pluginJsxA11y.flatConfigs.recommended);

  configs.unshift({
    name: 'fwt-alias/react',
    plugins: {
      'fwt-alias-react': pluginReact
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...Object.entries(pluginReact.configs.recommended.rules).reduce((acc, [key, value]) => {
        acc[key.replace('react', 'fwt-alias-react')] = value;
        return acc;
      }, {}),
      'fwt-alias-react/prop-types': 'off',
      'fwt-alias-react/display-name': 'off',
      'fwt-alias-react/react-in-jsx-scope': 'off',
      'fwt-alias-react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function'],
          unnamedComponents: 'arrow-function'
        }
      ]
    }
  });

  configs.unshift({ ignores: ['**/*.md'] });

  return antfu(
    { typescript: true, react: true, stylistic: false },
    {
      name: 'fwt-alias/rewrite',
      rules: {
        'antfu/top-level-function': 'off',
        'antfu/if-newline': 'off',
        'antfu/curly': 'off',
        'arrow-body-style': 'warn',
        'perfectionist/sort-imports': 'off',
        'jsonc/sort-keys': 'off',
        'unused-imports/no-unused-imports': 'error',

        'react-hooks/exhaustive-deps': 'warn',

        'test/prefer-lowercase-title': 'off',
        'node/prefer-global/process': 'off',
        'perfectionist/sort-named-imports': 'off',

        'no-console': 'warn'
      }
    },
    ...configs
  );
};

export default eslint();
