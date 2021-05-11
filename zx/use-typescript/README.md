# Use google/zx with typescript

## Using ts-node
setup
```
npm i
```

run
```
❯ node --loader ts-node/esm checkDirtyWorkingTreeForGit.ts
(node:64769) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
$ git status --porcelain
AM zx/use-typescript/checkDirtyWorkingTreeForGit.mjs
AM zx/use-typescript/checkDirtyWorkingTreeForGit.ts
AM zx/use-typescript/main.ts
?? zx/use-typescript/node_modules/
?? zx/use-typescript/package-lock.json
?? zx/use-typescript/package.json
?? zx/use-typescript/tsconfig.json
Error: git working tree is dirty.
    at file:///Users/korosuke613/ghq/github.com/korosuke613/playground/zx/use-typescript/checkDirtyWorkingTreeForGit.ts:6:9
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```
## Using tsc and node(or zx)
setup
```
npm i
npx tsc
```

run
```
❯ node checkDirtyWorkingTreeForGit.js
$ git status --porcelain
AM zx/use-typescript/checkDirtyWorkingTreeForGit.mjs
AM zx/use-typescript/checkDirtyWorkingTreeForGit.ts
AM zx/use-typescript/main.ts
?? zx/use-typescript/checkDirtyWorkingTreeForGit.js
?? zx/use-typescript/main.js
?? zx/use-typescript/node_modules/
?? zx/use-typescript/package-lock.json
?? zx/use-typescript/package.json
?? zx/use-typescript/tsconfig.json
file:///Users/korosuke613/ghq/github.com/korosuke613/playground/zx/use-typescript/checkDirtyWorkingTreeForGit.js:4
    throw new Error("git working tree is dirty.");
          ^

Error: git working tree is dirty.
    at file:///Users/korosuke613/ghq/github.com/korosuke613/playground/zx/use-typescript/checkDirtyWorkingTreeForGit.js:4:11
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```

The same result is obtained with `zx checkDirtyWorkingTreeForGit.js`.
