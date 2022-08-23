import './App.css'
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [products, setProducts] = useState([]) // initially products is empty array

  const [userId, setUserId] = useState() //no user id by default

  // handler to send data in server
  const sendToBackend = ()=>{
    console.log(username, email, password)
    const data = {username, email, password} 
    axios
    .post('/user/create', data) // .post(URL, dataToSend)
    .then(response=> {
      console.log(response.data)
      setMessage(response.data)
    }) 
  }

  // login Check
  const loginCheck = ()=>{
    axios.post('/user/login', {email, password})
    .then(response => {
      console.log(response) 
      setMessage(response.data.message)
      setProducts(response.data.products)
      setUserId(response.data.user._id)
    })
  }

  // add product for this logged in user using faker data
  const addProduct = ()=>{
    axios.get('/product/add/'+userId)
    .then(response=>{
      setMessage(response.data)
    })
  }

  return (
    <div className='App-header'>
      <div>
        <h3>Create Account </h3>
        <label>Username:</label>
        <input type="text" name='username' onChange={e=>setUsername(e.target.value)}/><br/>
        <label>Email:</label>
        <input type="email" name='email'onChange={e=>setEmail(e.target.value)}/><br/>
        <label>Password:</label>
        <input type="pasword" name='password' onChange={e=>setPassword(e.target.value)}/><br/>
        <button type='button' onClick={sendToBackend}>Send</button>
      </div>

      <h4 style={{color: 'red'}}>{message}</h4>

      <div>
        <h3>Login Form/Sign-in form</h3>
        <label>Email:</label>
        <input type="email" name='email' onChange={e=>setEmail(e.target.value)}/><br/>
        <label>Password:</label>
        <input type="pasword" name='password' onChange={e=>setPassword(e.target.value)}/><br/>
        <button type='button' onClick={loginCheck}>Send</button>
      </div>

      <button type="button" onClick={addProduct}>Add product</button>

      <div>
        {
        products&& 
          <ul>
            {
             products.map(item=>{
              return <li>Title: {item.product_title}</li>
             })
            }
          </ul>
        }
      </div>


    </div>
  );
}

export default App;
