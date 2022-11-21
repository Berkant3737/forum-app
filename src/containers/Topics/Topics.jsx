import React from 'react'
import logo from "../../images/forum-document.png"

function Topics() {
  return (
    <div>
      
        <div className="container mt-4 ">
            <div className="row recent-messages">
                {/* HEADER */}
                    <div className="recent-messages-header d-flex">
                    {/* COLUMN */}
                        <div className="col-4 d-flex align-items-center my-2 ms-0 ms-lg-3">
                            <h6 className='fw-bold ms-2 my-0'>Forum</h6>
                        </div>
                        <div className="col-8 d-none d-lg-flex align-items-center justify-content-around my-2 ms-0">

                            <h6 className='fw-bold ms-0 my-0'>Konu</h6>
                            <h6 className='fw-bold ms-0 my-0'>Beğeni</h6>
                            <h6 className='fw-bold ms-0 my-0'>Cevap</h6>
                            <h6 className='fw-bold ms-0 my-0'>Yazan</h6>
                        </div>
                    {/* COLUMN */}
                    </div>
                {/* HEADER */}

               {/* BODY */}
        <div className="recent-messages-body p-0">
            <ol className='p-0 m-0'>
                {/* LIST ITEM */}
                <li className='d-flex py-2 ps-0 ps-lg-4'>
                    <div className="col-4 d-flex">
                        <img src={logo} alt="" />
                        <div className="ms-4 mt-2">
                            <h5 className='m-0 mb-2'><a href="#">HTML</a></h5>
                            <p>HTML ADINA HERŞEY</p>
                        </div>
                        
                    </div>

                    <div className="col-8 d-none d-lg-flex align-items-center justify-content-around">
                        <span>HTML</span>
                        <span>0</span>
                        <span>0</span>
                        <span>0</span>
                    </div>
                </li>
                {/* LIST ITEM */}
            </ol>
        </div>
        {/* BODY */}



            </div>
        </div>
    </div>
  )
}

export default Topics
