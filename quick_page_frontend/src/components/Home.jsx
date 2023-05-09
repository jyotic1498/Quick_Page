import React from 'react'
import './Home.css'

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
              <img src="\QP.jpg" alt="logo" />
              <h1>QUICK PAGE</h1>
              <p>"Create and publish web pages in minutes with Quick Page, A Disposable Website Creator - The hassle-free way to build and manage your online presence!"</p>
            </div>
          </div>


        </div>

      </div>
      <div>

      </div>
    </>
  )
}

export default Home