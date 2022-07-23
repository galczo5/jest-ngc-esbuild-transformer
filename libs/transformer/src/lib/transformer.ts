import {buildSync} from 'esbuild';
import {readFileSync} from 'fs';
import {randomUUID} from 'crypto';

interface TransformerConfig {
}

interface TransformOptions<TransformerConfig> {
  supportsDynamicImport: boolean;
  supportsExportNamespaceFrom: boolean;
  supportsStaticESM: boolean;
  supportsTopLevelAwait: boolean;
  instrument: boolean;
  /** Cached file system which is used by `jest-runtime` to improve performance. */
  cacheFS: Map<string, string>;
  /** Jest configuration of currently running project. */
  // config: ProjectConfig;
  /** Stringified version of the `config` - useful in cache busting. */
  configString: string;
  /** Transformer configuration passed through `transform` option by the user. */
  transformerConfig: TransformerConfig;
}

type TransformedSource = {
  code: string;
  map?: string | null;
};

/**
 * https://jestjs.io/docs/next/code-transformation
 */
const JestNgcEsbuildTransformer = {
  process(sourceText: string, sourcePath: string, options: TransformOptions<TransformerConfig>): TransformedSource {
    const fileName = randomUUID().toString() + '.js';
    const outFile = './dist/ngc-jest-transform/' + fileName;

    buildSync({
      entryPoints: [sourcePath],
      format: "iife",
      platform: "node",
      bundle: true,
      outfile: outFile
    });

    const result = readFileSync(outFile).toString();

    return {
      code: result
    };
  }
};

export default JestNgcEsbuildTransformer;
