import './App.css';
import { useState, useEffect } from 'react'
import Home from './screens/Home/Home'
import Products from './screens/Products/Products'
import ProductCreate from './screens/ProductCreate/ProductCreate'
import ProductEdit from './screens/ProductEdit/ProductEdit'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import { Route, Redirect } from 'react-router-dom'
// import { verifyUser } from './services/users'


function App() {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser()
  //     user ? setUser(user) : setUser(null)
  //   }
  //   fetchUser()
  // }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} />
      </Route>
    </div>
  );
}

export default App;
