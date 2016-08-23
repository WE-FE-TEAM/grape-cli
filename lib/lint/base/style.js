module.exports = {
  rules: {
    // enforce spacing inside array brackets
    // 用数组字面量定义数组时数组元素前后是否加空格，
    // never参数： 数组元素前后不能带空格，
    // always参数：数组元素前后必须留空格
    'array-bracket-spacing': [2, 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    // 在单行代码块中，代码块前后是否需要留空格
    // always参数：默认，前后必须留空格
    // never参数： 前后不能带空格
    'block-spacing': [2, 'always'],

    // enforce one true brace style
    // 大括号的样式，比如下面的大括号语法采用『1tbs』,允许单行样式
    'brace-style': [2, '1tbs', { allowSingleLine: true }],

    // require camel case names
    // 强制使用驼峰命名
    camelcase: [2, { properties: 'never' }],

    // enforce spacing before and after comma
    // 规定了逗号前后的空白，默认配置规定逗号前面没有空白，而逗号后面需要留空白
    'comma-spacing': [2, { before: false, after: true }],

    // enforce one true comma style
    // 规定了逗号放的位置，默认配置逗号应该放在行末，如果设置为first，逗号就应放在行首
    'comma-style': [2, 'last'],

    // disallow padding inside computed properties
    // 是否在对象的动态属性（computed properties： ES6引入）中添加空白，默认配置不添加空白
    'computed-property-spacing': [2, 'never'],

    // enforces consistent naming when capturing the current execution context
    // 统一this的别名（this赋值的变量名）保证整个应用程序代码的统一。
    // 如果一个变量被指定为this对象的别名，那么这个变量就不能够用来赋其他值，只能够用来保存this对象。
    // 如果this对象明确被赋值给了一个变量，那么这个变量应该是配置中指定的那个变量名。
    'consistent-this': 0,

    // enforce newline at the end of file, with no multiple empty lines
    // 该规则规定文件最后强制换行，仅需留一空行
    'eol-last': 2,

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    // TODO: enable, semver-minor
    // 函数调用时，函数名后面存在空格，e.g. fn ();
    'func-call-spacing': [0, 'never'],

    // require function expressions to have a name
    // 要求给函数表达式命名，便于debug
    'func-names': 1,

    // enforces use of function declarations or expressions
    // 统一定义函数时所采用的方式
    'func-style': 0,

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    // 规定了标识符命名的黑名单
    'id-blacklist': 0,

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    // 规定标识符的长度
    'id-length': 0,

    // require identifiers to match the provided regular expression
    // 命名检测，标识符命名需和配置中的正则表达式匹配，但是该规则对函数调用无效
    'id-match': 0,

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    // 统一代码缩进方式
    // indent: [2, 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    // 规定了在JSX中的属性值是使用单引号还是双引号,默认使用双引号
    'jsx-quotes': [0, 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    // 该规则规定了在对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
    'key-spacing': [2, { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // 规定了keyword前后是否需要留一个空格
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    // 统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
    'linebreak-style': [0, 'unix'],

    // enforces empty lines around comments
    // 规定注释和代码块之间是否留空行
    'lines-around-comment': 0,

    // specify the maximum depth that blocks can be nested
    // 规定代码最多可以嵌套多少层
    'max-depth': [0, 4],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    // 规定了代码单行的最大长度
    'max-len': [2, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    // 规定了一个文件中最大的代码行数
    'max-lines': [0, {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // specify the maximum depth callbacks can be nested
    // 规定了回调的最大嵌套层数
    'max-nested-callbacks': 0,

    // limits the number of parameters that can be used in the function declaration.
    // 规定了函数参数的最大个数
    'max-params': [0, 3],

    // specify the maximum number of statement allowed in a function
    // 规定了函数中代码不能够超过多少行
    'max-statements': [0, 10],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    // 规定了每行语句的数量
    'max-statements-per-line': [0, { max: 1 }],

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 0,

    // require a capital letter for constructors
    // 使用构造函数(new)时首字母需大写，首字母大写的函数需用new操作符
    'new-cap': [2, { newIsCap: true }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    // 使用构造函数(new)时必须圆括号不能省略
    'new-parens': 2,

    // allow/disallow an empty newline after var statement
    // 规定了变量声明后是否需要空行
    'newline-after-var': 0,

    // http://eslint.org/docs/rules/newline-before-return
    // 规定了return语句前是否是否需要空行
    'newline-before-return': 0,

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    // 规定了方法链式调用时是否需换行
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // 禁止使用Array构造函数
    'no-array-constructor': 2,

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    // TODO: enable
    // 禁止使用位操作符
    'no-bitwise': 0,

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    // 禁止使用continue
    'no-continue': 2,

    // disallow comments inline after code
    // 禁止使用行内注释
    'no-inline-comments': 0,

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    // 禁止在if-else控制语句中，else代码块中仅包含一个if语句
    'no-lonely-if': 2,

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    // 禁止混合使用不同的操作符，groups中的除外
    'no-mixed-operators': [2, {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    // 禁止混用tab和空格
    'no-mixed-spaces-and-tabs': 2,

    // disallow multiple empty lines and only one newline at the end
    // 不要留超过规定数目的空白行
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    // 在if语句中使用了否定表达式，同时else语句又不为空，那么这样的if-else语句将被视为不合法，为什么不将其反过来这样代码更容易理解，该规则同样适用于三元操作符
    'no-negated-condition': 0,

    // disallow nested ternary expressions
    // 三元操作符禁止嵌套
    'no-nested-ternary': 2,

    // disallow use of the Object constructor
    // 禁止使用new Object()来构造对象
    'no-new-object': 2,

    // disallow use of unary operators, ++ and --
    // 禁止使用++，--
    'no-plusplus': 0,

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    // 禁止使用某些特定的JavaScript语法，例如FunctionDeclaration 和 WithStatement
    'no-restricted-syntax': [
      2,
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow space between function identifier and application
    // 函数调用时，函数名和圆括号之间不能有空格
    'no-spaced-func': 2,

    // disallow tab characters entirely
    // TODO: enable
    // 禁止使用tab
    'no-tabs': 0,

    // disallow the use of ternary operators
    // 禁止使用三元操作符
    'no-ternary': 0,

    // disallow trailing whitespace at the end of lines
    // 禁止行末加空格
    'no-trailing-spaces': 2,

    // disallow dangling underscores in identifiers
    // 禁止在标识符前后使用下划线
    'no-underscore-dangle': [2, { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    // 禁止使用没有必要的三元操作符，因为用有些三元操作符可以使用其他语句替换
    'no-unneeded-ternary': [2, { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    // 禁止属性操作符.的前后和[之前有空格
    'no-whitespace-before-property': 2,

    // require padding inside curly braces
    // 规定对象字面量中大括号内是否允许加空格，也适用于ES6中的结构赋值和模块import和export
    'object-curly-spacing': [2, 'always'],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    // 大括号之间要换行
    'object-curly-newline': [0, {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    // object定义属性时，是否需要换行
    'object-property-newline': [2, {
      allowMultiplePropertiesPerLine: true,
    }],

    // allow just one var statement per function
    // 规定了在每个函数中声明变量是否只使用一次var，该规则同样适用于let和const
    'one-var': [2, 'never'],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    // 变量声明需要另起一行
    'one-var-declaration-per-line': [2, 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    // 规定了使用赋值操作符的简写形式
    'operator-assignment': [2, 'always'],

    // enforce operators to be placed before or after line breaks
    // 在换行时操作符应该放在行首还是行尾
    'operator-linebreak': 0,

    // enforce padding within blocks
    // 在代码块中，代码块的开始和结尾是否应该留一个空行
    'padded-blocks': [2, 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    // 对象的属性名是否强制加双引号
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    // 在JavaScript中有三种方式定义字符串，双引号、单引号、反义符（ECMAScript2015）。规定了字符串定义的方式
    quotes: [2, 'single', { avoidEscape: true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    // js注释
    'require-jsdoc': 0,

    // require or disallow use of semicolons instead of ASI
    // 每行末尾加上分号
    semi: [2, 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': [2, { before: false, after: true }],

    // requires object keys to be sorted
    // object的key值是否应该排序
    'sort-keys': [0, 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // 规定在同一个变量声明代码块中，要对变量的声明按字母排序
    'sort-vars': 0,

    // require or disallow space before blocks
    // 规定了在代码块前是否需要加空格
    'space-before-blocks': 2,

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    // 函数定义时，function关键字后面的小括号前是否需要加空格
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],

    // require or disallow spaces inside parentheses
    // 规定圆括号内部的空格。规定是否需要在(右边，或者)左边加空格。
    'space-in-parens': [2, 'never'],

    // require spaces around operators
    // 操作符左右是否添加空格
    'space-infix-ops': 2,

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    // 规定在一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // 规定是否需要在代码注释起始符// or /*后面至少紧跟一个空格
    'spaced-comment': [2, 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!']           // space here to support sprockets directives
    }],

    // require regex literals to be wrapped in parentheses
    // 要求在正则表达式的双斜杠外面加一个圆括号，来消除歧义
    'wrap-regex': 0
  }
};
