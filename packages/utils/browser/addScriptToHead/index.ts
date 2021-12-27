export default function addScriptToHead(script: string) {
  document.head.insertAdjacentHTML('beforeend', script)
}
