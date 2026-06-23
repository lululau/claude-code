// Stub target for the `bun:bundle` virtual module (a Bun build-time feature).
// The leaked source imports `feature` / `__bundleAssets` etc. from it at ~100 sites;
// these only resolve during the real Bun bundle. Provide a permissive stub so tsserver
// doesn't flag every one of those files, while keeping project-internal navigation intact.
export function feature(..._args: unknown[]): any {
  return undefined
}

const __bundleAssets: Record<string, unknown> = {}

export default __bundleAssets

export { __bundleAssets }
