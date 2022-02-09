import './App.css';
import React from 'react';
import {Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar.js';
import UsersContainer from './components/UsersContainer.js';
import {BrowserRouter, Switch, Routes, Route} from "react-router-dom";
import MessagesContainer from './components/MessagesContainer.js';
import ProfileContainer from './components/ProfileContainer';
import HeaderContainer from './components/HeaderContainer';
import LoginForm from './components/Login';
// import {logout} from './components/redux/authReduer'
import {connect} from "react-redux"
import { compose } from "redux"
import { initializeApp } from './components/redux/appReducer';
import Preloader from './components/Preloader';

// // const Sidebar = lazy(() => import('./components/Sidebar.js'));
// const UsersContainer = lazy(() => import('./components/UsersContainer.js'));
// const MessagesContainer = lazy(() => import('./components/MessagesContainer.js'));
// const ProfileContainer = lazy(() => import('./components/ProfileContainer'));
// // const HeaderContainer = lazy(() => import('./components/HeaderContainer'));
// const Preloader = lazy(() => import('./components/Preloader'));
// const LoginForm = lazy(() => import('./components/Login'));

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.initializeApp();
  }

  render() {
    console.log(this.props)
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter> 
        
        <div className="App">
          <HeaderContainer/>
          <div className="App-container"> 
            <Sidebar />
            <div className="App-container_mainsect"> 
            {/* <Suspense fallback={<Preloader/>}>
            <Switch> */}
                <Routes>
                  <Route path="/Messages/*" element={<MessagesContainer state={this.props.state}/>}/>
                  <Route path="/profile/:userId"  element={<ProfileContainer state={this.props.state}/>}/>
                  <Route path="/Users"  element={<UsersContainer/>}/>
                  <Route path="/login"  element={<LoginForm />}/>
                </Routes>
              {/* </Switch>
            </Suspense> */}
            </div>
          </div>
        </div>
        
      </BrowserRouter>
    );
  }
}



const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(

  connect(mapStateToProps, { initializeApp })
)(App);