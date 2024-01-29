import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'no-console': ['error', { allow: ['log', 'error', 'warn'] }],
    'node/prefer-global/process': 'off',
  },
  ignores: [
    // ...globs
  ],
})
