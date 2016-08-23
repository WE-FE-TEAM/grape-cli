module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    // 变量声明时必须赋初值
    'init-declarations': 0,

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // 禁止catch子句参数与外部作用域变量同名
    'no-catch-shadow': 0,

    // disallow deletion of variables
    // 禁止使用delete删除var声明的变量
    'no-delete-var': 2,

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    // 防止label和声明的变量重名
    'no-label-var': 2,

    // disallow specific globals
    // 禁止使用某些全局变量
    'no-restricted-globals': 0,

    // disallow declaration of variables already declared in the outer scope
    // 禁止声明外部作用域中已定义的变量
    'no-shadow': 2,

    // disallow shadowing of names such as arguments
    // 声明变量时禁止覆盖JavaScript中的一些保留关键字，比如NaN、Infinity、undefined、eval、arguments等
    'no-shadow-restricted-names': 2,

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // 禁止使用未被定义的变量，除非已在配置文件的global中进行了说明
    'no-undef': 2,

    // disallow use of undefined when initializing variables
    // 禁止初始化变量为undefined
    'no-undef-init': 2,

    // disallow use of undefined variable
    // TODO: enable?
    // 禁止把undefined作为变量名
    'no-undefined': 0,

    // disallow declaration of variables that are not used in the code
    // 不允许定义的变量在后面的代码中没有被使用到
    'no-unused-vars': [2, { vars: 'local', args: 'after-used' }],

    // disallow use of variables before they are defined
    // 所有的变量都应该先定义后使用
    'no-use-before-define': 2
  }
};
