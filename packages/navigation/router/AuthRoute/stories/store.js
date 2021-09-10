import React, { cloneElement } from 'react'

import { AuthProvider } from '../../../../authentication/useAuth/index'

const providers = [<AuthProvider key={1} service='firebase' />]

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  )

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={providers}>{children}</ProviderComposer>
)

export default ContextProvider
