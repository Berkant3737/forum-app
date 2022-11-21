import React from 'react'
import { BsChatLeftText } from 'react-icons/bs';
import logo from "../../images/816993.jpg"
function RecentMessages() {
  return (
    <div className="container mt-4">
    <div className="row recent-messages">
        {/* HEADER */}
            <div className="recent-messages-header d-flex">
            {/* COLUMN */}
            <div className="col-4 d-flex align-items-center my-2 ms-0 ms-lg-3">
                <BsChatLeftText/>
                <h6 className='fw-bold ms-2 my-0'>Yeni Mesajlar</h6>
            </div>
            <div className="col-8 d-none d-lg-flex align-items-center justify-content-around my-2 ms-0">

                <h6 className='fw-bold ms-0 my-0'>Konu</h6>
                <h6 className='fw-bold ms-0 my-0'>Beğeni</h6>
                <h6 className='fw-bold ms-0 my-0'>Cevap</h6>
            </div>
            {/* COLUMN */}
            </div>
        {/* HEADER */}

        {/* BODY */}
        <div className="recent-messages-body p-0">
            <ol className='p-0 m-0'>
                {/* LIST ITEM */}
                <li className='d-flex py-2 ps-0 ps-lg-2'>
                    <div className="col-auto d-flex align-items-center">
                        <img src={logo} alt="" />
                        <span className='ms-3'>
                             <a href="">Sıfırdan Html Dersleri | Block ve Inline Elementler</a>
                        </span>
                    </div>

                    <div className="col-8 d-none d-lg-flex align-items-center justify-content-around">
                        <span>HTML</span>
                        <span>5</span>
                        <span>5</span>
                    </div>
                </li>
                {/* LIST ITEM */}
                
            </ol>
        </div>
        {/* BODY */}

    </div>

{/* 
<div className="col-auto d-flex align-items-center">
                        <img src="https://spy.gen.tr/forum/data/avatars/s/39/39237.jpg?1605988975" alt="" />
                        <span className='ms-3'>
                            <a href="">Sıfırdan Html Dersleri | Block ve Inline Elementler</a>
                        </span>
                    </div>

                    <div className="col-6 d-flex align-items-center justify-content-around">
                        <span>HTML</span>
                        <span>5</span>
                        <span>5</span>
                    </div>
                     */}

</div>
  )
}

export default RecentMessages