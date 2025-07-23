import './App.css'
import { useState } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true // cookie important

const App = () => {

  const [message , setMessage] = useState('')

  const setCookie = async() => {
    const res = await axios.post("http://localhost:5000/set-cookie")
    setMessage(res.data.message)
  }

  const getCookie = async() => {
    const res = await axios.get("http://localhost:5000/get-cookie")
    setMessage(res.data.username ? `Cookie:${res.data.username}` : "No Cookie Found!!!")
  }

  const deleteCookie = async() => {
    const res = await axios.get("http://localhost:5000/delete-cookie")
    setMessage(res.data.message)
  }

  return (
    <div>
      <h2>Cookie Manage by (React + Express)</h2>
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={getCookie}>Get Cookie</button>
      <button onClick={deleteCookie}>Delete Cookie</button>
      <h3>{message}</h3>
    </div>
  )
}

export default App