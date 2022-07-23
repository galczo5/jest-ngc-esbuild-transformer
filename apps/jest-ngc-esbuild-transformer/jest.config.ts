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

// OLD FILE - UNCOMMENT IF YOU WANT TO COMPARE TIME
// /* eslint-disable */
// export default {
//   displayName: 'jest-ngc-esbuild-transformer',
//   preset: '../../jest.preset.js',
//   setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
//   globals: {
//     'ts-jest': {
//       tsconfig: '<rootDir>/tsconfig.spec.json',
//       stringifyContentPathRegex: '\\.(html|svg)$',
//     },
//   },
//   coverageDirectory: '../../coverage/apps/jest-ngc-esbuild-transformer',
//   transform: {
//     '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
//   },
//   transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
//   snapshotSerializers: [
//     'jest-preset-angular/build/serializers/no-ng-attributes',
//     'jest-preset-angular/build/serializers/ng-snapshot',
//     'jest-preset-angular/build/serializers/html-comment',
//   ],
// };
