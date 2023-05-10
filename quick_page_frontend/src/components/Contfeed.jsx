import React from 'react'

// import './Contfeed.css'
const Contfeed = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div style={{
            border: "1px lightblue solid",
            width: "100%",
            boxSizing: "border-box",
            }} className='d-flex justify-content-center align-item-center'>
              <form>
                
                <h2 style={{ textAlign: "center" }}>How Can We Help You?</h2>
                <input type="text" placeholder="Your Name " className="tbox" required="" />
                <br />
                <input type="email" placeholder="Your Email" className="tbox" required="" />
                <br />
                <input type="number" placeholder="Your Phone" className="tbox" required=""/>
                <br />
                <input type="text" placeholder="Company Website" className="tbox" required=""/>
                <br />
                <input type="text" placeholder="Company Name" className="tbox" required=""/>
                <br />
                <h5>CHOOSE A SERVICE:</h5>
                <input type="radio" name="SEO" />
                SEO <br />
                <input type="radio" name="Paid Search" />
                Paid Search <br />
                <input type="radio" name="Design & Development" />
                Design &amp; Development <br />
                <input type="radio" name="Social Media" />
                Social Media <br />
                <br />
                <button className="btn btn-light">Submit</button>
              </form>
            </div>

          </div>
        </div>
        <div className="col-md-6 col-sm-12">

        </div>
      </div>
  )
}

export default Contfeed