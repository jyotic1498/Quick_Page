import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import app_config from '../config';

const Signup = () => {

  const { apiUrl } = app_config;

  const generateWebpage = async (userid) => {
    const res = await fetch(apiUrl + '/webpage/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: '',
        data: {},
        expireDate: new Date().setDate(new Date().getDate() + 10),
        user: userid,
        createdAt: new Date()
      })
    });

    if (res.status === 200) {
      console.log('webpage created');
    }
  }

  const userSubmit = async (values) => {
    console.log(values);

    // 1. url
    // 2. request method
    // 3. data
    // 4. data format - json
    const res = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      generateWebpage(data._id);
      Swal.fire({ icon: 'success', title: 'Success', text: 'You are registered' }).then(() => {
        window.location.href = './builder'
      });
    }


  };

  return (
    <div style={{ backgroundImage: "url(https://images.pexels.com/photos/6847584/pexels-photo-6847584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)", backgroundSize: "cover" }} className='py-4'>
      <div className="col-md-4 col-lg-3 col-xxl-2 mx-auto ">
        <div className="card">
          <div className="card-body p-5">
            <p className="h3 text-center mb-4">Signup Here</p>

            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Enter Full Name"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                  />
                  <input
                    type="email"
                    className="form-control mb-4"
                    placeholder="Enter Email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <input
                    type="password"
                    className="form-control mb-4"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                  />

                  <button type="submit" className="btn btn-primary mt-3 w-100" style={{ backgroundColor: "rgba(255, 128, 0, 0.783)" }}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
            <div className='d-block text-center '>
              <p className='mt-4'>Already have an account?</p>
              <a href="./Login" className="btn btn-link"> Login
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;