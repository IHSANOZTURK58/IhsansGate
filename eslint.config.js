import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                localStorage: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                alert: 'readonly',
                confirm: 'readonly',
                Firebase: 'readonly',
                firebase: 'readonly',
                app: 'readonly',
                db: 'readonly',
                auth: 'readonly',
                WORD_DATA: 'readonly',
                SENTENCE_DATA: 'readonly',
                GRAMMAR_DATA: 'readonly',
                BASIC_VOCAB: 'readonly',
                ttsManager: 'readonly',
                requestAnimationFrame: 'readonly',
                screen: 'readonly',
                fetch: 'readonly',
                Promise: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'no-console': 'off',
            'no-inner-declarations': 'off',
            'no-empty': 'warn',
            'no-constant-condition': 'warn',
            'no-cond-assign': 'warn',
            'no-unused-expressions': 'off',
            'no-self-assign': 'warn',
            'no-ex-assign': 'warn',
            'no-func-assign': 'warn',
            'unicorn/prefer-add-event-listener': 'off'
        },
        ignores: ['**/node_modules/**', '**/dist/**', '**/public/**', '**/assets/**']
    }
];
