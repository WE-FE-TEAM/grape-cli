module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    jsx: true
  },

  // View link below for react rules documentation
  // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    // 在JSX属性中，指定是否应使用双引号或单引号
    'jsx-quotes': [2, 'prefer-double'],

    // Prevent missing displayName in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    // 组件定义中，检查displayName是否定义
    'react/display-name': [0, { ignoreTranspilerName: false }],

    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    // 禁止某些propTypes
    'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    // 如果一个属性值是明确的 true ，把值省略不写
    'react/jsx-boolean-value': [2, 'never'],

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    // 如果你的组件有多行属性，新起一行关闭标签
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    // 不要在 JSX 大括号内垫上空格
    'react/jsx-curly-spacing': [2, 'never', { allowMultiline: true }],

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    // jsx中，强制约定处理事件处理方法的名称
    'react/jsx-handler-names': [0, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    // 验证props缩进
    'react/jsx-indent-props': [1, 2],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    // 在数组或迭代器中，验证是否存在key属性 e.g. [<Hello key="first" />, <Hello key="second" />]
    'react/jsx-key': 0,

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    // 在限制每行的props最大值
    'react/jsx-max-props-per-line': [0, { maximum: 1 }],

    // Prevent usage of .bind() in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    // 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
    'react/jsx-no-bind': [2, {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false,
    }],

    // Prevent duplicate props in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    // 不允许存在重复的props
    'react/jsx-no-duplicate-props': [0, { ignoreCase: false }],

    // Prevent usage of unwrapped JSX strings
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    // 不允许在jsx的标签间直接插入string，推荐 var Hello = <div>{'test'}</div>;
    'react/jsx-no-literals': 0,

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    // 不允许使用未定义的变量
    'react/jsx-no-undef': 2,

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    // React模块名使用驼峰式命名，实例使用骆驼式命名
    // import ReservationCard from './ReservationCard';
    // const reservationItem = <ReservationCard />;
    'react/jsx-pascal-case': [2, {
      allowAllCaps: true,
      ignore: [],
    }],

    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    // propTypes声明时按字母顺序排序
    'react/sort-prop-types': [0, {
      ignoreCase: false,
      callbacksLast: false,
      requiredFirst: false,
    }],

    // Deprecated in favor of react/jsx-sort-props
    // 是否支持react/jsx-sort-props
    'react/jsx-sort-prop-types': 0,

    // Enforce props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    // 强制props按字母顺序排序
    'react/jsx-sort-props': [0, {
      ignoreCase: false,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
    }],

    // Prevent React to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    // 检查引入React后是否使用
    'react/jsx-uses-react': [2],

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    // 检查引入React组件后是否使用
    'react/jsx-uses-vars': 2,

    // Prevent usage of dangerous JSX properties
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    // 防止危险的jsx特性
    'react/no-danger': 0,

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    // 阻止使用过时的方法
    'react/no-deprecated': [2],

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    // 在componentDidMount中不使用setState
    'react/no-did-mount-set-state': [2],

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': [2],

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    // 不允许直接对this.state进行赋值
    'react/no-direct-mutation-state': 0,

    // Prevent usage of isMounted
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    // 不允许使用isMounted
    'react/no-is-mounted': 2,

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    // 每个文件只写一个模块.但是多个无状态模块可以放在单个文件中
    'react/no-multi-comp': [2, { ignoreStateless: true }],

    // Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    // 合理使用setState
    'react/no-set-state': 0,

    // Prevent using string references
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    // 总是在Refs里使用回调函数
    'react/no-string-refs': 2,

    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    // 检查jsx的property，比如class应该写为className
    'react/no-unknown-property': 2,

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    // 如果你的模块有内部状态或者是refs, 推荐使用 class extends React.Component 而不是 React.createClass ,除非你有充足的理由来使用这些方法.
    'react/prefer-es6-class': [2, 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    // 如果你的模块没有状态或是没有引用refs， 推荐使用普通函数（非箭头函数）而不是类:
    'react/prefer-stateless-function': 2,

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    // propTypes中，如果存在没有定义props验证的字段，是否报错
    'react/prop-types': [2, { ignore: [], customValidators: [] }],

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    // 检查使用引入React
    'react/react-in-jsx-scope': 2,

    // Restrict file extensions that may be required
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
    // 限制文件扩展名
    'react/require-extension': [2, { extensions: ['.jsx', '.js'] }],

    // Require render() methods to return something
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    // 在 render 方法中总是确保 return 返回值
    'react/require-render-return': 2,

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    // 对于没有子元素的标签来说总是自己关闭标签
    'react/self-closing-comp': 2,

    // Enforce spaces before the closing bracket of self-closing JSX elements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // 自闭合的jsx标签，闭合前加个空格
    'react/jsx-space-before-closing': [2, 'always'],

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    // 组件方法排序
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ],
    }],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    // 多行的jsx需要使用圆括号
    'react/jsx-wrap-multilines': [2, {
      declaration: true,
      assignment: true,
      return: true
    }],
    'react/wrap-multilines': 0, // deprecated version

    // Require that the first prop in a JSX element be on a new line when the element is multiline
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    // 多行的jsx中，第一个prop需要换行
    'react/jsx-first-prop-new-line': [2, 'multiline'],

    // Enforce spacing around jsx equals signs
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    // jsx的等于号两边是否有空格
    'react/jsx-equals-spacing': [2, 'never'],

    // Enforce JSX indentation
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    // 缩进
    'react/jsx-indent': [1, 2],

    // Disallow target="_blank" on links
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    // a标签中不允许存在target="_blank"，如果需要使用，加上rel='noreferrer noopener'
    'react/jsx-no-target-blank': 2,

    // only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // 只能在jsx文件中使用react
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],

    // prevent accidental JS comments from being injected into JSX as text
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    // 检查注释方式
    'react/jsx-no-comment-textnodes': 2,
    'react/no-comment-textnodes': 0, // deprecated version

    // disallow using React.render/ReactDOM.render's return value
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    // 不将React.render/ReactDOM.render的返回值赋值给变量
    'react/no-render-return-value': 2,

    // require a shouldComponentUpdate method, or PureRenderMixin
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': [0, { allowDecorators: [] }],

    // warn against using findDOMNode()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    // 不使用findDOMNode
    'react/no-find-dom-node': 2,

    // Forbid certain props on Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    // 禁止使用某些props
    'react/forbid-component-props': [0, { forbid: [] }],

    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    // TODO: enable, semver-major
    'react/no-danger-with-children': 0,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    react: {
      pragma: 'React',
      version: '0.14'
    },
  }
};
