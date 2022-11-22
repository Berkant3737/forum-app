import React from "react";
import { AiFillHome,AiOutlineUser } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import FooterJson from "../../json/Footer.json";

function Footer() {
  return (
    <div>
      <div className="container mt-5 Footer">
        <div className="row text-center">

          {/* COLUMN */}
          <div className="col-12 col-lg-3">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/logo-2x.png"
              alt="" className="mb-3"
            />
            <p className="text-white fw-bold">
              I’m available for commissions and collaborations, and i’m excited
              to hear from you about new projects.!!
            </p>
          </div>
          {/* COLUMN */}
          {/* COLUMN */}
          <div className="col-12 col-lg-3">
            <h4 className="fw-bold text-white mb-3">Menüler</h4>
            <ul className="p-0 m-0">
              {FooterJson.map((footer) => {
                return(
                  <li className="fs-6 pb-2">
                    {[footer.icons]}
                    <a href="" className="text-white">{footer.text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* COLUMN */}
          {/* COLUMN */}
          <div className="col-12 col-lg-3">
          <h4 className="fw-bold text-white mb-3">Neler Yeni</h4>
            <span><a href="" className="text-white">Yeni Mesajlar</a></span>
          </div>
          {/* COLUMN */}

        </div>
      </div>
    </div>
  );
}

export default Footer;
