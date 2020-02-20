import React from 'react';
import axios from 'axios';

const registerUrl = "http://localhost:5000/registration";

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users_email: '',
      password: '',
      confPass: '',
      users_first_name: '',
      users_last_name: ''
    }
  }

  handleOnChange = (e) => {
    const { target } = e;
    if (target.value.length <= 0) {
      this.setState({ [target.name]: target.name });
    }
    else { this.setState({ [target.name]: target.value }); }
  }

  handleCheck = (e) => {
    const { target } = e;
    if (this.state.password !== target.value) {
      this.setState({ confPass: 'confPass' });
    }
    else { this.setState({ [target.name]: target.value }); }
  }

  handleRegister = async () => {
    if (this.state.password === this.state.confPass) {
      const result = await axios.post(registerUrl, this.state);
      const { message, redirect } = result.data;
      alert(message);
      if (redirect === true) {
        console.log('-- redirect true');
        this.props.history.push('/login')
      }
    } else {
      alert('passwords does not match');
    }
  }


  render() {
    return (
      <div className="component">
        <div className="forms_us">

          <h1 className="form_tittle">Registration :</h1>
          <form>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="users_email" className="form-control" id="email" placeholder="Enter your email"
                onChange={this.handleOnChange} />
              {(this.state.users_email === 'users_email') ? <div className="not_filed"><p>You can't be registered without Email!</p></div> : null}

            </div>

            <div className="form-group">
              <label htmlFor="password">Password must contain only 4 digits!</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                onChange={this.handleOnChange} />
              {(this.state.password === 'password') ? <div className="not_filed"><p>You can't be registered without Password!</p></div> : null}
            </div>

            <div className="form-group">
              <label htmlFor="confPass"> Password Confirmation</label>
              <input type="password" name="confPass" className="form-control" id="confPass" placeholder="Password"
                onChange={this.handleCheck} />
              {(this.state.confPass === 'confPass') ? <div className="not_filed"><p>Your Password don't match!</p></div> : null}
            </div>

            <div className="form-group">
              <label htmlFor="F_name">First name must contain only letters and not less than two.</label>
              <input type="text" name="users_first_name" className="form-control" id="F_name" placeholder="First name"
                onChange={this.handleOnChange} />
              {(this.state.users_first_name === 'users_first_name') ? <div className="not_filed"><p>Names should be filed!</p></div> : null}
            </div>

            <div className="form-group">
              <label htmlFor="L_name">Last name must contain only letters and not less than two.</label>
              <input type="text" name="users_last_name" className="form-control" id="L_name" placeholder="Last name"
                onChange={this.handleOnChange} />
              {(this.state.users_last_name === 'users_last_name') ? <div className="not_filed"><p>Names should be filed!</p></div> : null}
            </div>

            <button type="button" className="btn btn-success btn-block loginBut"
              onClick={this.handleRegister}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}