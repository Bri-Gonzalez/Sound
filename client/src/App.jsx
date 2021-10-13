import './App.css'
import { useState, useEffect } from 'react'
import Home from './screens/Home/Home'
import Products from './screens/Products/Products'
import ProductCreate from './screens/ProductCreate/ProductCreate'
import ProductEdit from './screens/ProductEdit/ProductEdit'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import { Route, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className='App'>
      <Route exact path='/'>
        <Home user={user} />
      </Route>
      <Route exact path='/products'>
        <Products user={user} />
      </Route>
      <Route exact path='/products/:id'>
        <ProductDetail user={user} />
      </Route>
      <Route exact path='/products/:id/edit'>
        {user ? <ProductEdit user={user} /> : <Redirect to='/sign-up' />}
      </Route>
      <Route path='/add-product'>
      {user ? <ProductCreate user={user} /> : <Redirect to='/sign-up' />}
      </Route>
      <Route path='/sign-up'>
        <SignUp setUser={setUser}/>
      </Route>
      <Route path='/sign-in'>
        <SignIn setUser={setUser}/>
      </Route>
      <Route path='/sign-out'>
        {user ? <SignOut setUser={setUser} /> : <Redirect to='/sign-up' />}
      </Route>
    </div>
  )
}

export default App
