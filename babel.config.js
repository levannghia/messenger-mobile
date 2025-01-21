module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@services': './src/services',
          '@state': './src/state',
          '@hook': './src/hook',
        }
      },
    ],
    'react-native-reanimated/plugin',
  ]
};
