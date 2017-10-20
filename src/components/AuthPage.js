import React from 'react'
import { auth } from '../fire'
import { Redirect } from 'react-router-dom';

class AuthPage extends React.Component {

  state = {
    redirect: false,
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { this.setState({redirect: true}); }, (error) => {
        const errorMessage = error.message;
        console.error('signIn', errorMessage);
      });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/dashboard" />
      )
    }
    return (
      <div className="login-register">
        <div className="login-box">
          <div className="white-box">
            <form className="form-horizontal form-material" id="loginform" onSubmit={this.handleSubmit}>
              <h3 className="box-title m-b-20">Sign In</h3>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input className="form-control" type="text" required="" placeholder="Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input className="form-control" type="password" required="" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default AuthPage
