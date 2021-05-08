import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  /*
    Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

    // old style starts
    const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)

    }

    useEffect(async () => {
        getUsers()
    }, [])
    // old style end

    // new style example
    useEffect(() => {
    async function fetchData() {
        // You can await here
        const response = await MyAPI.getData(someId);
        // ...
    }
    fetchData();
    }, [someId]); // Or [] if effect doesn't need props or state     
    */
  // new style
  useEffect(() => {
    async function getUsers() {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    }
    getUsers()
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
