import React from 'react'
import {Route,Switch} from 'react-router-dom'
// import AuthedHome from './components/AuthedHome/AuthedHome'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
// import Registration from './components/SignUp/Registration/Registration'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signup' component={SignUp}/>
      </Switch>
      {/* <Home /> */}
      {/* <AuthedHome /> */}
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
