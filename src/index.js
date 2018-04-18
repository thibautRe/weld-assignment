import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'

import FormInput from './components/formInput';

const Form = () => (
  <React.Fragment>
    <h1>Admin</h1>
    <FormInput id="name" label="Name" />
    <FormInput id="surname" label="Surname" />
    <FormInput id="phone" label="Phone" data-regex={/^[0-9]+$/} />
  </React.Fragment>
)

ReactDOM.render(<Form />, document.getElementById('app'))
