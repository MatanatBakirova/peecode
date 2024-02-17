import React from 'react'

const Contact = () => {
  return (
<div className=" p-5 contact-form d-flex justify-content-center">
<form className="row g-3 d-flex justify-content-center ">
  <h3>Get in touch</h3>
  <p>Describe your issue below. Our manager will contact you as soon as possible.</p>
<div className="col-md-12">
    <label for="inputPassword4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputName" placeholder='Name'/>
  </div>
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"placeholder='E-mail'/>
  </div>
  <div className="col-md-12">
    <label for="inputMessage" className="form-label">Message</label>
    <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Message'></textarea>
  </div>
  <div className="col-12 d-grid justify-content-center text-center">
    <button type="submit" className=" sign-in-buttonu">Send</button>
  </div>
</form>

</div>







 )
}

export default Contact