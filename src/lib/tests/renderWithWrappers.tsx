import { NotificationProvider } from "lib/Components/Notification/NotificationProvider"
import { ToastProvider } from "lib/Components/Toast/toastHook"
import { GlobalStoreProvider } from "lib/store/GlobalStore"
import { track } from "lib/utils/track"
import { ProvideScreenDimensions } from "lib/utils/useScreenDimensions"
import { Theme } from "palette"
import React from "react"
import ReactTestRenderer from "react-test-renderer"
import { ReactElement } from "simple-markdown"

/**
 * Renders a React Component with our page wrappers
 * @param component
 */
export const renderWithWrappers = (component: ReactElement) => {
  const wrappedComponent = componentWithWrappers(component)
  try {
    // tslint:disable-next-line:use-wrapped-components
    const renderedComponent = ReactTestRenderer.create(wrappedComponent)

    // monkey patch update method to wrap components
    const originalUpdate = renderedComponent.update
    renderedComponent.update = (nextElement: ReactElement) => {
      originalUpdate(componentWithWrappers(nextElement))
    }

    return renderedComponent
  } catch (error) {
    if (error.message.includes("Element type is invalid")) {
      throw new Error(
        'Error: Relay test component failed to render. This may happen if you forget to add `jest.unmock("react-relay")` at the top ' +
          "of your test? or if the module you are testing is getting mocked in setupJest.ts" +
          "\n\n" +
          error
      )
    } else {
      throw new Error(error.stack)
    }
  }
}

export const TrackProvider = track()(({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>
})

/**
 * Returns given component wrapped with our page wrappers
 * @param component
 */
export const componentWithWrappers = (component: ReactElement) => {
  return (
    <TrackProvider>
      <GlobalStoreProvider>
        <Theme>
          <ToastProvider>
            <NotificationProvider>
              <ProvideScreenDimensions>{component}</ProvideScreenDimensions>
            </NotificationProvider>
          </ToastProvider>
        </Theme>
      </GlobalStoreProvider>
    </TrackProvider>
  )
}
