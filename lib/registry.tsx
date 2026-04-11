'use client'

// SSR style injection disabled — not supported in Cloudflare Workers runtime.
// Re-enable if moving to a Node.js host (Vercel, self-hosted, etc.).
//
// import React, { useState } from 'react'
// import { useServerInsertedHTML } from 'next/navigation'
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
//
// export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
//   const [sheet] = useState(() => new ServerStyleSheet())
//
//   useServerInsertedHTML(() => {
//     const styles = sheet.getStyleElement()
//     sheet.instance.clearTag()
//     return <>{styles}</>
//   })
//
//   if (typeof window !== 'undefined') return <>{children}</>
//
//   return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
// }

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
