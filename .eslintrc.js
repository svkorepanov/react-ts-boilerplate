module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended', // Uses the recomended eslint rules
        'plugin:react/recommended', // Uses the recomended rules from eslint-plugin-react
        'plugin:promise/recommended', // for preferring await instead of .then/ .catch
        'plugin:sonarjs/recommended',
        'plugin:@typescript-eslint/eslint-recommended', // Uses @typescript-eslint/eslint-plugin to disable rules from base set that maight conflict with typescript
        'plugin:@typescript-eslint/recommended', // Uses the recomended tules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking' // Правила TS, требующие инфо о типах
    ],
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    parser: '@typescript-eslint/parser', // Parser for typescript
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: 'tsconfig.json', // Движку нужен проект TS для правил с типами
        tsconfigRootDir: '.'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: [
        'react', // Плагин с наборами правил для React
        'react-hooks',
        'promise',
        'sonarjs',
        '@typescript-eslint' // Плагин с наборами правил для TypeScript
    ],
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off'
            }
        }
    ],
    rules: {
        'indent': [ 'off' ],
        'linebreak-style': [ 'error', 'unix' ],
        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'always' ],
        'no-shadow': ['error', { builtinGlobals: true }], // disallow variable declarations from shadowing variables declared in the outer scope
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-template-curly-in-string': 'error', // disallow template literal placeholder syntax in regular strings
        'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
        'curly': ['error', 'all'], // enforce consistent brace style for all control statements
        'eqeqeq': 'error', // Require === and !==
        'max-classes-per-file': ['error', 1], // enforce a maximum number of classes per file
        'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
        'no-console': 'warn', // disallow the use of console
        'no-else-return': ['error', { allowElseIf: false }], // Disallow return before else
        'no-implicit-coercion': 'error', // Disallow the type conversion with shorter notations
        'no-labels': 'error', // Disallow Labeled Statements
        'no-lone-blocks': 'error', // Disallow Unnecessary Nested Blocks
        'no-multi-spaces': 'error', // Disallow multiple spaces
        'no-new': 'error', // Disallow new For Side Effects
        'no-new-func': 'error', // Disallow Function Constructor
        'no-new-wrappers': 'error', // Disallow Primitive Wrapper Instances
        'no-return-await': 'error', // Disallows unnecessary return await
        'no-self-compare': 'error', // Disallow Self Compare
        'no-sequences': 'error', // Disallow Use of the Comma Operator
        'no-throw-literal': 'error', // Restrict what can be thrown as an exception
        'no-unused-expressions': 'error', // Disallow Unused Expressions
        'no-useless-call': 'error', // Disallow unnecessary .call() and .apply()
        'no-useless-concat': 'error', // Disallow unnecessary concatenation of strings
        'no-useless-return': 'error', // Disallow redundant return statements
        'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
        'radix': 'error', // Require Radix Parameter
        'no-undefined': 'error', // disallow the use of undefined as an identifier
        'array-bracket-newline': ['error', { multiline: true }], // enforce line breaks after opening and before closing array brackets
        'comma-dangle': ['error', 'always-multiline'], // require or disallow trailing commas
        'comma-style': 'error', // Comma style
        'eol-last': 'error', // require or disallow newline at the end of files
        'key-spacing': 'error', // enforce consistent spacing between keys and values in object literal properties
        'keyword-spacing': 'error', // enforce consistent spacing before and after keywords
        'new-parens': 'error', // require parentheses when invoking a constructor with no arguments
        'no-bitwise': 'warn', // disallow bitwise operators
        'no-lonely-if': 'warn', // disallow if statements as the only statement in else blocks
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // disallow multiple empty lines
        'no-nested-ternary': 'error', // disallow nested ternary expressions
        'no-new-object': 'error', // disallow Object constructor
        'no-tabs': 'error', // disallow all tabs
        'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of line
        'no-unneeded-ternary': 'error', // disallow ternary operators when simpler alternatives exist
        'no-whitespace-before-property': 'error', // disallow whitespace before properties
        'object-curly-newline': 'error', // enforce consistent line breaks inside braces
        'object-curly-spacing': ['error', 'always'], // enforce consistent spacing inside braces
        'semi-spacing': 'error', // enforce consistent spacing before and after semicolons
        'space-before-blocks': 'error', // enforce consistent spacing before blocks
        'space-before-function-paren': [
            'error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ], // enforce consistent spacing before function definition opening parenthesis
        'space-in-parens': 'error', // enforce consistent spacing inside parentheses
        'space-infix-ops': 'error', // require spacing around infix operators
        'space-unary-ops': 'error', // enforce consistent spacing before or after unary operators
        'spaced-comment': ['error', 'always'], // enforce consistent spacing after the // or /* in a comment
        'switch-colon-spacing': 'error', // enforce spacing around colons of switch statements
        'arrow-body-style': ['error', 'always'], // require braces around arrow function bodies
        'arrow-parens': ['error', 'always'], // require parentheses around arrow function arguments
        'generator-star-spacing': ['error', 'after'], // enforce consistent spacing around * operators in generator functions
        'no-confusing-arrow': 'error', // disallow arrow functions where they could be confused with comparisons
        'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals
        'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
        'object-shorthand': ['error', 'always'], // require or disallow method and property shorthand syntax for object literals
        'prefer-arrow-callback': 'warn', // require using arrow functions for callbacks
        'prefer-destructuring': 'error', // require destructuring from arrays and/or objects
        'rest-spread-spacing': ['error', 'never'], // enforce spacing between rest and spread operators and their expressions
        // 'sort-imports': 'error', // enforce sorted import declarations within modules
        'template-curly-spacing': 'error', // require or disallow spacing around embedded expressions of template strings

        'promise/prefer-await-to-then': 'error', // prefer await to then() for reading Promise values

        '@typescript-eslint/no-extra-parens': ['error'], // Disallow unnecessary parentheses
        '@typescript-eslint/semi': ['error'], // Require or disallow semicolons instead of ASI
        '@typescript-eslint/member-delimiter-style': ['error'], // Require a specific member delimiter style for interfaces and type literals
        '@typescript-eslint/member-ordering': 'warn', // Require a consistent member declaration order
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                'ignoreNumericLiteralTypes': true,
				'ignoreEnums': true,
				'enforceConst': true,
				'ignoreReadonlyClassProperties': true,
				'ignore': [0, 24, 60, 1000]
            }
        ], // Disallows magic numbers
        '@typescript-eslint/brace-style': ['error', '1tbs'], // Enforce consistent brace style for blocks
        '@typescript-eslint/indent': ['error', 4, { 'SwitchCase': 1 }], // Enforce consistent indentation
        '@typescript-eslint/quotes': ['error', 'single', { 'avoidEscape': true }], // Enforce the consistent use of either backticks, double, or single quotes
        '@typescript-eslint/func-call-spacing': ['error', 'never'], // Require or disallow spacing between function identifiers and their invocations
        '@typescript-eslint/no-useless-constructor': 'error', // Disallow unnecessary constructors
        '@typescript-eslint/prefer-for-of': 'warn', // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
        '@typescript-eslint/no-parameter-properties': 'error', // Disallow the use of parameter properties in class constructors
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn', // Warns if an explicitly specified type argument is the default for that type parameter
        '@typescript-eslint/prefer-function-type': 'warn', // Use function types instead of interfaces with call signatures
        '@typescript-eslint/prefer-readonly': 'warn', // Requires that private members are marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': ['error', { 'properties': 'always' }],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_$' }],

        'react/no-access-state-in-setstate': 'error', // Prevent using this.state inside this.setState
        'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
        'react/no-multi-comp': 'error', // Prevent multiple component definition per file
        'react/no-this-in-sfc': 'error', // Prevent using this in stateless functional components
        'react/prefer-stateless-function': 'error', // Enforce stateless React Components to be written as a pure function
        'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx'] }],
        'react/jsx-no-bind': 'error', // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-no-useless-fragment': 'error', // Disallow unnecessary fragments,
        'react/jsx-pascal-case': 'error', // Enforce PascalCase for user-defined JSX components

        'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
    }
}