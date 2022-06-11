import { useEffect } from 'react'

import firebaseAnalytics from '../../../../../analytics/index'
import useNextRouter from '../..'

export default function useGAnalyticsPageViewNext() {
  const router = useNextRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      firebaseAnalytics().logEvent('page_view')
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
