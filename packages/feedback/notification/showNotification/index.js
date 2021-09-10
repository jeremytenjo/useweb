/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification|Docs}
 */
export default function showNotification({ body, icon, title }) {
  const options = {
    body,
    icon,
  }
  const notification = new Notification(title, options)

  return notification
}
