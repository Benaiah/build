# Snapshot report for `packages/build/tests/plugins/utils-git/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## git-utils commits

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    [{"sha":"152867c29d975a929f60d35b4a8a05d94661d517","author":{"name":"DavidWells","email":"hello@davidwells.io","date":"2019-06-11 21:25:51 -0700"},"committer":{"name":"DavidWells","email":"hello@davidwells.io","date":"2019-06-11 21:25:51 -0700"},"message":"add-npm-logic","parents":"bf7e"},{"sha":"bf7ed52361e27aa5cb43abd4493206aaceb41ff6","author":{"name":"DavidWells","email":"hello@davidwells.io","date":"2019-06-11 21:25:41 -0700"},"committer":{"name":"DavidWells","email":"hello@davidwells.io","date":"2019-06-11 21:25:41 -0700"},"message":"add-node-logic","parents":"e6c9"},{"sha":"e6c906da605c1ba3130b9cfdf0fc76aeb73c81ed","author":{"name":"DavidWells","email":"hello@davidwells.io","date":"2019-06-11 21:25:27 -0700"},"committer":{"name":"DavidWells","email":"hello@davidwells.io","date":"2019-06-11 21:25:27 -0700"},"message":"add-bower-logic","parents":"6bdf"}]␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils defined

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    modifiedFiles createdFiles deletedFiles fileMatch match commits linesOfCode␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils diff

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    {"modifiedFiles":["src/install/node/bower.js"],"createdFiles":["src/install/node/install-node.js","src/install/node/run-npm.js"],"deletedFiles":["src/install/node/index.js","src/install/node/npm.js"]}␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils fileMatch

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    { modified: false, created: false, deleted: true, edited: false }␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils linesOfCode

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    { linesOfCode: 163 }␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils match

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    { modified: [], created: [], deleted: [ 'src/install/node/npm.js' ], edited: [] }␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils same commit

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    {"modifiedFiles":[],"createdFiles":[],"deletedFiles":[],"linesOfCode":0,"commits":[]}␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onSaveCache command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onSaveCache completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## git-utils unknown commit

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Flags␊
    { config: '/file/path' }␊
    ␊
    > Using config file: /file/path␊
    ␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
      Loading plugin "@netlify/plugin-cache-core" from build core␊
      Loading plugin from /file/path␊
    ␊
    ┌─────────────────────────────┐␊
    │     Netlify Build Error     │␊
    └─────────────────────────────┘␊
    ␊
    Error loading "/file/path" plugin:␊
    Error: Could not load core utility 'git': Error: Invalid base commit aaaaaaaa␊
    fatal: ambiguous argument 'aaaaaaaa': unknown revision or path not in the working tree.␊
    Use '--' to separate paths from revisions, like this:␊
    'git <command> [<revision>...] -- [<file>...]'␊
    STACK TRACE␊
    `