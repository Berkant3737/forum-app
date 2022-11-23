import React from "react";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { FaEnvelope,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import {BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="container mt-5 footer">
        <div className="row justify-content-between">
          {/* COLUMN */}
          <div className="col-12 col-lg-4 text-start">
            <img
              src="https://html.spiderthemes-demos.com/docy/img/logo-2x.png"
              alt=""
              className="mb-3"
            />
            <p className="text-dark-gray fw-bold">
              I’m available for commissions and collaborations, and i’m excited
              to hear from you about new projects.!!
            </p>
          </div>
          {/* COLUMN */}

          {/* COLUMN */}
          <div className="col-12 col-lg-2">
            <h4 className="fw-bold text-white mb-3 fs-5">Menüler</h4>
            <ul className="p-0 m-0">
              <li className="fs-5 pb-2">
                <a href="">
                <i className="text-white"><AiFillHome /></i>
                <span className="text-dark-gray fw-bold ps-2 fs-6">AnaSayfa</span>
                </a>
              </li>
              <li className="fs-5 pb-2">
                <a href="">
                <i className="text-white"><FaEnvelope /></i>
                <span className="text-dark-gray fw-bold ps-2 fs-6">Gönderileriniz</span>
                </a>
              </li>
              <li className="fs-5 pb-2">
                <a href="">
                <i className="text-white"><AiOutlineUser/></i>
                <span className="text-dark-gray fw-bold ps-2 fs-6">Profil</span>
                </a>
              </li>
              <li className="fs-5 pb-2">
                <a href="">
                <i className="text-white"><IoMdContacts/></i>
                <span className="text-dark-gray fw-bold ps-2 fs-6">Bize Ulaşın</span>
                </a>
              </li>
            </ul>
          </div>
          {/* COLUMN */}

          {/* COLUMN */}
          <div className="col-12 col-lg-3">
            <h4 className="fw-bold text-white fs-5 mb-2">Neler Yeni</h4>
            <span>
              <a href="" className="text-dark-gray fw-bold ps-0 ps-lg-2 fs-6">
                Yeni Mesajlar
              </a>
            </span>
          </div>
          {/* COLUMN */}

          {/* COLUMN */}
          <div className="col-12 col-lg-3">
            <h4 className="fw-bold text-white fs-5 mb-3">Sosyal Medya Bağlantılarımız</h4>
              <ul className="d-flex p-0 m-0 social-icons">  
                <li>
                  <a href=""><i><FaFacebook/></i></a>
                </li>
                <li>
                  <a href=""><i><BsInstagram/></i></a>
                </li>
                <li>
                  <a href=""><i><FaTwitter/></i></a>
                </li>
                <li>
                  <a href=""><i><FaLinkedin/></i></a>
                </li>
              </ul>
          </div>
          {/* COLUMN */}

        </div>
      </div>
    </div>
  );
}

export default Footer;
