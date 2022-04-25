import React, {Component} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './routes/homepage/homepage.component';
import ShopPage from './routes/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './routes/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './utils/firebase/firebase.utils'



class App extends Component {
  constructor(){
    super();

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user =>{
      // this.setState({currentUser: user})
      createUserProfileDocument(user);
      // console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
      <Routes>
      <Route path='/' element={<Header currentUser={this.state.currentUser}/>}>
        <Route  index element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Route>
      </Routes>
      </div>
    );
  }
  
}

export default App;
