module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // 定义对象的get/set存取器属性时，强制成对出现
    'accessor-pairs': 0,

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    // Array执行回调函数必须有返回值
    'array-callback-return': 2,

    // treat var statements as if they were block scoped
    // 在块级作用域外访问块内定义的变量是否报错提示
    'block-scoped-var': 2,

    // specify the maximum cyclomatic complexity allowed in a program
    // 圈复杂度
    complexity: [0, 11],

    // require return statements to either always or never specify values
    // 方法必须要有返回值
    'consistent-return': 2,

    // specify curly brace conventions for all control statements
    // if else while for do后面的代码块是否需要{ }包围，参数：
    //    multi  只有块中有多行语句时才需要{ }包围
    //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
    //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();
    //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面
    //    [2, "multi", "consistent"] 保持前后语句的{ }一致
    //    default: [2, "all"] 全都需要{ }包围
    curly: [2, 'multi-line'],

    // require default case in switch statements
    // switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'default-case': [2, { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    // 强制使用.号取属性
    //    参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性
    //                          false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {"allowKeywords": false}]
    //           allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]
    'dot-notation': [2, { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    // 强制object.key 中 . 的位置，参数:
    //      property，'.'号应与属性在同一行
    //      object, '.' 号应与对象名在同一行
    'dot-location': [2, 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    // 使用 === 替代 ==
    eqeqeq: [2, 'allow-null'],

    // make sure for-in loops have an if statement
    // 确保for-in循环中有if语句
    'guard-for-in': 2,

    // disallow the use of alert, confirm, and prompt
    // 不使用alert, confirm 和 prompt
    'no-alert': 1,

    // disallow use of arguments.caller or arguments.callee
    // 不使用arguments.caller 和 arguments.callee
    'no-caller': 2,

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    // 禁止在case/default语句中使用lexical declarations，例如let, const, function and class
    // 因为在case/default中的声明，在整个switch语句中都能够访问到，如果需要声明变量，可以加大括号。
    'no-case-declarations': 2,

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    // 不能使用看起来像除法的正则表达式
    // 用来消除/ (除号)操作符对程序员的迷惑，比如在正则表达式/=foo/中，我们并不能够确定第一个/是除号还是正则表达式，因此我们需要在等号前面加一个转移符/\=foo/
    'no-div-regex': 0,

    // disallow else after a return in an if
    // 在if else语句中，如果else语句中只含有一个return语句，那么完全可以不使用else语句，直接return。
    'no-else-return': 2,

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    // 不允许空函数
    'no-empty-function': [2, {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 2,

    // disallow comparisons to null without a type-checking operator
    // 在结构赋值时，模式不能为空。
    // 在ECMAScript2015的结构赋值中，模式为空是不会报错的，只是这样的结构赋值没有任何效果，该条规则就保证了模式不能为空，也就保证了结构赋值的有效性。
    'no-eq-null': 0,

    // disallow use of eval()
    // 不使用eval
    'no-eval': 2,

    // disallow adding to native types
    // 禁止扩展native对象，不能向native的对象上面添加属性
    'no-extend-native': 2,

    // disallow unnecessary function binding
    // 规避了不必要的使用bind方法的情况。
    // 箭头函数中没有this对象，也就不能够使用bind()方法。该规则保证了在所有的箭头函数中使用bind方法将被视为错误。
    'no-extra-bind': 2,

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    // 如果loop中没有内嵌的loops或switches, loop标签是不必要的.
    'no-extra-label': 2,

    // disallow fallthrough of case statements
    // case声明中，如果没有添加break等终止语句或者没有添加注释语句，将会抛出错误
    'no-fallthrough': 2,

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    // 在使用浮点小数时，不能够省略小数点前面的数或者后面的数，必须写。比如.2 2. 应该写0.2 2.0
    'no-global-assign': [2, { exceptions: [] }],

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    // 禁止隐式转换，为了消除简写的类型转换
    'no-implicit-coercion': [0, {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    // 禁止在全局作用域里声明变量或函数
    'no-implicit-globals': 0,

    // disallow use of eval()-like methods
    // 在setTimeout(), setInterval() or execScript()中消除隐式eval的使用
    'no-implied-eval': 2,

    // disallow this keywords outside of classes or class-like objects
    // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-invalid-this': 0,

    // disallow usage of __iterator__ property
    // 禁止使用__iterator__属性
    'no-iterator': 2,

    // disallow use of labels for anything other then loops and switches
    // 禁止使用label语句，以避免无限循环
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // 禁止使用不必要的嵌套代码块
    'no-lone-blocks': 2,

    // disallow creation of functions within loops
    // 禁止在循环体中定义函数并且函数引用了外部变量
    // 在循环中定义了函数，但是函数内部没有引用外部变量，或者使用let定义的代码块变量，视为合法
    'no-loop-func': 2,

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    // 禁止使用magic数字，建议使用常量来代替
    'no-magic-numbers': [0, {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    // 保证了在逻辑表达式、条件表达式、申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符。
    'no-multi-spaces': 2,

    // disallow use of multiline strings
    // 字符串不分行书写
    'no-multi-str': 2,

    // disallow reassignments of native objects
    // TODO: deprecated in favor of no-global-assign
    // 不重写原生对象
    'no-native-reassign': 0,

    // disallow use of new operator when not part of the assignment or comparison
    // 在使用new来调用构造函数后，必须把生成的实例赋值给一个变量
    'no-new': 2,

    // disallow use of new operator for Function object
    // 禁止使用new Function(); 语句
    'no-new-func': 2,

    // disallows creating new instances of String, Number, and Boolean
    // 禁止使用new创建String,Number, 和 Boolean实例
    'no-new-wrappers': 2,

    // disallow use of (old style) octal literals
    // 禁止使用八进制数字
    'no-octal': 2,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // 禁止使用八进制转义序列，比如 var foo = "Copyright \251";
    'no-octal-escape': 2,

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    // 禁止对函数的参数重新进行无意义的赋值
    'no-param-reassign': [2, { props: true }],

    // disallow usage of __proto__ property
    // 禁止使用__proto__属性
    'no-proto': 2,

    // disallow declaring the same variable more then once
    // 避免重复声明一个变量
    'no-redeclare': 2,

    // disallow use of assignment in return statement
    // 不要在return语句中使用赋值语句
    'no-return-assign': 2,

    // disallow use of `javascript:` urls.
    // 禁止代码中使用类似javascript:void(0)的javascript: urls.
    'no-script-url': 2,

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    // 禁止给自身赋值
    'no-self-assign': 2,

    // disallow comparisons where both sides are exactly the same
    // 禁止和自身作比较
    'no-self-compare': 2,

    // disallow use of comma operator
    // 禁止可能导致结果不明确的逗号操作符
    'no-sequences': 2,

    // restrict what can be thrown as an exception
    // 通过throw语句抛出的对象必须是Error对象本身或者通过Error对象定义的对象
    'no-throw-literal': 2,

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    // 禁止使用不被修改的循环条件
    'no-unmodified-loop-condition': 0,

    // disallow usage of expressions in statement position
    // 禁止在代码中出现没有被使用到的表达式或值
    'no-unused-expressions': [2, {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    // 禁止在代码中出现没有被使用到的标签
    'no-unused-labels': 2,

    // disallow unnecessary .call() and .apply()
    // 避免使用没有意义的call() 和 apply()
    'no-useless-call': 0,

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    // 避免使用不必要的字符串拼接
    'no-useless-concat': 2,

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 2,

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    // 不要使用void操作符
    'no-void': 2,

    // disallow usage of configurable warning terms in comments: e.g. todo
    // 生产代码中不能出现warning-comments包含的注释
    'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    // 不要使用with语句
    'no-with': 2,

    // require use of the second argument for parseInt()
    // 在使用parseInt()方法时，必须要传递第二个参数来帮助解析。
    radix: 2,

    // requires to declare all vars on top of their containing scope
    // 在通过var声明变量时，应该放在代码所在作用域的顶部
    'vars-on-top': 2,

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    // 立即执行函数需要通过圆括号包围
    'wrap-iife': [2, 'outside'],

    // require or disallow Yoda conditions
    // yoda条件语句就是对象字面量应该写在比较操作符的左边，而变量应该写在比较操作符的右边
    // 默认的规则要求，变量写在左边而字面量写在右边
    yoda: 2
  }
};
