import React from 'react'

const Contfeed = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-sm-12 my-5">
          <div className='px-4 '>
            <form>

              <h2 style={{ textAlign: "center" }}>How Can We Help You?</h2>
              <input type="text" placeholder="Your Name " className="my-2 w-100" required="" />
              <br />
              <input type="email" placeholder="Your Email" className="my-2 w-100" required="" />
              <br />
              <input type="number" placeholder="Your Phone" className="my-2 w-100" required="" />
              <br />
              <input type="text" placeholder="Website Name" className="my-2 w-100" required="" />
              <br />
              <label htmlFor="" className='mb-2'>Purpose of using Quick Page</label><br />
              <select name="Purpose" id="" className='p-1 w-100'>
                <option value="">Select</option>
                <option value="">Resume</option>
                <option value="">Project</option>
                <option value="">Campaign</option>
                <option value="">Event</option>
                <option value="">Startup</option>
                <option value="">Website Backup</option>
              </select>

              <br />
              <button className="btn btn-warning my-4">Submit</button>
            </form>
          </div>

        </div>
        <div className="col-md-6 col-sm-12 my-5">
        <div className='px-4' >
          <form>
            <h2 className='text-center'>Your Feedback!!!</h2>
            <input type="text" placeholder='Enter your mail' className='w-100 my-2 '/>
            <textarea name="" id="" cols="30" rows="8" placeholder='Your feedback' className='w-100'></textarea>
            <button className="btn my-4 btn-warning">Submit</button>
          </form>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Contfeed