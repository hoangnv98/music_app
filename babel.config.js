module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@navigator': './src/navigator',
          '@screens': './src/screens',
          '@services': './src/services',
          '@common': './src/common',
          '@slices': './src/slices',
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
