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
            <div className="col-sm-8 d-flex align-item-center justify-center">
              <div className="card py-3">
                <div className="card-body ">
                  <h5 className="card-title">Who are we?</h5>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sed mollitia ipsum necessitatibus, natus magnam perferendis consectetur, doloremque molestias aspernatur, inventore eligendi hic nulla? Harum iste ad nesciunt debitis fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
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
          <div className="col-sm-4 ">
              <div className="card">
                <img src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='card-img' height={"250px"} />
              </div>
            </div>
            <div className="col-sm-8 d-flex align-item-center justify-center">
            <div className="card py-3">
                <div className="card-body ">
                  <h5 className="card-title">Who are we?</h5>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sed mollitia ipsum necessitatibus, natus magnam perferendis consectetur, doloremque molestias aspernatur, inventore eligendi hic nulla? Harum iste ad nesciunt debitis fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Home