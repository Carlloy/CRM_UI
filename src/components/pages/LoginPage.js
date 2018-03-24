import React from 'react';
import LoginForm from '../forms/loginform/LoginForm'

class LoginPage extends React.Component{
    submit = (data) => {
        console.log(data);
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

export default LoginPage;