/* eslint-disable */
export default {
  displayName: 'jest-ngc-esbuild-transformer',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': '<rootDir>/../../dist/libs/transformer/src/lib/transformer.js',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
