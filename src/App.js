import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Nav from './components/Nav'
import Posts from './components/Posts'
import User from './components/User'
import Post from './components/Post'

function App() {
  return (
    <Router>
      <Layout>
         <Switch>
            <Route
              exact
              path='/'
              render={() => 
                <><Nav/><Posts type='top' /></>
              }
            />
            <Route 
              exact
              path='/new'
              render={() => 
                <><Nav/><Posts type='new' /></>
              }
            />
            <Route path='/user' component={User}/>
            <Route path='/post' component={Post}/>
            />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
