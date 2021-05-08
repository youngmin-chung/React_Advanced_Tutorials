import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'john',
    age: 24,
    message: 'random message',
  })

  const [name, setName] = useState('john')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')
  // change the default message to 'hello world!!!' here
  const changeMessage = () => {
    setMessage('Hello World!!!')
  }
  // console.log(person)
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
