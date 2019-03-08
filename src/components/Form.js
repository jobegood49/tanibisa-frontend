import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  width: 500px;
  margin: 0 auto;
`

const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

export default Form
