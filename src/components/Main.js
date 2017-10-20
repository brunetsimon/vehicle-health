import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import AuthPage from './AuthPage';
import { auth } from '../fire';

class Main extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return (
      <main>
        <Switch>
          {/* <Redirect from="/" to ="/dashboard"/> */}
          <PrivateRoute authed={this.state.authed} path="/dashboard" component={DashboardPage} />
          <Route path="/login" component={AuthPage} />
        </Switch>
      </main>
    );
  }
}

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route {...rest} render={props => (
    authed=== true ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
      }}/>
    )
  )}/>
)

export default Main
