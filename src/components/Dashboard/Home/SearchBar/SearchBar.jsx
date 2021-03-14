import React from 'react'
import './SearchBar.css'
import { Formik, Form, Field } from 'formik'

export default function SearchBar({ getProducts }) {
  const handleSearch = ({ product, limit}) => getProducts(product, limit)

  return (
    <div className='search__container'>
      <Formik
        initialValues={{ product: '', limit: 5 }}
        onSubmit={(values, { setSubmitting }) => {
          handleSearch(values)
          setSubmitting(false)
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className='search__group'>
            <Field
              type='text'
              name='product'
              placeholder='Search...'
              value={values.product}
              className='search__group__input search__group__text'
            />
            <Field
              type='number'
              name='limit'
              min='1'
              placeholder='Limit'
              value={values.limit}
              className='search__group__input search__group__number'
            />
            <button type='submit' disabled={isSubmitting} className='search__group__input search__group__button'>
              S
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
