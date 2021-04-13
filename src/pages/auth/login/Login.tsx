import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from "formik";
import {SuperButton} from "../../../components/superButton/SuperButton";
import { NavLink } from 'react-router-dom';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },

        validate(values) {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required'
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

                errors.email = 'Invalid email address'

            }
            if (!values.password) {
                errors.password = 'Password is required'
            }
            if (values.password.length < 3) {
                errors.password = 'Password length at least 3 characters '
            }
            return errors
        },
        onSubmit: values => {

            formik.resetForm()
        },
    });




    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit} >
                <FormControl>
                    <FormLabel>

                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            id="email"
                            type="text"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            id="password"
                            // onBlur={formik.handleBlur}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox/>}
                            id='rememberMe'
                            {...formik.getFieldProps('rememberMe')}
                            checked={formik.values.rememberMe}
                        />
                        <NavLink to={'/passwordRecovery'}>Forgot?</NavLink>
                        <SuperButton type={'submit'} name={'Send'} style={{backgroundColor: 'lightgrey'}}>Login</SuperButton>
                        <NavLink to={'/registr'}>Registration</NavLink>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
