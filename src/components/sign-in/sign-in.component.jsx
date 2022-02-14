import React, {Component} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state ={
            email:'',
            password:''
        }

    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password:''})
    }

    handleChange = e =>{
        const {value,name} = e.target
        this.setState({[name]: value})
    }


    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput 
            name='email'
            type='email' 
            label="Email"
            value={this.state.email} 
            required
            handleChange={this.handleChange} />
            
            <FormInput 
            name='password' 
            type='password' 
            label="Password"
            value={this.state.password} 
            required
            handleChange={this.handleChange} />
            
            <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign In With Google
                </CustomButton>
            </div>
            </form>
            </div>
        )
    }
}

export default SignIn