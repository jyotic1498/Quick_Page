import React from 'react'
import './Home.css'
import logo from './QP.png'
const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-mdb-ride="carousel"
      >

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/210643/pexels-photo-210643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100"
              alt="Website"
            />
            <div className="carousel-caption d-none d-md-block bg-light">
              <img src={logo} alt="logo" height={100} />
              <h1>QUICK PAGE</h1>
              <p className="px-3">"Create and publish web pages in minutes with Quick Page, A Disposable Website Creator - The hassle-free way to build and manage your online presence!"</p>
            </div>
          </div>


        </div>

      </div>
      <div>
        <div className="p-1 mx-5">
          <div className="row m-3">
            <div className="col-md-8 col-sm-12 d-flex align-item-center justify-center">
              <div className="card py-3">
                <div className="card-body ">
                  <h5 className="card-title">What are disposable web pages?</h5>
                  <p className="card-text">
                    Disposable web pages, also known as temporary or throwaway web pages, are web pages that are designed to be used once and then discarded. These pages are typically used for short-term purposes, such as sharing a quick piece of information, testing website layouts, or sending private messages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={"250px"} className='card-img' />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <div className="p-1 mx-5">
          <div className="row m-3">
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <img src="https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='card-img' height={"250px"} />
              </div>
            </div>
            <div className="col-md-8 col-sm-12 d-flex align-item-center justify-center">
              <div className="card py-3">
                <div className="card-body ">
                  <h5 className="card-title">What kind of people need disposable web pages or websites?</h5>
                  <p className="card-text">
                    Individuals who want to create temporary websites, freelancers who want to create online portfolio or resume without the need of full website, small business or startups who need temporary websites, non-profit organizations for a specific event or campaign, students for their projects or artists or musicians who want to showcase their work or promote an event temporarily.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="p-1 mx-5">
          <div className="row m-3">
            <div className="col-md-8 col-sm-12 d-flex align-item-center justify-center">
              <div className="card py-3">
                <div className="card-body ">
                  <h5 className="card-title">Why are they called disposable web pages?</h5>
                  <p className="card-text">
                    Disposable web pages are called "disposable" because they are designed to be temporary and easily disposable after their intended use. They are created to serve a specific purpose for a short period of time. Once the purpose of the disposable web page has been fulfilled, it can be easily deleted or removed, much like disposable items that are used once and then thrown away.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height={"250px"} className='card-img' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home