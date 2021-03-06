import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { useHistory } from 'react-router-dom'

export default function SignOut(props) {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/')
    }
    signOutUser()
  }, [history, setUser])
  
  return ''
}
