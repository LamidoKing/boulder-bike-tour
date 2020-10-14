import { useEffect, useState } from "react"

const useForm = ({ initialState }) => {
  const [values, setValues] = useState(initialState)
  const [toggleSummitButton, setToggleSummitButton] = useState(true)
  const [body, setBody] = useState()

  const handleChange = (prop) => (event) => {
    const { value } = event.target

    setValues({ ...values, [prop]: value })
  }

  const handleSummit = () => {
    setBody(values)
  }

  const empathyField = []
  useEffect(() => {
    const valuesKeys = Object.keys(values)

    valuesKeys.map((key) => {
      if (!values[key]) {
        setToggleSummitButton(true)
        empathyField.push(key)
      }
      return ""
    })

    if (empathyField.length === 0) {
      setToggleSummitButton(false)
    }
  }, [values, empathyField])

  return {
    values,
    handleChange,
    toggleSummitButton,
    empathyField,
    body,
    handleSummit,
  }
}

export default useForm
