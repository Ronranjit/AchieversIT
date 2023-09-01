import React from "react";
import { ImLocation } from "react-icons/im";

const Location = () => {
  return (
    <section className="container mt-5 mb-3">
      <div className="mb-4">
        <h1 className="fw-bold text-center text-black">Locations</h1>
        <p className="fs-5 text-center text-black small">
          Come and discuss with us about your goals ,We transform your goals
          into success!!!
        </p>
      </div>
      <div>
        <div className="row">
          <div className="col-md">
            <div class="card" styles="width: 18rem;">
              <img
                src="https://www.achieversit.com/assets/images/btm.jpg"
                class="card-img-top"
                alt="btm"
              />
              <div class="card-body text-center">
                <h5 class="card-title">BTM Layout - Bangalore</h5>
                <p class="card-text">
                  #63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage, BTM
                  Layout, Bengaluru, Karnataka 560029
                </p>
                <a
                  href="https://goo.gl/maps/fgBNgjc2SbWBPsb17"
                  target="_blank"
                  class=""
                >
                  <ImLocation color="red" />
                  get direction
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div class="card" styles="width: 18rem;">
              <img
                src="https://www.achieversit.com/assets/images/mar.jpg"
                class="card-img-top"
                alt="btm"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Marathahalli - Bangalore</h5>
                <p class="card-text">
                  #1, 4th Main Rd, Extension, Ayyappa Layout, Chandra Layout,
                  Marathahalli, Bengaluru, Karnataka 560037
                </p>
                <a
                  href="https://goo.gl/maps/bT3FtAf2f6yTs4YCA"
                  target="_blank"
                  class=""
                >
                  <ImLocation color="red" />
                  get direction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md">
            <div class="card" styles="width: 18rem;">
              <img
                src="https://www.achieversit.com/assets/images/hyd.jpg"
                class="card-img-top"
                alt="btm"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Kukatpally - Hyderabad</h5>
                <p class="card-text">
                  #101, 1st floor, Vandana's Trade Center, Beside Padmavathi
                  Plaza, Above Union Bank, Kukatpally Housing Board Colony,
                  Kukatpally, Hyderabad, Telangana 500072
                </p>
                <a
                  href="https://goo.gl/maps/vh5giTXoNRH26WB79"
                  target="_blank"
                  class=""
                >
                  <ImLocation color="red" />
                  get direction
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div class="card" styles="width: 18rem;">
              <img
                src="https://www.achieversit.com/assets/images/btm.jpg"
                class="card-img-top"
                alt="btm"
              />
              <div class="card-body text-center">
                <h5 class="card-title">RajajiNagar - Bangalore</h5>
                <p class="card-text">Upcoming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
