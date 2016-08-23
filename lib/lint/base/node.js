module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    // 强制回调后return，避免多次调用回调
    'callback-return': 0,

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    // 强制require()出现在模块作用域的顶部
    'global-require': 2,

    // enforces error handling in callbacks (node environment)
    // 如果函数有err入参(err或者error),在函数体内必须进行处理
    'handle-callback-err': 0,

    // disallow mixing regular variable and require declarations
    // 声明时不能混用声明类型
    'no-mixed-requires': [0, false],

    // disallow use of new operator with the require function
    // 禁止把require方法和new操作符一起使用
    'no-new-require': 2,

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    // 不能使用__dirname或__filename做路径拼接
    'no-path-concat': 2,

    // disallow use of process.env
    'no-process-env': 0,

    // disallow process.exit()
    'no-process-exit': 0,

    // restrict usage of specified node modules
    'no-restricted-modules': 0,

    // disallow use of synchronous methods (off by default)
    'no-sync': 0,
  }
};
