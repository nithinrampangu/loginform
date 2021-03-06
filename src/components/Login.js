import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '74vh', width: 300, margin: "0 auto"}
    const avatarStyle = { backgroundColor: '#031734' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
        const login=() => {
            console.warn("state" , this.state)
            fetch('localhost:8080/api/addCustomer' ,{
                method:"POST" ,
                headers: {
                    "Accept":"application/json" ,
                    "Content-Type":"application/json" ,

                },
                body:JSON.stringify(this.state)
            }

            )
        }

    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {/* <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar> */}
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" onChange={(e)=>{this.setState({email:e.target.value})}} />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" onChange={(e)=>{this.setState({password:e.target.value})}} />}
                             />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' onClick={()=>this.login()} variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in" }</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                {/* <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography> */}
            </Paper>
        </Grid>
    )
}

export default Login