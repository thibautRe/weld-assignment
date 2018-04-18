import React from 'react'
import styled, { keyframes } from 'styled-components'

const Label = styled.label`
  line-height: 1em;
  color: #999;
  text-transform: uppercase;
  display: block;
  font-size: .7em;
  padding-left: 10px;
`

const Input = styled.input`
  border: 1px solid transparent;
  transition: border-color .2s;
  padding: 8px 10px;
  margin-bottom: 20px;

  &:hover, &:focus {
    border: 1px solid #999;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const Saved = styled.span`
  color: #93db60;
  padding-left: 12px;
  animation: ${fadeOut} .5s .5s forwards;
`

const LabelInput = ({ label, value, showSaved, onChange }) => (
  <div>
    <Label>{label}</Label>
    <Input value={value} onChange={e => onChange(e.target.value)} />
    {showSaved && (
      <Saved>Saved!</Saved>
    )}
  </div>
)

export default LabelInput
