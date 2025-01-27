import { errorMiddleware, RelayNetworkLayer } from "react-relay-network-modern/node8"
import { Environment, RecordSource, Store } from "relay-runtime"

import { cacheMiddleware } from "./middlewares/cacheMiddleware"
import { checkAuthenticationMiddleware } from "./middlewares/checkAuthenticationMiddleware"
import {
  metaphysicsExtensionsLoggerMiddleware,
  metaphysicsURLMiddleware,
  persistedQueryMiddleware,
} from "./middlewares/metaphysicsMiddleware"
import { principalFieldErrorMiddleware } from "./middlewares/principalFieldErrorMiddleware"
import { rateLimitMiddleware } from "./middlewares/rateLimitMiddleware"
import { simpleLoggerMiddleware } from "./middlewares/simpleLoggerMiddleware"
import { timingMiddleware } from "./middlewares/timingMiddleware"

/// WARNING: Creates a whole new, separate Relay environment. Useful for testing.
/// Use `defaultEnvironment` for production code.
export function createEnvironment(
  networkConfig: ConstructorParameters<typeof RelayNetworkLayer> = [
    [
      // The top middlewares run first, i.e. they are the furtherst from the fetch
      // @ts-ignore
      cacheMiddleware(),
      persistedQueryMiddleware(),
      metaphysicsURLMiddleware(),
      rateLimitMiddleware(),
      // @ts-ignore
      principalFieldErrorMiddleware(),
      // We need to run the checkAuthenticationMiddleware as early as possible to make sure that the user
      // session is still valid. This is why we need to keep it as low as possible in the middlewares array.
      checkAuthenticationMiddleware(),
      metaphysicsExtensionsLoggerMiddleware(),
      simpleLoggerMiddleware(),
      __DEV__ ? errorMiddleware() : null,
      timingMiddleware(),
    ],
    // `noThrow` is currently marked as "experimental" and may be deprecated in the future.
    // See: https://github.com/relay-tools/react-relay-network-modern#advanced-options-2nd-argument-after-middlewares
    { noThrow: true },
  ]
) {
  const network = new RelayNetworkLayer(...networkConfig)
  const source = new RecordSource()
  const store = new Store(source)
  return new Environment({
    network,
    store,
  })
}

export const defaultEnvironment = createEnvironment()
