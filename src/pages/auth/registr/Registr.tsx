import React from 'react'
import {FormControl, FormGroup, FormLabel, TextField, Grid} from '@material-ui/core'
import {useFormik} from "formik";
import {SuperButton} from "../../../components/superButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {registrTC} from "../../../store/reducers/authReducer";
import {RootStateType} from "../../../store/store";
import { Redirect } from 'react-router-dom';


type FormikErrorType = {
    email?: string
    password?: string
    repeatPassword?: string
}

export const Registr = () => {

    const dispatch = useDispatch()

    const isLogin = useSelector<RootStateType, boolean>(state => state.auth.isLogin)

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
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
            if (!values.repeatPassword) {
                errors.repeatPassword = 'Repeat password is required'
            }
            if (values.repeatPassword.length < 3) {
                errors.repeatPassword = 'Password length at least 3 characters '
            }
            if (values.repeatPassword !== values.password) {
                errors.repeatPassword = 'Password mismatch'
            }
            return errors
        },

        onSubmit: values => {
            dispatch(registrTC(values.email, values.password))
            formik.resetForm()
        },
    });

    if(isLogin){
        debugger
        return <Redirect to={'/login'}/>
    }

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
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

                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                        <TextField

                            type="password"
                            label="Repeat password"
                            margin="normal"
                            id="repeatPassword"

                            {...formik.getFieldProps('repeatPassword')}
                        />
                        {formik.touched.repeatPassword && formik.errors.repeatPassword ?
                            <div>{formik.errors.repeatPassword}</div> : null}

                        <SuperButton type={'submit'} name={'Send'}
                                     style={{backgroundColor: 'lightgrey'}}>Login</SuperButton>


                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}