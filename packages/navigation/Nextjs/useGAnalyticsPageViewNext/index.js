import { useEffect } from 'react'
import { useRouter } from 'next/router'

import firebaseAnalytics from '../../../../../analytics/index'

export default function useGAnalyticsPageViewNext() {
  const router = useRouter()

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
