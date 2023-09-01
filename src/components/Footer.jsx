import React from "react";
import { FaPaperPlane, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div class=" h-100">
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-md-5">
            <div class="col-lg-4 col-md-6">
              <img
                src="https://www.achieversit.com/assets/images/AIT-white.jpg"
                alt=""
              />
              <p class="small text-muted">
                AchieversIT - Provides a wide group of opportunities for
                freshers and Experienced candidate who can develop their skills
                and build their career opportunities across multiple Companies.
              </p>
              <p class="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3 text-uppercase">company</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">placement</a>
                </li>
                <li>
                  <a href="#">corporate training</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3 text-uppercase">trending courses</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a href="#">UI Development Course</a>
                </li>
                <li>
                  <a href="#">Angular JS Course</a>
                </li>
                <li>
                  <a href="#">React JS Course</a>
                </li>
                <li>
                  <a href="#">Python Course</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">CONTACT INFO</h5>
              <div>
                <div>
                  <p class="small text-muted">
                    #63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage,
                    Bangalore, India - 560029
                  </p>
                </div>
                <div>
                  <p class="small text-muted">India : +91 8431-040-457</p>
                </div>
                <div>
                  <p class="small text-muted">info@achieversit.com</p>
                </div>
              </div>
            </div>

            <div className="flex text-center align-items-center">
              <div class="text-white " href="#">
                <a href="">
                  <FaGithub size={40} className="p-1" />
                </a>
                <a href="">
                  <FaTwitter size={40} className="p-1" />
                </a>
                <a href="">
                  <FaLinkedin size={40} className="p-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
