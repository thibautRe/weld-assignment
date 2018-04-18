import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

import Input from './input'

const API = 'https://simple-rest-weld.herokuapp.com/'

const Error = styled.div`
  color: #ed6449;
`

class FormInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', showSaved: false, error: '' }

    this.onChange = this.onChange.bind(this)

    this.debouncedSave = debounce(async value => {
      this.setState({ showSaved: false, error: '' })
      try {
        const response = await fetch(API, { method: 'PUT', body: JSON.stringify({ [this.props.id]: value }) })
        this.setState({ showSaved: true })
      } catch (e) {
        this.setState({ error: e.message })
      }
    }, 500)
  }

  async componentDidMount() {
    const response = await fetch(API)
    const json = await response.json()

    this.setState({ value: json[this.props.id]})
  }

  onChange(value) {
    if (this.props.regex && !this.props.regex.test(value)) {
      this.setState({ error: 'Regex not validated'})
      return
    }

    this.setState({ value: value || '' })
    this.debouncedSave(value)
  }

  render() {
    return (
      <React.Fragment>
        <Input
          label={this.props.label}
          value={this.state.value}
          showSaved={this.state.showSaved}
          onChange={this.onChange}
        />
        {this.state.error && (
          <Error>{this.state.error}</Error>
        )}
      </React.Fragment>
    )
  }
}

export default FormInput
