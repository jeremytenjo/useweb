export default function handleOnInput(textareaEl) {
  textareaEl.style.height = '5px'
  textareaEl.style.height = `${textareaEl.scrollHeight}px`
}
