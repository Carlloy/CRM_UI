import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LoginForm from '../forms/loginform/LoginForm'
import { login } from '../../actions/auth'

class LoginPage extends React.Component{
    submit = (data) => {
        this.props.login(data).then(() => this.props.history.push('/'));
    };

    render(){
        return (
            <div>
                <h1>Simple CRM</h1>

                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
      push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};
export default connect(null, { login })(LoginPage);