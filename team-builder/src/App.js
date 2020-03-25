import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initialFreinds = [
  {id: [],fname: 'fredo', lname: 'villasenor'},
  {id: [], fname: 'isabel', lname: 'villasenor'},
  {id: [], fname: 'carlos', lname: 'bautista'}
]

function App() {

  const [freinds, setFreinds] = useState([])
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',

  })
  const onInputChange = event => {
  setForm({
    ...form,[event.target.name]:event.target.value
  }) 
  }
  const onFormSubmit = event => {
    event.preventDefault()
    setFreinds([...freinds, form])
  }
  return (
    <div className="App">
  <Form 
    onInputChange={onInputChange}
    form={form}
    onFormSubmit={onFormSubmit}
    />

    <h3>list of freinds:</h3>
    {
      freinds.map((fr, index) => <div key={index}>{fr.name}{fr.email} {fr.role} </div>)
    }

    </div>
  );
}
function Form(props){
return (
<form onSubmit={props.onFormSubmit}>
      <label> name
      <input
          onChange={(event) => props.onInputChange(event)} 
          value={props.form.name}
          name='name'
          type='text'
        />
      </label><br />

      <label> email
      <input
          onChange={(event) => props.onInputChange(event)}
          value={props.form.email}
          name='email'
          type='text'
        />
      </label><br />
      <label> role
      <input
          onChange={(event) => props.onInputChange(event)}
          value={props.form.role}
          name='role'
          type='text'
        />
      </label><br />

      <input type='submit' />
    </form>
)
}

export default App;




  {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


       
