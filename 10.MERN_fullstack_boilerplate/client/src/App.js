import './App.css'
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  // handler to send data in server
  const sendToBackend = ()=>{
    console.log(username, email, password)
    const data = {username, email, password} 
    axios
    .post('/user/create', data) // .post(URL, dataToSend)
    .then(response=> {
      console.log(response.data)
      setMessage(response.data)
    }) // response from backend
  }
  return (
    <div className='App-header'>
    <div>
      <h3>Registration </h3>
      <label>Username:</label>
      <input type="text" name='username' onChange={e=>setUsername(e.target.value)}/><br/>
      <label>Email:</label>
      <input type="email" name='email'onChange={e=>setEmail(e.target.value)}/><br/>
      <label>Password:</label>
      <input type="pasword" name='password' onChange={e=>setPassword(e.target.value)}/><br/>
      <button type='button' onClick={sendToBackend}>Send</button>
    </div>
    <h4 style={{color: 'red'}}>{message}</h4>
    </div>
  );
}

export default App;
