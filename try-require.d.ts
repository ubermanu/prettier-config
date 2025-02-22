declare module 'try-require' {
  function tryRequire(
    moduleName: string,
    requireFunc?: (module: string) => any
  ): any

  namespace tryRequire {
    function resolve(
      moduleName: string,
      requireFunc?: (module: string) => any
    ): string | undefined
    function lastError(): Error | null
  }

  export = tryRequire
}
