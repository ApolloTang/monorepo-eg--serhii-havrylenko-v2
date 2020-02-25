module.exports = (api) => {
  api.cache(true)

  console.log('xxx button-blue babel.config.js', process.env.BABEL_ENV)

  const out = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-styled-components'
    ]
  }

  return out
};
