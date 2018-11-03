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
  '@babel/preset-flow',
];

module.exports = { presets };
