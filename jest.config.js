module.exports = {
  bail: 1,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^.+\\.(css|scss|styl)$': 'identity-obj-proxy',
  },
};
