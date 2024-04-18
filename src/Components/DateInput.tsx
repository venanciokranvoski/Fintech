import React from 'react'


const StyleLabelGlobal: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)"
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: 700,
  ...StyleLabelGlobal,

}

const InputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...StyleLabelGlobal
  


}

type IDateInput = React.ComponentProps<'input'> & {
    label: string;
}

function DateInput({label, ...props}: IDateInput) {
  return (
    <div>
        <label style={labelStyle} htmlFor={label}>{label}</label>
        <input style={InputStyle} id={label} name={label} type="date" {...props} />
    </div>
  )
}

export default DateInput