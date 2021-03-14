import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { updateEmail, updatePassword, updateUserName } from '../../common/auth.js'
import useUserState from '../../store/user.js'
import useFormState from '../../store/form.js'
import { Link, useHistory } from 'react-router-dom'

const validate = ({ email, password, repeatedPassword }) => {
  const errors = {}
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }

  // change validation
  if (password && repeatedPassword) {
    if (password.length < 6) {
      errors.password = 'Password must contains at least 6 characters'
    } else if (password !== repeatedPassword) {
      errors.repeatedPassword = 'Passwords must match'
    }
  }
  return errors;
}

export default function UpdateProfile () {
  const history = useHistory()
  const [{ user }, ] = useUserState()
  const [, { setError, setLoading }] = useFormState()

  const handleSubmit = async ({ name, email, password }) => {
    try {
      setError('')
      setLoading(true)
      if (user.email !== email) await updateEmail(user, email)
      if (password) await updatePassword(user, password)
      if (name) await updateUserName(user, name)
      history.push('/')
    } catch {
      setError('Failed to update account')
    }
    setLoading(false)
  }

  return (
    <div className='form__container'>
      <div className='form__container__content'>
        <h1 className='form__label'>Update Profile</h1>
        <Formik
          initialValues={{ name: user.displayName ?? '', email: user.email, password: '', repeatedPassword: '' }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values)
            setSubmitting(false)
          }}
        >
          {({ values, isSubmitting }) => (
            <Form className='form__content'>
              <Field
                type='text'
                name='name'
                placeholder='Name'
                value={values.name}
                className='form__input'
              />
              <ErrorMessage
                name='name'
                component='div'
                className='form__error'
              />
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
                Update
              </button>
            </Form>
          )}
        </Formik>
        <p className='form__text'>
          <Link to='/' className='link'>Cancel</Link>
        </p>
      </div>
    </div>
  )
}
