// import React from 'react'
// import { useState } from 'react'
// import { createAuthUserWithEmailAndPassword, createUserProfileDocument } from '../../utils/firebase/firebase.utils';
// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';

// const defaultFormFields = {
//     displayName: "",
//     email:"",
//     password:"",
//     confirmPassword:""
// }

// const SignUp = () =>{
//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const {displayName, email, password, confirmPassword} = formFields


//     const resetFormFields = () =>{
//         setFormFields(defaultFormFields)
//     }


//     const handleSubmit = async(event) =>{
//         event.preventDefault();

//         if(password !== confirmPassword){
//             alert('password do not match');
//             return;
//         }

//         try{
//             const {user} = await createAuthUserWithEmailAndPassword(email, password);
//             await createUserProfileDocument(user,{displayName})

//             resetFormFields()
//         }catch (error) {
//             if(error.code === "auth/email-already-in-use"){
//                 alert('Cannot create user, email already in use')
//             }else{
//                 console.log('user creation encountered an error', error)
//             }
//         }
//     }


//     const handleChange = (event)=>{
//         const {name,value} = event.target
//         setFormFields({
//             ...formFields, [name]: value
//         })
//     }

//     return(
//         <div>
//         <h2>Don't have an account</h2>
//         <span>Sign up with your email and password</span>
//         <form onSubmit={handleSubmit}>
//         <FormInput 
//         type="text" 
//         required 
//         label="Display Name"
//         name="displayName" 
//         value={displayName} 
//         handleChange={handleChange}/>

//         <FormInput 
//         type="email" 
//         required 
//         label="Email"
//         name="email" 
//         value={email} 
//         handleChange={handleChange}/>

//         <FormInput 
//         type="password" 
//         required 
//         label="Password"
//         name="password" 
//         value={password} 
//         handleChange={handleChange}/>

//         <FormInput 
//         type="password" 
//         required 
//         label="Confirm Password"
//         name="confirmPassword" 
//         value={confirmPassword} 
//         handleChange={handleChange}/>

//         <CustomButton type='submit'>Sign Up</CustomButton>
//         </form>
//         </div>
//     )
// }

// export default SignUp