import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Nav from './components/Nav'
import Posts from './components/Posts'
import User from './components/User'

function App() {
  return (
    <Router>
      <Layout>
        <Nav/>
         <Switch>
            <Route
              exact
              path='/'
              render={() => <Posts type='top' />}
            />
            <Route 
              exact
              path='/new'
              render={() => <Posts type='new' />}
            />
            <Route path='/user' component={User}/>
            />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;
