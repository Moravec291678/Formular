import React from 'react'
import { useState } from "react";


function App() {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  const [oneUser, setOneUser] = useState({ fullName: "", email: "", age: "" });
  const [users, setUsers] = useState([]);

  const formChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setOneUser({ ...oneUser, [name]: value })
  }

  const formSubmit = (event) => {
    event.preventDefault()

    if (oneUser.fullName && oneUser.email && oneUser.age) {
      const newUser = {
        fullName: oneUser.fullName,
        email: oneUser.email,
        age: oneUser.age
      }
      setUsers((users) => {
        return [...users, newUser]
      })
      setOneUser({ fullName: "", email: "", age: "" })
    } else {
      console.log("Neco nebylo vyplneno!");
    }
    // setFullName("")
    // setEmail("")
    // setAge("")
  }

  return (
    <article>
      <form>

        <input
          className='userInfo'
          type="text"
          placeholder="Jmeno"
          value={oneUser.fullName}
          onChange={formChange}
          name='fullName'
        />

        <input
          className='userInfo'
          type="email"
          placeholder="E-mail"
          value={oneUser.email}
          onChange={formChange}
          name='email'
        />

        <input
          className='userInfo'
          type="text"
          placeholder="Věk"
          value={oneUser.age}
          onChange={formChange}
          name='age'
        />

        <input onClick={formSubmit} type="submit" />
      </form>

      {users.map((oneUser, index) => {
        const { fullName, email, age } = oneUser
        return <div className='item' key={index}>
          <h2>{fullName}</h2>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      })}
    </article>
  )
}

export default App
