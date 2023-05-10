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
              <img src={logo} alt="logo" height={100}/>
              <h1>QUICK PAGE</h1>
              <p className="px-3">"Create and publish web pages in minutes with Quick Page, A Disposable Website Creator - The hassle-free way to build and manage your online presence!"</p>
            </div>
          </div>


        </div>

      </div>
      <div>
        <div className="d-flex justify-content-center align-item-center my-2 pt-3">
          <h3>Create your website with us!</h3>
        </div>
        <div className="p-1 mx-5">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sed mollitia ipsum necessitatibus, natus magnam perferendis consectetur, doloremque molestias aspernatur, inventore eligendi hic nulla? Harum iste ad nesciunt debitis fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit maiores aperiam explicabo nulla nam, dolorem atque fugiat magni iusto ullam itaque rem numquam laboriosam totam dolores animi! Natus, accusantium labore inventore voluptate at quia. Veniam libero aut cumque molestiae quod, rem deleniti hic ullam ut, eveniet, blanditiis explicabo asperiores!</p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center align-item-center my-2 pt-3">
          <h3>Create your website with us!</h3>
        </div>
        <div className="p-1 mx-5">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sed mollitia ipsum necessitatibus, natus magnam perferendis consectetur, doloremque molestias aspernatur, inventore eligendi hic nulla? Harum iste ad nesciunt debitis fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit maiores aperiam explicabo nulla nam, dolorem atque fugiat magni iusto ullam itaque rem numquam laboriosam totam dolores animi! Natus, accusantium labore inventore voluptate at quia. Veniam libero aut cumque molestiae quod, rem deleniti hic ullam ut, eveniet, blanditiis explicabo asperiores!</p>
        </div>
      </div>
    </>
  )
}

export default Home