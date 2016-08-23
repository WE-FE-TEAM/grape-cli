module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    // 箭头函数中，如果函数体里只有一句代码时可以省略大括号
    // 规定是否可以省略大括号
    'arrow-body-style': [2, 'as-needed'],

    // require parens in arrow function arguments
    // 箭头函数中，只有一个参数时可以省略圆括号
    // 规定了参数是否需要圆括号包围
    'arrow-parens': 0,

    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    // 规定了箭头函数的箭头前后是否加空格
    'arrow-spacing': [2, { before: true, after: true }],

    // verify super() callings in constructors
    // 保证constructor函数中super()应正确出现，比如在继承的classes中（派生类）必须使用super，否则（非派生类）不要使用super。
    'constructor-super': 2,

    // enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    // 规定generator函数中星号前后的空白
    'generator-star-spacing': [2, { before: false, after: true }],

    // disallow modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    // 禁止覆盖class命名，也就是说变量名不要和class名重名
    'no-class-assign': 2,

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    // 箭头函数的箭头和比较操作符 (>, <, <=, and >=)很相似，该规则要求在和比较操作符容易发生混淆时禁止使用箭头函数语法
    'no-confusing-arrow': [2, {
      allowParens: true,
    }],

    // disallow modifying variables that are declared using const
    // 禁止修改const声明的变量
    'no-const-assign': 2,

    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    // class中的成员不允许有相同的名字
    'no-dupe-class-members': 2,

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 2,

    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    // 禁止在Symbol对象前使用new操作符
    'no-new-symbol': 2,

    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    // 该规则可以定义不允许在应用中导入的模块
    'no-restricted-imports': 0,

    // disallow to use this/super before super() calling in constructors.
    // http://eslint.org/docs/rules/no-this-before-super
    // 在构造函数中，禁止在super()调用前使用this/super对象
    'no-this-before-super': 2,

    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    // 禁止使用无用，但需要计算的key值，比如var a = { ['0']: 0 };
    'no-useless-computed-key': 2,

    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    // ES2015提供了默认的空构造函数，禁止使用不必要的空构造函数
    'no-useless-constructor': 2,

    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    // 使用import、export时，禁止重命名为相同名字，比如import { foo as foo } from "bar";
    'no-useless-rename': [2, {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // require let or const instead of var
    // 禁用var，用let和const代替var
    'no-var': 2,

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    // ES6中提供了定义对象字面量的方法和属性的简写形式。强制要求在对象字面量中使用方法和属性的简写形式
    'object-shorthand': [2, 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // suggest using arrow functions as callbacks
    // 函数作为函数的参数传入时，传入的函数需要是箭头函数
    // 箭头函数中的this对象直接绑定到了其外面包围的函数的this对象。
    'prefer-arrow-callback': [2, {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // suggest using of const declaration for variables that are never modified after declared
    // 如果一个变量声明后不再被修改，那么应使用const来声明该变量
    'prefer-const': [1, {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // suggest using Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    // TODO: enable
    // 推荐使用Reflect上的方法替代以前老方法
    'prefer-reflect': 0,

    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    // 在ES2015(ES6)中推荐使用剩余参数(...rest)代替arguments变量
    'prefer-rest-params': 2,

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    // 在ES2015(ES6)中推荐使用扩展符替代apply()方法
    'prefer-spread': 2,

    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    // 在ES2015(ES6)中推荐使用模板代替以前的字符串拼接
    'prefer-template': 2,

    // disallow generator functions that do not have yield
    // http://eslint.org/docs/rules/require-yield
    // 生成器函数中必须有yield关键字，如果没有会报错。
    'require-yield': 2,

    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    // 对象的扩展属性间必须有空格
    'rest-spread-spacing': [2, 'never'],

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    // import排序
    'sort-imports': [0, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    // 模板字符串中使用${ 和 } 包含的表达式前后是否需要留空格，默认规则禁止花括号内有空格
    'template-curly-spacing': 2,

    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    // yield*表达式中的*号前后是否留空格，默认after，比如yield* other()
    'yield-star-spacing': [2, 'after']
  }
};
