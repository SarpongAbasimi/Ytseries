import React from 'react'

export const Form = ({ userInput, onFormsumbit, onFormChange }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormsumbit()
  }

  const handleChange = (event) => {
    onFormChange(event.target.value)
  }
  
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='userInput' value={userInput} onChange={handleChange} required></input>
        <input type='submit'></input>
      </form>
    </>
  )
}
