import React from 'react'
import { Formik } from 'formik'

const Login = () => {
  return (
    <div className='col-md-4 col-lg-3 col-xxl-2 mx-auto  d-flex vh-100 justify-content-center align-items-center'>

      <div className="card">
        <div className="card-body p-5">
          <p className="h3 text-center mb-4">
            Login
          </p>
          <Formik initialValues={{ email: '', password: '' }}
            onSubmit={(values) => { console.log(values); }}>

            {
            ({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <input type="email" className='form-control mb-4' placeholder='Enter Email' 
                value={values.email} onChange={handleChange} name='email'
                />
                <input type="password" className='form-control mb-4' placeholder='Enter Password' 
                value={values.password} onChange={handleChange} name='password'
                />
                <button type='submit' className="btn btn-primary mt-5 w-100">Submit</button>
              </form>
            )}

          </Formik>


          <a href="#" className="text-center d-block btn btn-link mt-4">Signup Here</a>

        </div>
      </div>

    </div>
  )
}

export default Login