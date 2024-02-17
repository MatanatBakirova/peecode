import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

const Contact = () => {
  const tostNotify = () => toast("Wow so easy !");


  const[notify , setNotify]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p5ifwda', 'template_7pcztzd', form.current, {
        publicKey: 'kjsu2SxJ6_rxNFqb-',
      })
      .then(
        () => {

         setNotify(true)

          toast('🦄 Emeliyyat ugurla tamamlandi ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
<div className=" p-5 contact-form d-flex justify-content-center">
<form ref={form} onSubmit={sendEmail} className="row g-3 d-flex justify-content-center ">
  <h3>Get in touch</h3>
  <p>Describe your issue below. Our manager will contact you as soon as possible.</p>
<div className="col-md-12">
    <label for="inputPassword4" className="form-label">Name</label>
    <input name='name' type="text" className="form-control" id="inputName" placeholder='Name'/>
  </div>
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label">Email</label>
    <input name='email' type="email" className="form-control" id="inputEmail4"placeholder='E-mail'/>
  </div>
  <div className="col-md-12">
    <label for="inputMessage" className="form-label">Message</label>
    <textarea name="message" id="" cols="30" rows="10" className='form-control' placeholder='Message'></textarea>
  </div>
  <div className="col-12 d-grid justify-content-center text-center">
    <button type="submit" className=" sign-in-buttonu">Send</button>
  </div>
</form>
</div>
{
  notify && (<div>
  <ToastContainer />
</div>)


}






</>

 )
}

export default Contact