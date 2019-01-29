const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: '10',
      },
      useBuiltIns: 'usage',
    },
  ],
  "@babel/preset-typescript"
];

const plugins = [
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread'
];

module.exports = { presets, plugins };
