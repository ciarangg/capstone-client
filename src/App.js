import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"
import PostList from './components/PostList'
import SplashPage from './components/SplashPage'
import EditPostForm from './components/EditPostForm'

class App extends Component {



  render() {
 
    return (
      
      <Router>  
        
        
       <div className="App">
        

        <Route exact path="/" component={SplashPage}/>
        <Route path='/posts' component={PostList}/>
        

       </div>
       
      </Router>
    );
  }
}

export default App;
