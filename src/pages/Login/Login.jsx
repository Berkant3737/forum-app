import React from 'react'
import useLogin from '../../hooks/useLogin'
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';

function Login() {
    const [form,updateData,handleSubmit] = useLogin();
    
  return (
    <div>
        <Navbar/>
       <section id="login-form-page" className="d-flex align-items-center justify-content-center overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                        <div className="form-page mx-auto overflow-hidden rounded-3">
                                <div className="alert alert-success" id='login-successful'>Giriş Başarıyla Gerçekleştirildi</div>
                                <div className="alert alert-danger" id='login-failed'>Giriş başarısız oldu.Lütfen E-mail adresinizi veya şifrenizi kontrol ediniz</div>
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="form-page-left text-center py-3">
                                        <div className="form-page-texts d-flex flex-column justify-content-around mt-1 mt-lg-0">
                                            <h2 className="form-page-title">Giriş Yap <i className="fa-solid fa-chevron-right fs-4"></i></h2>
                                            <h5 className="form-page-text d-flex flex-column"><span>Kayıtlı Değil misin?</span><a href="/register" className="my-2 mx-auto p-2 rounded-3">Kayıt Ol!</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="form-page-right d-flex flex-column justify-content-center p-3 my-2">
                                        <div className="col-12 form-page-items">
                                            <form onSubmit={handleSubmit}>
                                                <ul className="mx-auto p-0">
                                                    <li>
                                                        <i className="fa-solid fa-envelope my-1 p-2 text-white"></i>
                                                        <input type="email" className="form-control rounded-3" placeholder="E-Posta adresiniz" onChange={e => updateData("email",e.target.value)} value={form.email}/>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-lock my-1 p-2 text-white"></i>
                                                        <input type="password" className="form-control rounded-3" placeholder="Şifreniz" onChange={e => updateData("password", e.target.value)} value={form.password}/>
                                                    </li>
                                                </ul>
                                                <button type="submit" className="btn btn-purple mb-4 me-5 col-12">Giriş Yap</button>
                                            </form>
                                            <a href="" className='forgotten-password'> Parolamı unuttum.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* Snow Effect */}
        <div className="snowflakes">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        {/* Snow Effect */}
    </section>
    <Footer/>
    </div>
  )
}

export default Login
