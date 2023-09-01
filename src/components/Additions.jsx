import React from "react";
import { FaWordpress, FaVuejs, FaPython, FaUikit } from "react-icons/fa";
import { StarFill } from "react-bootstrap-icons";
const Additions = () => {
  return (
    <section class="container mt-5">
      <h3 class="fw-bold mb-5">RECENT ADDITION</h3>
      <div class="row">
        <div class="  w-75 mx-auto  col-md card-child">
          <div class="d-flex align-items-center text-uppercase bg-one p-4 w-100 gap-1 ">
            <FaUikit size={70} color="white" />
            <h5 class="text-white text-uppercase">
              ui <br /> development <br /> course
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text text-sm">
              Angular is popular for making dynamic applications and its
              information official
            </p>
            <div>
              <p class="text-capitalize fst-italic">reviews</p>
              <div class="d-flex align-items-center  gap-3">
                <div class="align-items-center">
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                </div>
                <div>
                  <p>5.0(257)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-75 mx-auto col-md card-child">
          <div class="d-flex align-items-center text-uppercase bg-two p-4 gap-1">
            <FaVuejs size={70} color="white" />
            <h5 class="text-white text-uppercase">
              vuejs <br /> development <br /> course
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text text-sm">
              Angular is popular for making dynamic applications and its
              information official
            </p>
            <div>
              <p class="text-capitalize fst-italic">reviews</p>
              <div class="d-flex align-items-center  gap-3">
                <div class="align-items-center">
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                </div>
                <div>
                  <p>5.0(257)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-75 mx-auto  col-md card-child">
          <div class="d-flex align-items-center text-uppercase bg-three p-4 gap-1">
            <FaWordpress size={70} color="white" />
            <h5 class="text-white text-uppercase">
              wordpress <br /> development <br /> course
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text text-sm">
              Angular is popular for making dynamic applications and its
              information official
            </p>
            <div>
              <p class="text-capitalize fst-italic">reviews</p>
              <div class="d-flex align-items-center  gap-3">
                <div class="align-items-center">
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                </div>
                <div>
                  <p>5.0(257)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" w-75 mx-auto  col-md card-child">
          <div class="d-flex align-items-center text-uppercase bg-four p-4 gap-1">
            <FaPython size={70} color="white" />
            <h5 class="text-white text-uppercase">
              python <br /> development <br /> course
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text text-sm">
              Angular is popular for making dynamic applications and its
              information official
            </p>
            <div>
              <p class="text-capitalize fst-italic">reviews</p>
              <div class="d-flex align-items-center  gap-3">
                <div class="align-items-center">
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                  <StarFill color="yellow" size={20} />
                </div>
                <div>
                  <p>5.0(257)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Additions;
