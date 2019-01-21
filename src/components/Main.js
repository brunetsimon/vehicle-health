import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardPage from './DashboardPage'
import AuthPage from './AuthPage';
import FakeData from './FakeData';
import { auth } from '../fire';

class Main extends React.Component {
  state = {
    authed: false,
    loading: true
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        });
      } else {
        this.setState({
          authed: false,
          loading: false,
        });
      }
    });
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {

    if(this.state.loading) {
      return (<p>Loading</p>);
    }
    return (
      <main>
        <Switch>
          {/* <Redirect from="/" to ="/dashboard"/> */}
          <PrivateRoute authed={this.state.authed} path="/dashboard" component={DashboardPage} />
          <PrivateRoute authed={this.state.authed} path="/fake" component={FakeData} />
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
