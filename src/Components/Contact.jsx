import React from 'react'
import '../Styles/contact.css'
import contactmainimg from '../Assets/contact-main.png'
import contmap from '../Assets/contmap.png'
import contmess from '../Assets/contmess.png'
import contcall from '../Assets/contcall.png'

const Contact = () => {
  return (
    <section className='contact-section'>
      <div className="contact-bannner">
            <h1>Contact Us</h1>
        </div>


        <div className="contact-main">
            <div className="contact-left">
                <h2>Drop Your Message</h2>
                <p>We are here for you! How can we help you?</p>
            <form>
  <div className="row mb-3">
    <div className="col-sm-10">
      <input placeholder='Name' type="text" className="form-input" id="inputname" />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10">
      <input placeholder='Email' type="email" className="form-input" id="inputemail"/>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10">
      <input placeholder='Mobile Number' type="tel" className="form-input" id="inputemail"/>
    </div>
  </div>
  <div className="row mb-3 ">
    <div className="col-sm-10">
    <div className="form-floating">
  <textarea className="form-control" row="4" placeholder="Your Message"></textarea>
</div>
<div className="contact-submit-btn">
  <button className='btn' type="submit">Submit</button>

</div>
    </div>
  </div>
</form>
 </div>


            <div className="contact-right">
                <div className="contact-right-img">
                    <img src={contactmainimg} alt="" />
                </div>
                <div className="right-content">
                    <div className="contact-address">
                        <img src={contmap} alt="" />
                        <p>First Floor, B-1 Extension, FB, Mohan Cooperative Industrial Estate <br /> New Delhi, Delhi 110044</p>
                    </div>
                    <div className="contact-address">
                        <img src={contmess} alt="" />
                        <p>info@digitlay.com</p>
                    </div>
                    <div className="contact-address">
                        <img src={contcall} alt="" />
                        <p>+91 9984848592</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Contact
