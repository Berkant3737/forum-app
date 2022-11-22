import React from 'react'
import TopicsJson from "../../json/Topics.json"
function Topics() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row topics">
          {/* HEADER */}
          <div className="col-12 topics-header d-flex align-items-center">
                <div className="col-6 d-inline-block">
                    <h6 className='fw-bold ms-2 my-0'>Yeni Mesajlar</h6>
                  </div>
            </div>
          {/* HEADER */}
          {/* BODY */}
            {TopicsJson.map((topics) => {
                return(
                  <div className="col-12 recent-messages-body d-flex align-items-center">
                      <div className="col-12 col-lg-6 d-flex px-2 py-3">
                          <div className="col-auto">
                            <img src={topics.img} alt="" />
                          </div>
                          <div className="col-auto w-100 ms-3">
                            <h5 className='fw-bold mb-0 pb-0'>{topics.title} </h5>
                            <span>{topics.text}</span>
                        </div>
                      </div>
                  </div>
                )
              })}
            {/* BODY */}
            </div>
        </div>
    </div>
  )
}

export default Topics