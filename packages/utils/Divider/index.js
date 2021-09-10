export default function Divider({
  style = {},
  color = 'lightgrey',
  className = 'divider',
  ...rest
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: `var(--color-${color})`,
        height: '1px',
        width: '100%',
        ...style,
      }}
      {...rest}
    />
  )
}
