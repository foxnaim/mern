import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  return (
    <div className='mt-20 grow flex item-center justify-around'>
      <div className='-mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto'>
          <input type="text"
            placeholder='User'
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })} />

          <input type='email'
            placeholder='@gmail.com'
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })} />

          <input type='password'
            placeholder='password'
            value={data.password}
            onChange={e => setData({ ...data, password: e.target.value })} />

          <button className='primary' onClick={(e) => {
            e.preventDefault()
            fetch("http://localhost:4000/reg", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
          }}>Login</button>
          <div className='text-center py-2 text-gray-500'>
            Allready a member? <Link className='underline text-gray-500' to={'/Login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}