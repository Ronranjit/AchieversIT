import React from "react";
import {
  FaDev,
  FaLaptop,
  FaMobile,
  FaFunnelDollar,
  FaFileCode,
  FaDatabase,
  FaChalkboard,
  FaJsfiddle,
  FaMask,
  FaCodepen,
  FaPython,
} from "react-icons/fa";

const Categories = () => {
  return (
    <section className="container mt-5">
      <h3 class="fw-bold mb-5 text-uppercase">discover top categories</h3>

      <div className="container px-5 text-capitalize">
        <div className="row gap-3">
          <div className="col-md cat1 card-child ">
            <div>
              <FaDev size={50} color="skyblue" />
              <p>DevOps</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaLaptop size={50} color="red" />

              <p>front end</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaMobile size={50} color="pink" />
              <p>mobile app dev</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaFunnelDollar size={50} color="silver" />
              <p>digital marketing</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaFileCode size={50} color="purple" />
              <p>program & frame works</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaDatabase size={50} color="green" />
              <p>data types</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-3 text-capitalize">
        <div className="row gap-3">
          <div className="col-md  cat1 card-child">
            <div>
              <FaChalkboard size={50} color="orange" />
              <p>software training</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaJsfiddle size={50} color="blue" />
              <p>front end</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaMask size={50} />
              <p>mobile app dev</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaMobile size={50} color="teal" />

              <p>digital marketing</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaPython size={50} color="yellow" />
              <p>program & frame works</p>
            </div>
          </div>
          <div className="col-md cat1 card-child">
            <div>
              <FaCodepen size={50} color="purple" />
              <p>data types</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
