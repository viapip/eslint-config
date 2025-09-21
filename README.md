# ESLint Configuration

This project uses a custom ESLint configuration based on `@antfu/eslint-config`. Below is a comprehensive table of all the rules used:

## General Rules

| Rule                             | Value                                                    | Description                                                                                                     |
| -------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `antfu/consistent-chaining`      | `['error', { allowLeadingPropertyAccess: true }]`        | Enforces consistent chaining styles, allowing leading property access.                                          |
| `antfu/if-newline`               | `['error']`                                              | Enforces a newline after the `if` keyword.                                                                      |
| `antfu/import-dedupe`            | `['error']`                                              | Removes duplicate imports.                                                                                      |
| `arrow-body-style`               | `['error', 'always']`                                    | Requires braces around arrow function bodies.                                                                   |
| `brace-style`                    | `['error', 'stroustrup']`                                | Enforces Stroustrup style for braces.                                                                           |
| `curly`                          | `['error', 'multi-line', 'consistent']`                  | Enforces consistent use of curly braces for multi-line blocks.                                                  |
| `eol-last`                       | `['error', 'always']`                                    | Requires a newline at the end of files.                                                                         |
| `eqeqeq`                         | `['error', 'smart']`                                     | Requires the use of `===` and `!==`, except when comparing with `null`.                                         |
| `logical-assignment-operators`   | `['warn']`                                               | Suggests using logical assignment operators (e.g., `&&=`, `                                                     |     | =`, `??=`). |
| `multiline-ternary`              | `['error', 'always-multiline']`                          | Enforces newlines between operands of ternary expressions if the expression spans multiple lines.               |
| `newline-before-return`          | `['error']`                                              | Requires an empty line before `return` statements.                                                              |
| `newline-per-chained-call`       | `['error', { ignoreChainWithDepth: 1 }]`                 | Requires a newline after each call in a method chain, ignoring single-depth chains.                             |
| `no-console`                     | `['warn', { allow: ['warn', 'error'] }]`                 | Warns about `console` usage, except for `console.warn` and `console.error`.                                     |
| `no-else-return`                 | `['warn']`                                               | Suggests omitting `else` when an `if` block always executes a `return` statement.                               |
| `no-empty-function`              | `['off', { allow: ['arrowFunctions'] }]`                 | Allows empty functions, including arrow functions.                                                              |
| `no-implicit-coercion`           | `['warn']`                                               | Warns against implicit type coercion (e.g., `!!foo`, `+bar`).                                                   |
| `no-param-reassign`              | `['error', { props: false }]`                            | Disallows reassigning function parameters, but allows modifying properties of parameters.                       |
| `no-shadow`                      | `['off', { allow: ['_id', '_count', 'T'] }]`             | Allows variable shadowing, explicitly permitting `_id`, `_count`, and `T`.                                      |
| `no-shadow-restricted-names`     | `['error']`                                              | Disallows shadowing of restricted names (e.g., `undefined`, `NaN`).                                             |
| `no-underscore-dangle`           | `['off', { allow: ['_id', '_count'] }]`                  | Allows use of underscores in identifiers, explicitly permitting `_id` and `_count`.                             |
| `no-unused-expressions`          | `['error', { allowShortCircuit: true }]`                 | Disallows unused expressions, but allows short circuit evaluations (e.g., `a && b()`).                          |
| `no-unused-vars`                 | `['warn', { args: 'none' }]`                             | Warns about unused variables, ignoring function arguments.                                                      |
| `no-use-before-define`           | `['error', { functions: false }]`                        | Disallows use of variables before they are defined, except for function declarations.                           |
| `operator-assignment`            | `['warn']`                                               | Suggests using shorthand assignment operators where possible (e.g., `x += y` instead of `x = x + y`).           |
| `prefer-destructuring`           | `['warn']`                                               | Encourages use of object and array destructuring.                                                               |
| `prefer-object-has-own`          | `['warn']`                                               | Suggests using `Object.hasOwn()` instead of `Object.prototype.hasOwnProperty.call()`.                           |
| `style/array-bracket-newline`    | `['error', { minItems: 3, multiline: true }]`            | Enforces line breaks after opening and before closing array brackets for multiline arrays with 3 or more items. |
| `style/max-statements-per-line`  | `['off']`                                                | Does not limit the number of statements per line.                                                               |
| `style/newline-per-chained-call` | `['error']`                                              | Requires a newline after each call in a method chain.                                                           |
| `style/no-confusing-arrow`       | `['error']`                                              | Disallows arrow functions where they could be confused with comparisons (e.g., `x => a ? b : c`).               |
| `style/type-named-tuple-spacing` | `['error']`                                              | Enforces consistent spacing in named tuple types.                                                               |
| `style/wrap-regex`               | `['error']`                                              | Requires regex literals to be wrapped in parentheses.                                                           |
| `import/order`                   | (complex configuration via `perfectionist/sort-imports`) | Enforces a specific import order (handled by `perfectionist`).                                                  |

## TypeScript-Specific Rules

| Rule                                 | Value                     | Description                                                                                                                  |
| ------------------------------------ | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `ts/adjacent-overload-signatures`    | `['error']`               | Requires adjacent function overload signatures to be grouped together.                                                       |
| `ts/array-type`                      | `['error']`               | Enforces consistent usage of array types (e.g., `T[]` vs `Array<T>`).                                                        |
| `ts/ban-tslint-comment`              | `['error']`               | Disallows `// tslint:` comments.                                                                                             |
| `ts/class-literal-property-style`    | `['error']`               | Enforces consistent style for class literal properties (`get` or `readonly`).                                                |
| `ts/consistent-generic-constructors` | `['error']`               | Enforces consistent usage of generic type parameters in class constructors (`new <T>()` vs `<T>new ()`).                     |
| `ts/consistent-indexed-object-style` | `['error']`               | Enforces consistent usage of indexed object style (`[key: string]: T` vs `{ [key: string]: T }`).                            |
| `ts/consistent-type-assertions`      | `['error']`               | Enforces consistent usage of type assertions (`<T>foo` vs `foo as T`).                                                       |
| `ts/consistent-type-definitions`     | `['off']`                 | Does not enforce consistent usage of `type` vs `interface`.                                                                  |
| `ts/explicit-function-return-type`   | `['off']`                 | Doesn't require explicit return types on functions and class methods.                                                        |
| `ts/no-confusing-non-null-assertion` | `['error']`               | Disallows non-null assertions in locations that may be confusing.                                                            |
| `ts/no-empty-function`               | `['error']`               | Disallows empty functions in TypeScript.                                                                                     |
| `ts/no-empty-interface`              | `['error']`               | Disallows empty interfaces (`interface Foo {}`).                                                                             |
| `ts/no-inferrable-types`             | `['error']`               | Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.                |
| `ts/no-namespace`                    | `off` (inherited default) | Allows the use of TypeScript namespaces (Note: Not explicitly set in config, using inherited default).                       |
| `ts/prefer-for-of`                   | `['error']`               | Prefers `for...of` loop over a standard `for` loop if the index is only used to access the array being iterated.             |
| `ts/prefer-function-type`            | `['error']`               | Prefers function types instead of interfaces with call signatures (`type Foo = () => void` vs `interface Foo { (): void }`). |
| `ts/prefer-namespace-keyword`        | `['error']`               | Requires the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.            |

## Unicorn Plugin Rules

| Rule                                        | Value                                       | Description                                                                                                       |
| ------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `unicorn/better-regex`                      | `['error']`                                 | Improves regexes by making them shorter, consistent, and safer.                                                   |
| `unicorn/catch-error-name`                  | `['error']`                                 | Enforces a specific parameter name (usually `error`) in `catch` clauses.                                          |
| `unicorn/consistent-destructuring`          | `['error']`                                 | Enforces consistent usage of destructuring for object properties and array elements.                              |
| `unicorn/consistent-function-scoping`       | `['error']`                                 | Moves function definitions to the outer-most scope possible if they don't rely on variables from the inner scope. |
| `unicorn/empty-brace-spaces`                | `['error']`                                 | Enforces no spaces between braces in empty blocks (`{}` vs `{ }`).                                                |
| `unicorn/expiring-todo-comments`            | `['error']`                                 | Adds expiration conditions to TODO comments (e.g., `// TODO [YYYY-MM-DD]: Fix this`).                             |
| `unicorn/filename-case`                     | `['error', { cases: { kebabCase: true } }]` | Enforces file names to be in kebab-case.                                                                          |
| `unicorn/no-array-for-each`                 | `['error']`                                 | Prefers `for...of` statements instead of `Array#forEach`.                                                         |
| `unicorn/no-array-method-this-argument`     | `['error']`                                 | Disallows using `this` as the `thisArg` argument in array methods like `map`, `filter`, etc.                      |
| `unicorn/no-array-push-push`                | `['error']`                                 | Enforces combining multiple `Array#push()` calls into one with multiple arguments.                                |
| `unicorn/no-for-loop`                       | `['error']`                                 | Disallows standard `for` loops (e.g., `for (let i = 0; ...)`), preferring `for...of` or other iteration methods.  |
| `unicorn/no-invalid-remove-event-listener`  | `['error']`                                 | Prevents passing the result of `addEventListener` or an incorrect function reference to `removeEventListener`.    |
| `unicorn/no-lonely-if`                      | `['error']`                                 | Disallows `if` statements as the only statement in an `else` block (suggests `else if`).                          |
| `unicorn/no-negation-in-equality-check`     | `['error']`                                 | Disallows negating the expression in equality checks (e.g., `!foo === bar` vs `foo !== bar`).                     |
| `unicorn/no-nested-ternary`                 | `['error']`                                 | Disallows nested ternary expressions for readability.                                                             |
| `unicorn/no-static-only-class`              | `['error']`                                 | Disallows classes that only contain static members.                                                               |
| `unicorn/no-unnecessary-await`              | `['error']`                                 | Disallows `await` expressions on non-Promise values.                                                              |
| `unicorn/no-unreadable-array-destructuring` | `['error']`                                 | Disallows unreadable array destructuring patterns (e.g., using commas to skip multiple elements).                 |
| `unicorn/no-useless-undefined`              | `['error']`                                 | Disallows the use of `undefined` when it's the default value (e.g., `return undefined`).                          |
| `unicorn/prefer-number-properties`          | `['error']`                                 | Prefers `Number` static properties (`Number.isNaN`, `Number.parseInt`) over global ones (`isNaN`, `parseInt`).    |
| `unicorn/prefer-optional-catch-binding`     | `['error']`                                 | Prefers omitting the `catch` binding parameter when it's not used (`catch {}` vs `catch (error) {}`).             |
| `unicorn/template-indent`                   | `['warn', { indent: 2 }]`                   | Enforces proper indentation (2 spaces) for template literals.                                                     |
| `unicorn/text-encoding-identifier-case`     | `['error']`                                 | Enforces consistent case (`utf-8`) for text encoding identifiers.                                                 |

## Perfectionist Plugin Rules (Sorting & Ordering)

| Rule                                       | Value                    | Description                                                  |
| ------------------------------------------ | ------------------------ | ------------------------------------------------------------ |
| `perfectionist/sort-array-includes`        | `error` (complex config) | Enforces sorted arrays in `Array#includes()`.                |
| `perfectionist/sort-classes`               | `error` (complex config) | Enforces sorted class members (properties, methods, etc.).   |
| `perfectionist/sort-exports`               | `error` (complex config) | Enforces sorted export statements.                           |
| `perfectionist/sort-imports`               | `error` (complex config) | Enforces sorted and grouped import statements.               |
| `perfectionist/sort-interfaces`            | `error` (complex config) | Enforces sorted properties within TypeScript interfaces.     |
| `perfectionist/sort-intersection-types`    | `error` (complex config) | Enforces sorted types within TypeScript intersection types.  |
| `perfectionist/sort-objects`               | `error` (complex config) | Enforces sorted keys in object literals.                     |
| `perfectionist/sort-switch-case`           | `error` (complex config) | Enforces sorted `case` clauses in `switch` statements.       |
| `perfectionist/sort-union-types`           | `error` (complex config) | Enforces sorted types within TypeScript union types.         |
| `perfectionist/sort-variable-declarations` | `error` (complex config) | Enforces sorted variable declarations within the same block. |

This configuration provides a comprehensive set of rules to ensure code quality, consistency, and standardized sorting across your project.
