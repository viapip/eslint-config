import config from './src/index'

export default config({
  rules: {
    'unicorn/filename-case': ['error', { case: 'kebabCase', ignore: ['\\.md$'] }],
  },
})
