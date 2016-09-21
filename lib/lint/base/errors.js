module.exports = {
  rules: {
    // require trailing commas in multiline object literals
    // 数组和对象键值对最后一个逗号，
    // never参数：不能带末尾的逗号,
    // always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    // 'comma-dangle': [2, 'always-multiline'],

    // disallow assignment in conditional expressions
    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': [2, 'always'],

    // disallow use of console
    // 禁止使用console
    // 'no-console': 1,

    // disallow use of constant expressions in conditions
    // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-constant-condition': 1,

    // disallow control characters in regular expressions
    // 禁止在正则表达式中使用控制符
    'no-control-regex': 2,

    // disallow use of debugger
    // 禁止使用debugger语句
    'no-debugger': 2,

    // disallow duplicate arguments in functions
    // 函数参数禁止重名
    'no-dupe-args': 2,

    // disallow duplicate keys when creating object literals
    // 在创建对象字面量时不允许键重复
    'no-dupe-keys': 2,

    // disallow a duplicate case label.
    // 在switch语句中禁止重复的case
    'no-duplicate-case': 2,

    // disallow empty statements
    // 代码块的内容不能为空，禁止空代码块
    'no-empty': 2,

    // disallow the use of empty character classes in regular expressions
    // 正则表达式的内容不能为空，禁止使用不匹配任何字符串的正则表达式
    'no-empty-character-class': 2,

    // disallow assigning to the exception in a catch block
    // 禁止对catch语句中的异常进行赋值
    'no-ex-assign': 2,

    // disallow double-negation boolean casts in a boolean context
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    // 禁止不必要的bool转换
    // 'no-extra-boolean-cast': 2,

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    // 禁止使用多余的圆括号
    // 'no-extra-parens': [0, 'all', {
    //   conditionalAssign: true,
    //   nestedBinaryExpressions: false,
    //   returnAssign: false,
    // }],

    // disallow unnecessary semicolons
    // 禁止多余的冒号
    // 'no-extra-semi': 2,

    // disallow overwriting functions written as function declarations
    // 禁止重复的函数声明
    'no-func-assign': 2,

    // disallow function or variable declarations in nested blocks
    // 禁止在块语句中声明变量或函数
    // 'no-inner-declarations': 2,

    // disallow invalid regular expression strings in the RegExp constructor
    // 禁止使用无效的正则语句
    'no-invalid-regexp': 2,

    // disallow irregular whitespace outside of strings and comments
    // 禁止使用不合法或者不规则的空白符
    // 'no-irregular-whitespace': 2,

    // disallow negation of the left operand of an in expression
    // TODO: deprecated in favor of no-unsafe-negation
    // 在in操作符左边的操作项不能用! 例如这样写不对的：if ( !a in b) { //dosomething }
    // 'no-negated-in-lhs': 0,

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // 禁止把全局对象当函数调用，比如下面写法错误的：Math(), JSON()
    'no-obj-calls': 2,

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    // 禁止直接使用object.prototypes内置方法，推荐使用var hasBarProperty = {}.hasOwnProperty.call(foo, "bar");
    // 'no-prototype-builtins': 2,

    // disallow multiple spaces in a regular expression literal
    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-regex-spaces': 2,

    // disallow sparse arrays
    // 禁止稀疏数组，清除多余的逗号申明  比如[1,,2]
    'no-sparse-arrays': 2,

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    // TODO: enable, semver-major
    // 普通字符串用禁止插入模板变量
    // 禁止使用"Hello ${name}!";推荐使用`Hello ${name}!`;
    'no-template-curly-in-string': 0,

    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    // 为了保证两行不相关的代码不会意外的被当做一行代码来解析
    // 'no-unexpected-multiline': 2,

    // disallow unreachable statements after a return, throw, continue, or break statement
    // 禁止有执行不到的代码
    'no-unreachable': 2,

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    // finally中，禁止使用 return/throw/break/continue
    'no-unsafe-finally': 2,

    // disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    // 不允许否定关系操作符的左操作数 e.g. incorrect: !key in object  correct: !(key in object)
    // 'no-unsafe-negation': 2,

    // disallow comparisons with the value NaN
    // 禁止和NaN作比较,推荐使用isNaN方法
    'use-isnan': 2,

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    // 用来检测JSDoc是否完整和合法
    'valid-jsdoc': 0,

    // ensure that the results of typeof are compared against a valid string
    // typeof操作符返回的结果会是 "undefined",  "object",  "boolean", "number", "string" 和 "function"之一。
    // 保证typeof 操作符返回的结果必须和上面六个字符串作比较
    'valid-typeof': 2
  }
};
