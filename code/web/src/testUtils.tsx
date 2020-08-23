import React, { ReactElement, ComponentType } from 'react'
import { render as rtlRender, RenderResult } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer, rootState } from 'store'

function render(
  ui: ReactElement,
  { store = createStore(rootReducer, rootState), ...renderOptions } = {}
): RenderResult {
  function Wrapper({ children }: any): ReactElement {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
