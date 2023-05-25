# `svelte-package` Ignores TSConfig

Some of it, at least.

This repo demonstrates how `svelte-package` ignores attempts to create unpreserved constant enums in TypeScript, and instead charges ahead, preserving them anyway.

## What Do I Do Here

In short;

```sh
npm i && \
npm run svelte-build && \
npm run tsc-build && \
code src/lib/index.ts tsconfig.json && \
code --diff dist/index.js tsc/index.js && \
code --diff dist/demo.js tsc/demo.js
```

This will build to `dist/` with `svelte-package`, then to `tsc/` with `tsc`, and then open a diff of
the two emitted files. It also opens the source file and tsconfig file.
