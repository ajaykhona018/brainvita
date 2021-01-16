import React, { useContext } from 'react'
import { GameContext } from '../state-management/context'
import { Button, FormContainer } from '../styles'

const Form = () => {

  const { state, dispatch } = useContext(GameContext)
  const [username, setUsername] = React.useState<string>('')
  const [successMessage, setSuccessMessage] = React.useState<string>('')
  const [errorMessage, setErrorMessage] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = new RegExp(/^[a-z0-9_ ]+$/i)
    if (regExp.test(e.target.value)) {
      setErrorMessage('')
    } else {
      setErrorMessage('Invalid Player name. Player name must be alphanumeric only.')
    }
    setUsername(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (errorMessage) {
      return
    }

    setErrorMessage('')
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'post',
      body: JSON.stringify({
        user: username,
        score: state.remainingMarbles
      })
    }).then((response) => response.json()).then(() => {
      setSuccessMessage('Congratulations!! Score submitted successfully.')
      setTimeout(() => {
        setSuccessMessage('')
      }, 4000)

      setUsername('')
      dispatch({ type: 'RESET_BOARD' })

    }).catch((errorResponse) => {
      console.log(errorResponse)
      setErrorMessage('Oops! Something went wrong. Please try again.')

    }).finally(() => {
      setLoading(false)
    })
  }

  return <FormContainer onSubmit={handleSubmit}>
    <div className='form-field'>
      <input required value={username} onChange={handleChange}
        id='username' name='username'
        placeholder='Enter your name'
      />
    </div>
    <div className='form-actions'>
      <Button onClick={handleSubmit} disabled={!username || loading} id='submit'>Submit</Button>
      <Button
        onClick={() => dispatch({ type: 'RESET_BOARD' })}
        disabled={state.remainingMarbles === 32 || loading}
        id='reset'>Reset Game</Button>
    </div>
    <div className='messages'>
      <div className="message-success">{successMessage}</div>
      <div className="message-error">{errorMessage}</div>
    </div>
  </FormContainer>
}

export default Form