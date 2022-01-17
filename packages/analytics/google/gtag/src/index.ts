declare global {
  interface Window {
    gtag: any
  }
}

/**
 * [Docs](https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data)
 */
export default window.gtag
