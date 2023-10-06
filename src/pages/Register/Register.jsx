import React from 'react'
import useRegister from '../../hooks/useRegister';
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
function Register() {
    const [form, updateData, handleSubmit] = useRegister();
  return (
    <div>
        <Navbar/>
        <section id="form-page" className="d-flex align-items-center justify-content-center overflow-hidden">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                        <div className="form-page mx-auto overflow-hidden rounded-3">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="form-page-left text-center">
                                        <div className="form-page-texts d-flex flex-column justify-content-around py-lg-5 mt-1 mt-lg-0">
                                            <h2 className="form-page-title">Kayıt Ol <i className="fa-solid fa-chevron-right fs-4"></i></h2>
                                            <h5 className="form-page-text d-flex flex-column"><span>Üye misin?</span><a href="/login" className="my-2 mx-auto p-2 rounded-3">Giriş Yap</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="form-page-right">
                                        <form action="" className="register-form-page my-4 text-white" onSubmit={handleSubmit}>
                                            <ul className="mx-auto px-5">
                                                <li>
                                                    <i className="fa-solid fa-user my-1 p-2"></i>
                                                    <input type="text" className="form-control rounded-3" placeholder="Kullancı Adı" onChange={e => updateData("name", e.target.value)} value={form.name}/>
                                                </li> 
                                                <li>
                                                    <i className="fa-solid fa-envelope my-1 p-2"></i>
                                                    <input type="email" className="form-control rounded-3" placeholder="E-Posta adresiniz" onChange={e => updateData("email", e.target.value)} value={form.email} />
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-lock my-1 p-2"></i>
                                                    <input type="password" className="form-control rounded-3" placeholder="Şifreniz" onChange={e => updateData("password", e.target.value)} value={form.password}/>
                                                </li>
                                                <li>
                                                    <button type="submit" id="submit" className="btn btn-purple col rounded-3 ">Kayıt Ol</button>
                                                </li>
                                            </ul>
                                        </form>
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

export default Register