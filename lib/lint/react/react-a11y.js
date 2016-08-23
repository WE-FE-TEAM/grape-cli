module.exports = {
  plugins: [
    'jsx-a11y',
    'react'
  ],
  ecmaFeatures: {
    jsx: true
  },
  rules: {
    // Enforce that anchors have content
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    // TODO: enable, semver-major
    // a和link标签间需要有内容
    'jsx-a11y/anchor-has-content': [0, ['']],

    // Require ARIA roles to be valid and non-abstract
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    // 正确使用role
    'jsx-a11y/aria-role': 2,

    // Enforce all aria-* props are valid.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    // aria-*的名称正确
    'jsx-a11y/aria-props': 2,

    // Enforce ARIA state and property values are valid.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    // 保证aria-*的取值正确
    'jsx-a11y/aria-proptypes': 2,

    // Enforce that elements that do not support ARIA roles, states, and
    // properties do not have those attributes.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    // 检查不支持aria的标签，如meta, html, script, style
    'jsx-a11y/aria-unsupported-elements': 2,

    // disallow href "#"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
    // href不使用#
    'jsx-a11y/href-no-hash': [2, ['a']],

    // Require <img> to have a non-empty `alt` prop, or role="presentation"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md
    // img需要设置alt
    'jsx-a11y/img-has-alt': 2,

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    // 检查img的alt
    'jsx-a11y/img-redundant-alt': 2,

    // require that JSX labels use "htmlFor"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    // label标签需要设置htmlFor
    'jsx-a11y/label-has-for': [2, ['label']],

    // require that mouseover/out come with focus/blur, for keyboard-only users
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': 0,

    // Prevent use of `accessKey`
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    // 不使用accessKey
    'jsx-a11y/no-access-key': 2,

    // require onBlur instead of onChange
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
    // 使用onBlur代替onChange
    'jsx-a11y/no-onchange': 0,

    // Enforce that elements with onClick handlers must be focusable.
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-focus.md
    'jsx-a11y/onclick-has-focus': 0,

    // require things with onClick to have an aria role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-role.md
    'jsx-a11y/onclick-has-role': 0,

    // Enforce that elements with ARIA roles must have all required attributes
    // for that role.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    // 
    'jsx-a11y/role-has-required-aria-props': 2,

    // Enforce that elements with explicit or implicit roles defined contain
    // only aria-* properties supported by that role.
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    // 
    'jsx-a11y/role-supports-aria-props': 2,

    // Enforce tabIndex value is not greater than zero.
    // TODO: evaluate
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    // tabIndex不大于0
    'jsx-a11y/tabindex-no-positive': 0,

    // ensure <hX> tags have content and are not aria-hidden
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    // <hX>标签间需要有内容，而且不是aria-hidden
    'jsx-a11y/heading-has-content': [2, ['']],

    // require HTML elements to have a "lang" prop
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
    // html标签需要有lang属性
    'jsx-a11y/html-has-lang': 2,

    // require HTML element's lang prop to be valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
    // 检查html标签的lang
    'jsx-a11y/lang': 2,

    // prevent marquee elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-marquee.md
    // 不使用marquee标签（可以使用Marquee）
    'jsx-a11y/no-marquee': 2,

    // only allow <th> to have the "scope" attr
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
    // 只有th才能有scope属性
    'jsx-a11y/scope': 2,
  },
};
