module.exports = {
  name: 'ui',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!(react-syntax-highlighter)/)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/ui',
};
