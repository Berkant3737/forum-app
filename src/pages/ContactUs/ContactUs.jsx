import React from 'react';
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
function ContactUs() {
  return (
    <div>
      <Navbar/>
      <div className="container mt-3 contact-us">
        <h2 className='text-gray'>Bize Ulaşın</h2>
        <p className='text-white'>Tüm sorularınızı bize bu sayfadan iletebilirsiniz</p>
        <div className="row">
            <div className="col-12 col-lg-6 mb-3">
                <label>İsim</label>
                <input type="text" className='form-control p-3' placeholder='İsiminizi giriniz'/>
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <label>E-mail</label>
                <input type="text" className='form-control p-3' placeholder='E-mail adresinizi giriniz' />
            </div> 
            <div className="col-12 col-lg-6 mb-3">
                <label>Konu</label>
                <input type="text" className='form-control p-3' placeholder='Konu içeriğini giriniz' />
            </div>
            <div class="col-12 mb-4">
                <label>Mesaj</label>
                <textarea class="form-control" rows="8" placeholder='Mesajınızı giriniz'></textarea>
            </div>
            <div className="col-12 text-center text-lg-start">
              <button className='col-auto ms-2 btn'>Gönder</button>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
