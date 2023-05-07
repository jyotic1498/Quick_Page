import React from 'react'
import { Formik } from 'formik'
import app_config from '../config'
import Swal from 'sweetalert2';

const Login = () => {

  const {apiUrl} = app_config;

  const loginSubmit = async (values) => {
    const res = await fetch( apiUrl+'/user/authenticate', {
      method : 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    console.log(res.status);

    if(res.status === 200){
      Swal.fire({ icon : 'success', title: 'Success', text: 'login success' });
      const data = await res.json();

      sessionStorage.setItem('user', JSON.stringify(data));

    }else if(res.status === 401)
    Swal.fire({ icon : 'error', title: 'Error', text: 'login failed' });

  }

  return (
    <div className='col-md-4 col-lg-3 col-xxl-2 mx-auto  d-flex vh-100 justify-content-center align-items-center'>

      <div className="card">
        <div className="card-body p-5">
          <p className="h3 text-center mb-4">
            Login
          </p>
          <Formik initialValues={{ email: '', password: '' }}
            onSubmit={loginSubmit}>

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