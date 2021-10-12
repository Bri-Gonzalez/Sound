import './SignUp.css'
import { useState } from 'react'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'

export default function SignUp(props) {
   const history = useHistory()

   const [form, setForm] = useState({
      firstname: '',
      lastname: '',
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

   const onSignUp = async (e) => {
      e.preventDefault()
      const { setUser } = props
      try {
         const user = await signUp(form)
         setUser(user)
         history.push('/')
      } catch (error) {
         console.error(error)
         setForm({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            isError: true,
            errorMsg: 'Sign Up Details Invalid',
         })
      }
   }

   const renderError = () => {
      const toggleForm = form.isError ? 'danger' : ''
      if (form.isError) {
         return (
            <button type='submit' className={toggleForm}>
               {form.errorMsg}
            </button>
         )
      } else {
         return <button type='submit'>CREATE ACCOUNT</button>
      }
   }

   const {firstname, lastname, email, password} = form

   return (
      <div className='form-container'>
         <h3>CREATE ACCOUNT</h3>
         <form onSubmit={onSignUp}>
            <div className='name'>
               <input
                  required
                  type='text'
                  name='firstname'
                  value={firstname}
                  placeholder='FIRST NAME'
                  onChange={handleChange}
               />
               <input
                  required
                  type='text'
                  name='lastname'
                  value={lastname}
                  placeholder='LAST NAME'
                  onChange={handleChange}
               />
            </div>
            <div className='credentials'>
               <input
                  required
                  type='email'
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
            </div>
            {renderError()}
         </form>
      </div>
   )
}
