import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signIn } from '../../common/auth.js'
import useFormState from '../../store/form.js'
import { Link, useHistory } from 'react-router-dom'

const validate = ({ email, password }) => {
  const errors = {}
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }

  if (!password) {
   errors.password = 'Required'
  } else if (password.length < 6) {
   errors.password = 'Password must contains at least 6 characters'
  }
  return errors;
}

export default function Login () {
  const history = useHistory()
  const [, { setError, setLoading }] = useFormState()

  const handleLogin = async ({ email, password }) => {
    try {
      setError('')
      setLoading(true)
      await signIn(email, password)
      history.push('/')
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <div className='form__container'>
      <div className='form__container__content'>
        <h1 className='form__label'>Log in</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values)
            setSubmitting(false)
          }}
        >
          {({ values, isSubmitting }) => (
            <Form className='form__content'>
              <Field
                type='email'
                name='email'
                placeholder='E-mail address'
                value={values.email}
                className='form__input'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='form__error'
              />
              <Field
                type='password'
                name='password'
                placeholder='Password'
                value={values.password}
                className='form__input'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='form__error'
              />
              <button type='submit' disabled={isSubmitting} className='form__button'>
                Login
              </button>
            </Form>
          )}
        </Formik>
        <p className='form__text'>
          <Link to='/forgot-password' className='link'>Forgot password?</Link>
        </p>
        <p className='form__text'>
          Don't have an account?
          <Link to='/signup' className='link'> Sign up</Link>
        </p>
      </div>
    </div>
  )
}
