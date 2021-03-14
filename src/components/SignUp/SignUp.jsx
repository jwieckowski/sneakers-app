import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signUp } from '../../common/auth.js'
import useFormState from '../../store/form.js'
import { Link, useHistory } from 'react-router-dom'

const validate = ({ email, password, repeatedPassword }) => {
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

  if (!repeatedPassword) {
   errors.repeatedPassword = 'Required'
  } else if (password !== repeatedPassword) {
   errors.repeatedPassword = 'Passwords must match'
  }
  return errors;
}

export default function SignUp () {
  const history = useHistory()
  const [, { setError, setLoading }] = useFormState()

  const handleSubmit = async ({ email, password }) => {
    try {
      setError('')
      setLoading(true)
      await signUp(email, password)
      history.push('/signin')
    } catch {
      setError('Failed to create account')
    }
    setLoading(false)
  }

  return (
    <div className='form__container'>
      <div className='form__container__content'>
        <h1 className='form__label'>Create an account</h1>
        <Formik
          initialValues={{ email: '', password: '', repeatedPassword: '' }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
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
              <Field
                type='password'
                name='repeatedPassword'
                placeholder='Repeat password'
                value={values.repeatedPassword}
                className='form__input'
              />
              <ErrorMessage
                name='repeatedPassword'
                component='div'
                className='form__error'
              />
              <button type='submit' disabled={isSubmitting} className='form__button'>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <p className='form__text'>
          Already have and account?
          <Link to='/login' className='link'> Log in</Link>
        </p>
      </div>
    </div>
  )
}
