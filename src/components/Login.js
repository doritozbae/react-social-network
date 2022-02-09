import React from 'react'
// import {Formik} from 'formik'
// import * as Yup from 'yup'
// import * as EmailValidator from "email-validator";
// import {Redirect} from "react-router-dom";
import { login } from "./redux/authReduer";
import { Route, Routes } from "react-router-dom";
import Profile from './Profile';

import {Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField} from "@mui/material";
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from "react-redux";

// const ValidatedLoginForm = () => (

//   // const dispatch = useDispatch();
//   // const {register, handleSubmit, setError, formState: {errors}} = useForm<FormDataType>({mode: 'onBlur'});
//   // const isAuth = useSelector<AppStateType, boolean>(st => st.auth.isAuth);
//   // const captcha = useSelector<AppStateType, string | null>(st => st.auth.captcha);
//   // const appError = useSelector<AppStateType, string | null>(st => st.app.error)

//   // const onSubmit = (data) => {
//   //     const {email, password} = data
//   //     dispatch(login(email, password));
//   // }

//   // if (isAuth) {
//   //     return <Redirect to={'/profile'}/>
//   // }


//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values) => {
//       // debugger;
//       login(values.email, values.password);
//       console.log(values.email, values.password);
//       setTimeout(() => {
//         console.log("Logging in", values);
//         // setSubmitting(false);
//       }, 500);
//     }}

//     validate={values => {
//       let errors = {};
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (!EmailValidator.validate(values.email)) {
//         errors.email = "Invalid email address.";
//       }
  
//       const passwordRegex = /(?=.*[0-9])/;
//       if (!values.password) {
//         errors.password = "Required";
//       } else if (values.password.length < 8) {
//         errors.password = "Password must be 8 characters long.";
//       } else if (!passwordRegex.test(values.password)) {
//         errors.password = "Invalid password. Must contain one number.";
//       }
  
//       return errors;
//     }}

//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email()
//         .required("Required")
//     })}

//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email()
//         .required("Required"),
//       password: Yup.string()
//         .required("No password provided.")
//         .min(4, "Password is too short - should be 4 chars minimum.")
//         .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     })}
//   >
//     {props =>{ 
//       const {values, touched, errors, isSubmitting,handleChange,handleBlur,handleSubmit} = props;
      
//       // const onSubmit = (formData) => {
//       //     login(formData.email, formData.password);
//       // }
//     //   const onSubmit = () => {
//     //     console.log('sks')
//     // }

//     // if (props.isAuth ) {
//     //   return (
//     //       <Routes>
//     //           <Route path="/" element={<Profile />} />
//     //       </Routes>
//     //   );
//     // }

//       return (
//         <form onSubmit={handleSubmit}>

//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="text"
//           placeholder="Enter your email"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           className={errors.email && touched.email && "error"}
//         />
//         {errors.email && touched.email && (
//           <div className="input-feedback">{errors.email}</div>
//         )}

//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           className={errors.password && touched.password && "error"}
//         />
//         {errors.password && touched.password && (
//           <div className="input-feedback">{errors.password}</div>
//         )}

//           <button type="submit" disabled={isSubmitting}>
//             Login
//           </button>

//         </form>
//       );
//     }}
//   </Formik>
// );

export const Login = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, setError, formState: {errors}} = useForm({mode: 'onBlur'});
  const isAuth = useSelector(st => st.auth.isAuth);

  const onSubmit = (data) => {
    const {email, password, rememberMe, captchaText} = data
    dispatch(login(email, password, rememberMe, captchaText));
}

if (isAuth ) {
   return (
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    );
  }

  return <Grid container justifyContent={'center'}>
      <Grid item justifyContent={'center'}>
          <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                  <TextField label="Email"
                             margin="normal"
                             {...register('email', {
                                 required: 'required',
                                 pattern: {
                                     message: 'invalid email',
                                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                 }
                             })}
                  />
                  {errors?.email &&
                  <div style={{color: 'red'}}>{errors?.email?.message || 'error'}</div>}

                  <TextField type="password" label="Password"
                             margin="normal"
                             {...register('password', {
                                 required: 'required',
                                 minLength: {
                                     value: 4,
                                     message: 'min 4 symbols'
                                 }
                             })}
                  />
                  {errors?.password &&
                  <div style={{color: 'red'}}>{errors?.password?.message || 'error'}</div>}

                  <FormControlLabel label={'Remember me'} control={
                      <Checkbox    {...register('rememberMe')}
                      />}
                  />
                  {/* {captcha && <div>
                      <img src={captcha} alt=""/>
                      <TextField label="Captcha"
                                 margin="normal"
                                 {...register('captchaText', {
                                     required: 'required'
                                 })}
                      /> */}
                  {/* </div>} */}
                  <Button type={'submit'} variant={'contained'} color={'primary'}>
                      Login
                  </Button>
                  {/* {appError && <div>{appError} </div>} */}
              </FormGroup>
          </form>
      </Grid>
  </Grid>
}


export default Login;