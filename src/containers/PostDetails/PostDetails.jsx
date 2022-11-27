import React from 'react'
import logo from "../../images/avatar-icon.jpg"
function PostDetails() {
  return (
    <div>
      
      <div className="comment-line pt-5 text-white">
        <div className="container">
            <div className="comment-line-title p-3">
                <i className="fa-solid fa-arrows-rotate text-success"></i><a href="$" className="text-muted fw-bold mx-2">Yenile</a>
            </div>
            <div className="comment-line-content p-4">
                <div className="row">
                    <div className="col-1 mx-auto">
                        <img src={logo} className="p-2 p-lg-0" alt="" />
                    </div>
                    <div className="col-10 col-lg-6 ms-4 ms-lg-0">
                        <h5 className="fw-bold px-2"><a href="#" className="text-white">One page template</a></h5>
                        <div className="row text-muted fw-bold">
                            <p className="col-6 col-lg-3"><i className="fa-solid fa-hashtag p-2"></i> General </p>
                            <p className="col-6"><i className="fa-regular fa-clock p-2"></i> 25 minutes ago</p>
                        </div>                        
                    </div>
                 
                    <div className="col-10 col-lg-3 d-flex align-items-center ms-auto">
                        <p className="mx-auto"><i className="fa-solid fa-heart p-2 mx-auto"></i> 10 </p>
                        <p className="mx-auto"><i className="fa-regular fa-comment p-2 mx-auto"></i> 70</p>
                        <p className="mx-auto"><i className="fa-regular fa-eye p-2 mx-auto"></i> 420</p>
                    </div>
                </div>
            </div>
            <div className="comment-line-content p-4">
                <div className="row">
                    <div className="col-1 mx-auto">
                        <img src={logo} className="p-2 p-lg-0" alt="" />
                    </div>
                    <div className="col-10 col-lg-6 ms-4 ms-lg-0">
                        <h5 className="fw-bold px-2"><a href="#" className="text-white">Support "IntelliSense" plugin for JetBrains WebStorm</a></h5>
                        <div className="row text-muted fw-bold">
                            <p className="col-6 col-lg-3"><i className="fa-solid fa-hashtag p-2"></i> İdeas </p>
                            <p className="col-6"><i className="fa-regular fa-clock p-2"></i> 2h ago</p>
                        </div>                        
                    </div>
                    <div className="col-10 col-lg-3 d-flex align-items-center ms-auto">
                        <p className="mx-auto"><i className="fa-solid fa-heart p-2 mx-auto"></i> 50 </p>
                        <p className="mx-auto"><i className="fa-regular fa-comment p-2 mx-auto"></i> 700</p>
                        <p className="mx-auto"><i className="fa-regular fa-eye p-2 mx-auto"></i> 1420</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-center mt-4">Total: <span>25</span></p>
        <nav className="mt-4" aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link active" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
    </div> 

    </div>
  )
}

export default PostDetails
