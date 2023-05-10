import React from 'react'

const About = () => {
    return (
        <div>
            <div className="bg-image">
                <img
                    src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-100"
                    style={{ height: "500px" }}
                    alt="About us"
                />
                <div className="mask" style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100 bg">
                        <h1 className="text-white display-2 fw-semibold mb-0">ABOUT US</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row m-4">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Who are we?</h5>
                                <p className="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">What we provide?</h5>
                                <p className="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Who are we?</h5>
                                <p className="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">What we provide?</h5>
                                <p className="card-text">
                                    With supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className='text-center'>Our Developers</h3>
                <div className="row m-2 d-flex justify-content-center align-items-center">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='card-img' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='card-img' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='card-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About