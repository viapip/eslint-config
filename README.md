# ESLint Configuration

This project uses a custom ESLint configuration based on `@antfu/eslint-config`. Below is a comprehensive table of all the rules used:

## General Rules

| Rule | Value | Description |
|------|-------|-------------|
| `no-empty-function` | `off` | Allows empty functions |
| `no-unused-vars` | `off` | Disabled in favor of `unused-imports/no-unused-vars` |
| `arrow-body-style` | `['error', 'as-needed']` | Enforces concise arrow function bodies when possible |
| `unused-imports/no-unused-vars` | `warn` | Warns about unused variables |
| `eol-last` | `['error', 'always']` | Requires newline at the end of files |
| `no-else-return` | `warn` | Suggests omitting `else` when an `if` block always executes a `return` statement |
| `logical-assignment-operators` | `warn` | Encourages use of logical assignment operators |
| `no-implicit-coercion` | `warn` | Warns against implicit type coercion |
| `operator-assignment` | `warn` | Suggests using shorthand operators where possible |
| `prefer-destructuring` | `warn` | Encourages use of object and array destructuring |
| `prefer-object-has-own` | `warn` | Suggests using `Object.hasOwn()` instead of `Object.prototype.hasOwnProperty.call()` |
| `no-console` | `['warn', { allow: ['debug'] }]` | Warns about `console` usage, except for `console.debug` |
| `no-use-before-define` | `['error', { functions: false }]` | Disallows use of variables before they are defined, except for functions |
| `no-param-reassign` | `['error', { props: false }]` | Disallows reassigning function parameters, but allows modifying properties |
| `no-underscore-dangle` | `off` | Allows use of underscores in identifiers |
| `no-shadow` | `off` | Allows variable shadowing |
| `no-unused-expressions` | `['error', { allowShortCircuit: true }]` | Disallows unused expressions, but allows short circuit evaluations |
| `no-shadow-restricted-names` | `error` | Disallows shadowing of restricted names |
| `curly` | `['error', 'multi-line', 'consistent']` | Enforces consistent use of curly braces |
| `newline-before-return` | `error` | Requires an empty line before `return` statements |
| `newline-per-chained-call` | `['error', { ignoreChainWithDepth: 1 }]` | Requires a newline after each call in a method chain |
| `multiline-ternary` | `['error', 'always-multiline']` | Enforces newlines between operands of ternary expressions if the expression spans multiple lines |
| `brace-style` | `['error', 'stroustrup']` | Enforces Stroustrup style for braces |
| `eqeqeq` | `['error', 'smart']` | Requires the use of `===` and `!==`, except when comparing with `null` |
| `antfu/if-newline` | `error` | Enforces newline after `if` statements |
| `style/no-confusing-arrow` | `error` | Disallows arrow functions where they could be confused with comparisons |
| `style/newline-per-chained-call` | `error` | Requires a newline after each call in a method chain |
| `style/wrap-regex` | `error` | Requires regex literals to be wrapped in parentheses |
| `style/type-named-tuple-spacing` | `error` | Enforces consistent spacing in named tuple types |
| `style/max-statements-per-line` | `['error', { max: 80 }]` | Limits the number of statements per line |
| `style/array-bracket-newline` | `['error', { multiline: true }]` | Enforces line breaks after opening and before closing array brackets for multiline arrays |
| `import/order` | (complex configuration) | Enforces a specific import order |

## TypeScript-Specific Rules

| Rule | Value | Description |
|------|-------|-------------|
| `ts/no-namespace` | `off` | Allows the use of TypeScript namespaces |
| `ts/explicit-function-return-type` | `off` | Doesn't require explicit return types on functions |
| `ts/adjacent-overload-signatures` | `error` | Requires adjacent function overload signatures |
| `ts/array-type` | `error` | Enforces consistent usage of array types |
| `ts/ban-tslint-comment` | `error` | Disallows `// tslint:` comments |
| `ts/class-literal-property-style` | `error` | Enforces consistent style for class literal properties |
| `ts/consistent-generic-constructors` | `error` | Enforces consistent usage of generic type parameters in class constructors |
| `ts/consistent-indexed-object-style` | `error` | Enforces consistent usage of indexed object style |
| `ts/consistent-type-assertions` | `error` | Enforces consistent usage of type assertions |
| `ts/consistent-type-definitions` | `off` | Doesn't enforce consistent usage of `type` vs `interface` |
| `ts/no-confusing-non-null-assertion` | `error` | Disallows confusing non-null assertions |
| `ts/no-empty-function` | `error` | Disallows empty functions in TypeScript |
| `ts/no-empty-interface` | `error` | Disallows empty interfaces |
| `ts/no-inferrable-types` | `error` | Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean |
| `ts/prefer-for-of` | `error` | Prefers `for...of` loop over a standard `for` loop if the index is only used to access the array being iterated |
| `ts/prefer-function-type` | `error` | Prefers function types instead of interfaces with call signatures |
| `ts/prefer-namespace-keyword` | `error` | Requires the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules |

## Unicorn Plugin Rules

| Rule | Value | Description |
|------|-------|-------------|
| `unicorn/better-regex` | `error` | Improves regexes by making them shorter, consistent, and safer |
| `unicorn/no-array-for-each` | `error` | Prefers `for...of` statements instead of `Array#forEach` |
| `unicorn/no-array-method-this-argument` | `error` | Disallows using `this` as an argument in array methods |
| `unicorn/no-array-push-push` | `error` | Enforces combining multiple `Array#push()` into one call |
| `unicorn/no-for-loop` | `error` | Disallows `for` loops in favor of other loop types |
| `unicorn/no-invalid-remove-event-listener` | `error` | Prevents passing wrong function to `removeEventListener` |
| `unicorn/no-lonely-if` | `error` | Disallows `if` statements as the only statement in `else` blocks |
| `unicorn/no-negation-in-equality-check` | `error` | Disallows negation in equality checks |
| `unicorn/no-nested-ternary` | `error` | Disallows nested ternary expressions |
| `unicorn/no-static-only-class` | `error` | Disallows classes with only static members |
| `unicorn/no-unreadable-array-destructuring` | `error` | Disallows unreadable array destructuring |
| `unicorn/prefer-number-properties` | `error` | Prefers `Number` static properties over global ones |
| `unicorn/prefer-optional-catch-binding` | `error` | Prefers omitting the `catch` binding parameter |
| `unicorn/text-encoding-identifier-case` | `error` | Enforces consistent case for text encoding identifiers |
| `unicorn/catch-error-name` | `error` | Enforces a specific parameter name in catch clauses |
| `unicorn/consistent-destructuring` | `error` | Enforces consistent usage of destructuring |
| `unicorn/empty-brace-spaces` | `error` | Enforces no spaces between braces |
| `unicorn/expiring-todo-comments` | `error` | Adds expiration conditions to TODO comments |
| `unicorn/no-unnecessary-await` | `error` | Disallows awaiting non-promise values |
| `unicorn/no-useless-undefined` | `error` | Disallows useless `undefined` |
| `unicorn/consistent-function-scoping` | `warn` | Moves functions within blocks to the outer scope |
| `unicorn/template-indent` | `['warn', { indent: 2 }]` | Enforces proper indentation for template literals |

This configuration provides a comprehensive set of rules to ensure code quality and consistency across your project.
