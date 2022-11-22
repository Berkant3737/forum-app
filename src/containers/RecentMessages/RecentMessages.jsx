import React from 'react'
import logo from "../../images/javascript.png"
function RecentMessages() {
  return (
    <div>
        <div className="container mt-4">
            <div className="row recent-messages">
                {/* HEADER */}
                    <div className="col-12 recent-messages-header d-flex align-items-center">
                        <div className="col-6 d-inline-block">
                            <h6 className='fw-bold ms-2 my-0'>Yeni Mesajlar</h6>
                        </div>
                        <div className="col-6 d-inline-flex justify-content-around">
                            <h6 className='fw-bold ms-0 my-0'>Konu</h6>
                            <h6 className='fw-bold ms-0 my-0'>Beğeni</h6>
                            <h6 className='fw-bold ms-0 my-0'>Cevap</h6>
                        </div>
                    </div>
                 {/* HEADER */}
                {/* BODY */}
                    <div className="col-12 recent-messages-body d-flex align-items-center">
                        <div className="col-12 col-lg-6 d-inline-block px-2 py-3">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="" />
                                <h6 className='fw-normal ps-3 mb-0 pb-0'>SIFIRDAN JAVASCRİPT DERSLERİ</h6>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-inline-flex justify-content-around">
                            <h6 className='w-25 text-center'>Javascript</h6>
                            <h6 className='w-25 text-center'>10</h6>
                            <h6 className='w-25 text-center'>10</h6>
                        </div>
                    </div>
                {/* BODY */}
                {/* BODY */}
                    <div className="col-12 recent-messages-body d-flex align-items-center">
                        <div className="col-12 col-lg-6 d-inline-block px-2 py-3">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="" />
                                <h6 className='fw-normal ps-3 mb-0 pb-0'>SIFIRDAN JAVASCRİPT DERSLERİ</h6>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-inline-flex justify-content-around">
                            <h6 className='w-25 text-center'>Javascript</h6>
                            <h6 className='w-25 text-center'>10</h6>
                            <h6 className='w-25 text-center'>10</h6>
                        </div>
                    </div>
                {/* BODY */}
                {/* BODY */}
                    <div className="col-12 recent-messages-body d-flex align-items-center">
                        <div className="col-12 col-lg-6 d-inline-block px-2 py-3">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="" />
                                <h6 className='fw-normal ps-3 mb-0 pb-0'>SIFIRDAN JAVASCRİPT DERSLERİ</h6>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-inline-flex justify-content-around">
                            <h6 className='w-25 text-center'>Javascript</h6>
                            <h6 className='w-25 text-center'>10</h6>
                            <h6 className='w-25 text-center'>10</h6>
                        </div>
                    </div>
                {/* BODY */}
                {/* BODY */}
                    <div className="col-12 recent-messages-body d-flex align-items-center">
                        <div className="col-12 col-lg-6 d-inline-block px-2 py-3">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="" />
                                <h6 className='fw-normal ps-3 mb-0 pb-0'>SIFIRDAN JAVASCRİPT DERSLERİ</h6>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-inline-flex justify-content-around">
                            <h6 className='w-25 text-center'>Javascript</h6>
                            <h6 className='w-25 text-center'>10</h6>
                            <h6 className='w-25 text-center'>10</h6>
                        </div>
                    </div>
                {/* BODY */}
            </div>
        </div>
    </div>
  )
}

export default RecentMessages