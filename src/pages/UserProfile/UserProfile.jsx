import React from 'react'
import Navbar from '../../containers/Navbar/Navbar'
import Footer from '../../containers/Footer/Footer'
import author from "../../images/author-1.jpg"
function UserProfile() {
  return (
    <div>
        <Navbar/>
        <header>
        <div className="user-profile-header dark-mode">
            <div className="user-profile-name d-flex flex-column align-items-center justify-content-center">
                <h2 className="fw-bold text-white mt-5">İsim Soyisim</h2>
                <div className="d-flex">
                    <a href="#" className="mx-2 text-white">Anasayfa</a>
                    <i className="fa-solid fa-chevron-right text-white"></i>
                    <a href="#" className="mx-2 active">Kullanıcı Profili</a>
                </div>
            </div>
        </div>
    </header>
    <section className="user-profile-content dark-mode">
        <div className="container">
            <div className="row">
                <div className="user-profile ">
                    <div className="row g-5">
                        {/* profile img */}
                        <div className="col-md-9 col-lg-3 mx-auto">
                            <div className="profile-left shadow-sm">
                                <div className="p-4">
                                    <div className="user-profile-img rounded-3">
                                        <img src={author} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                    <ul className="user-profile-option p-0 mt-4 text-start">
                                        <li className="user-profile-option-item m-2 rounded-5">
                                            <a href="#" className="btn active"><i className="fa-solid fa-user p-2"></i>Profil</a>
                                        </li>
                                        <li className="user-profile-option-item m-2 rounded-5">
                                            <a href="#" className="btn"><i className="fa-solid fa-heart-circle-plus p-2"></i>Kaydedilenler</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* profile img */}

                        {/* profile details */}
                        <div className="col-md-9 col-lg-9 mx-auto">
                            <div className="profile-right shadow-sm">
                                <div className="user-profile-details p-4 rounded-3">
                                    <h2 className="text-center">Kullanıcı Bilgileri</h2>
                                    <div className="row p-3">
                                        <div className="col-6 col-lg-3 my-2">
                                            <h6 className="fw-bold">İsim Soyisim :</h6>
                                        </div>
                                        <div className="col-6 col-lg-9 my-2 p-0"><span className="">Hamit DAĞ</span></div>
                                        <div className="col-6 col-lg-3 my-2">
                                            <h6 className="fw-bold">E-posta :</h6>
                                        </div>
                                        <div className="col-6 col-lg-9 my-2 p-0"><span className="">hamitdag@outlook.com</span></div>
                                    </div>

                                   {/* social */}
                                    <div className="row">
                                        <div className="col-12">
                                            <ul className="social d-flex pt-3 border-top ps-0">
                                                <li className="mx-1"><a href=""><i className="fab fa-facebook-f rounded-3"></i></a></li>
                                                <li className="mx-1"><a href=""><i className="fab fa-twitter rounded-3"></i></a></li>
                                                <li className="mx-1"><a href=""><i className="fab fa-pinterest rounded-3"></i></a></li>
                                            </ul>
                                        </div>                                        
                                    </div>
                                    {/* social */}
                                </div>
                            </div>
                        </div>
                        {/* profile details */}

                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default UserProfile
