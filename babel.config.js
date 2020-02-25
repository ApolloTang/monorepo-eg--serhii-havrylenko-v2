module.exports = (api) => {
  api.cache(true);

  console.log('xxx root babel.config.js', process.env.BABEL_ENV)

  const out =  {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: 'Last 2 Chrome versions, Firefox ESR',
            node: '8.9',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build',
        },
      ],
      '@babel/preset-typescript',
    ],
    env: {
      build: {
        ignore: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.stories.tsx',
          '**/*.stories.js',
          '__snapshots__',
          '__tests__',
          '__stories__',
        ],
      },
    },
    ignore: ['node_modules'],
    include: [/.*\.(t|j)x?s/],  // this will not work in --extensions flag is set in cli
  };

  return out
};
