/**
 * @example 
 * useOnTrue(sendPushNotification.result, () => {
    toast.showToast({ message: 'Message sent!' })
  })
 */
export default function useOnTrue(condition, callback) {
  useEffect(() => {
    if (condition) {
      callback(condition)
    }
  }, [condition])
}
