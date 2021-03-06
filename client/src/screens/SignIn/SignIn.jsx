import './SignIn.css'
import { useState } from 'react'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'

export default function SignIn(props) {
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSignIn = async (e) => {
    e.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'INVALID CREDENTIALS',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          <span>{form.errorMsg}</span>
        </button>
      )
    } else {
      return (
        <button className='sign-in-btn' type='submit'>
          SIGN IN
        </button>
      )
    }
  }

  const { email, password } = form

  return (
    <Layout>
      <div className='signin-container'>
        <div className='signin-form-container'>
          <h3>SIGN IN</h3>
          <form onSubmit={onSignIn}>
            <input
              required
              type='text'
              name='email'
              value={email}
              placeholder='EMAIL'
              onChange={handleChange}
            />
            <input
              required
              type='password'
              name='password'
              value={password}
              placeholder='PASSWORD'
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
        <div className='signup-container-create'>
          <h3>NEW CUSTOMER?</h3>
          <Link to='/sign-up'>
            <button className='new-customer-btn'>CREATE ACCOUNT</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
