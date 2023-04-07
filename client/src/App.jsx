
import './App.css'

import { Home } from './pages/Home/Home'
import Signin from './pages/SignIn/Signin'
import { SignUp } from './pages/SignUp/Signup'
import Payment from './pages/payment/Payment'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
function App() {


  return (
 <>

<Router>

<Routes>
  <Route    path='/Signin' element={<Signin/>}/>
  <Route  path='/' element={<SignUp/>}/>
  <Route path='/Home' element={<Home/>} />
<Route  path='/payment' element={<Payment/>}/>
</Routes>
</Router>
</>
   
  )
}

export default App
