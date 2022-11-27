import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import RecentMessages from "../RecentMessages/RecentMessages";
import Footer from "../Footer/Footer";
import logo from "../../images/avatar-icon.jpg";
import { FaHashtag, FaClock,FaHeart } from "react-icons/fa";
import { BsChat,BsEye} from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
function PostDetails() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="container mt-4">
            <div className="row post-details">
                {/* HEADER */}
                    <div className="col-12 recent-messages-header d-flex align-items-center">
                        <div className="col-6 d-flex align-items-center">
                            <i><FiRefreshCw/> </i>
                            <h6 className='fw-bold ms-2 my-0'>Yenile</h6>
                        </div>
                        <div className="col-6 d-inline-flex justify-content-around d-none">
                            <h6 className='fw-bold ms-0 my-0'>Konu</h6>
                            <h6 className='fw-bold ms-0 my-0'>Beğeni</h6>
                            <h6 className='fw-bold ms-0 my-0'>Cevap</h6>
                        </div>
                    </div>
                 {/* HEADER */}
                {/* BODY */}
                    <div className="col-12 post-details-body d-flex align-items-center">
                        <div className="col-12 col-lg-6 d-inline-block px-2 py-3">
                            <div className="d-flex align-items-center">
                                <img src={logo} alt="" />
                                <a href="/userpost"><h6 className='fw-normal ps-3 mb-0 pb-0'>SIFIRDAN JAVASCRİPT DERSLERİ</h6></a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-inline-flex justify-content-around">
                              <h6 className='w-25 text-center'><i><FaHeart/></i> 10</h6>
                              <h6 className='w-25 text-center'><i><BsChat/></i> 10</h6>
                              <h6 className='w-25 text-center'><i><BsEye/></i> 10</h6>
                        </div>
                    </div>
                {/* BODY */}
                
            </div>
        </div>

      {/* Pagination */}
      <nav className="mt-4" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link">Önceki</a>
          </li>
          <li className="page-item">
            <a className="page-link active" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link " href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Sonraki
            </a>
          </li>
        </ul>
      </nav>
      {/* Pagination */}
      <Footer />
    </div>
  );
}

export default PostDetails;
