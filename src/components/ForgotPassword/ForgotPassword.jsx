import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { resetPassword } from '../../common/auth.js'
import useFormState from '../../store/form.js'
import { Link } from 'react-router-dom'

const validate = ({ email }) => {
  const errors = {}
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }

  return errors;
}

export default function ForgotPassword () {
  const [, { setError, setLoading }] = useFormState()

  const handleResetPassword = async ({ email }) => {
    try {
      setError('')
      setLoading(true)
      await resetPassword(email)
    } catch {
      setError('Failed to reset password')
    }
    setLoading(false)
  }

  return (
    <div className='form__container'>
      <div className='form__container__content'>
        <h1 className='form__label'>Password reset</h1>
        <Formik
          initialValues={{ email: '' }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            handleResetPassword(values)
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
            <button type='submit' disabled={isSubmitting} className='form__button'>
              Reset password
            </button>
          </Form>
        )}
        </Formik>
        <p className='form__text'>
          <Link to='/signup' className='link'>Sign up </Link>
          <Link to='/login' className='link'> Log in</Link>
        </p>
      </div>
    </div>
  )
}
