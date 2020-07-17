# Snapshot report for `packages/build/tests/commands/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Invalid package.json does not make build fail

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      No config file was defined: using default values.␊
    ␊
    > Resolved config␊
      {}␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## build.command can execute global binaries

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --version␊
        commandOrigin: config␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --version␊
    v1.0.0␊
    ␊
    (build.command completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## build.command can execute local binaries

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: atob dGVzdA==␊
        commandOrigin: config␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ atob dGVzdA==␊
    test␊
    ␊
    (build.command completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## build.command can execute shell commands

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --version && node --version␊
        commandOrigin: config␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --version && node --version␊
    v1.0.0␊
    v1.0.0␊
    ␊
    (build.command completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## build.command from UI settings

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      No config file was defined: using default values.␊
    ␊
    > Resolved config␊
      build:␊
        command: node --version␊
        commandOrigin: ui␊
    ␊
    > Context␊
      production␊
    ␊
    ┌───────────────────────────────────┐␊
    │ 1. Build command from Netlify app │␊
    └───────────────────────────────────┘␊
    ␊
    $ node --version␊
    v1.0.0␊
    ␊
    (build.command completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## build.command use correct PWD

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node file.js␊
        commandOrigin: config␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node file.js␊
    true␊
    ␊
    (build.command completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## build.command uses Bash

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      debug: true␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: echo $BASH␊
        commandOrigin: config␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ echo $BASH␊
    /file/path␊
    ␊
    (build.command completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`