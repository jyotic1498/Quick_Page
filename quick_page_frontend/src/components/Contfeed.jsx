import React from 'react'

// import './Contfeed.css'
const Contfeed = () => {
  return (
    <div style={{
      border: "1px lightblue solid",
      backgroundColor: "rgb(6, 135, 240)",
      width: "30%",
      paddingRight: "2%",
      paddingLeft: "4%",
      paddingBottom: "2%",
      color: "white",
      boxSizing: "border-box",
      alignContent: "center",
      display: "flex",
      justifyContent: "center"
    }}>
      <div>
        <form>
          <h6 style={{ textAlign: "center" }}>TELL US ABOUT YOUR BUSINESS</h6>
          <h2 style={{ textAlign: "center" }}>How Can We Help You?</h2>
          <input type="text" placeholder="Your Name " className="tbox" required="" />
          <br />
          <input type="email" placeholder="Your Email" className="tbox" required="" />
          <br />
          <input
            type="number"
            placeholder="Your Phone"
            className="tbox"
            required=""
          />
          <br />
          <input
            type="text"
            placeholder="Company Website"
            className="tbox"
            required=""
          />
          <br />
          <input
            type="text"
            placeholder="Company Name"
            className="tbox"
            required=""
          />
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
          <button className="btn">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contfeed