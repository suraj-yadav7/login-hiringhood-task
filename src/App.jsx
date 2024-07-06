import { useState } from 'react'

import './App.css'

function App() {

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  // handles input changes of form
  const handleChange = (e)=>{
    const {name, value}=e.target
    setFormData((formData)=> ({...formData, [name]:value}) )
  }
  // Test credentials
  let cEmail="test@test.com"
  let cPassword= "12345678"

  // handle submit form
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(formData.email===cEmail && formData.password===cPassword){
      alert("Login Successfull")
    }
    else{
      alert("Wrong Credentials, Try again!")
      setFormData({
        email:'',
        password:''
      })
    }
  }
  return (
    <>
      <div className='border-4 border-yellow-300 p-16 rounded-lg'>
          <form onSubmit={handleSubmit} >
            <div className='flex flex-col gap-4 justify-center items-center'>
              <h3 className='text-2xl font-bold mb-4 underline'>User Login Form</h3>
              <label className='text-lg px-2 '>
                Email: 
                  <input type='email'  className="border border-blue-400 rounded-md px-5" name="email" value={formData.email} placeholder='enter registered email' onChange={handleChange}/>
              </label>
              <label className='text-lg'>
                Password: 
                  <input type="password" className="border border-blue-400  rounded-md px-2"  name="password" value={formData.password} placeholder='your password here' onChange={handleChange}/>
              </label >
                <div className='py-2'>
                    <button type='submit' className='border border-green-400 rounded-md '>Login</button>
                </div>
            </div>
          </form>
      </div>
    </>
  )
}

export default App
