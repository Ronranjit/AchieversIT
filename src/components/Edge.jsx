import React from "react";
import {
  FaCheckCircle,
  FaInfinity,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const Edge = () => {
  return (
    <section className="container mt-5">
      <h3 class="fw-bold mb-5 text-uppercase">discover top categories</h3>
      <div className="row text-center">
        <div className="col-md card-child">
          <div className="flex p-2">
            <FaCheckCircle size={60} color="skyblue" className="mb-2" />
            <h5 className="text-capitalize">realtime doubt resolution</h5>
            <p>with live instructor</p>
          </div>
        </div>
        <div className="col-md p-2 card-child">
          <div className="flex ">
            <FaInfinity size={60} color="#d63384 " className="mb-2" />
            <h5 className="text-capitalize">realtime doubt resolution</h5>
            <p>with live instructor</p>
          </div>
        </div>
        <div className="col-md p-2 card-child">
          <div className="flex ">
            <FaClock size={60} color="green" className="mb-2" />
            <h5 className="text-capitalize">realtime doubt resolution</h5>
            <p>with live instructor</p>
          </div>
        </div>
        <div className="col-md p-2 card-child">
          <div className="flex ">
            <FaChartLine size={60} color="yellow" className="mb-2" />
            <h5 className="text-capitalize">realtime doubt resolution</h5>
            <p>with live instructor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edge;
