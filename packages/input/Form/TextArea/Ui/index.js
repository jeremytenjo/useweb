export default function Ui({ handleOnInput, props }) {
  const textareaRef = useRef(null)

  return (
    <props.Styles>
      <textarea
        ref={textareaRef}
        onInput={() => handleOnInput(textareaRef.current)}
        placeholder={props.placeholder}
        name={props.name}
        style={props.style}
        defaultValue={props.defaultValue}
      />
    </props.Styles>
  )
}
