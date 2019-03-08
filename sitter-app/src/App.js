import React, { Component } from 'react';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import ListUsers from './components/ListUsers';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
          
      //   </header>
      //   <main>
      //     <ul>
      //       <li><a href="#">Create user</a></li>
      //       <li><a href="#">List users</a></li>
      //     </ul>
      //   </main>
      //   <footer></footer>
      // </div>
      <Router>
        <div className="App">
          <header className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create-user">Create User</Link></li>
              <li><Link to="/create-user/test">Test</Link> </li>
              <li><Link to="/list-users">List Users</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create-user" component={CreateUser} />
              <Route path="/create-user/test" render={() => {
                return (
                  <h1>Test page!</h1>
                );
              }} />
              <Route path="/list-users" component={ListUsers} />
            </Switch>
            
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
