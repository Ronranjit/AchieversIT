import React from "react";

const Top = () => {
  return (
    <section className="top py-4 mt-5">
      <div className="container mt-5 ">
        <h1 className="fw-bold text-center text-primary">
          Why We are on TOP 1
        </h1>
        <p className="fs-5 text-center text-primary">
          More people train with AcheiversIT because of ourcommitment to
          quality, Placement Support, and Real-time Training.
        </p>
        <div className="row mt-5 p-3 gap-2 ">
          <div className="col-md bg-white top1 card-child top-child-1">
            <div>
              <h1 className="fw-bold ">135 +</h1>

              <p className="text-uppercase">trending course</p>
            </div>
          </div>
          <div className="col-md top1 card-child top-child-2">
            <div>
              <h1 className="fw-bold ">60 +</h1>
              <p className="e">
                IT Companies are tied-UP to hire <br /> our trained students
              </p>
            </div>
          </div>
          <div className="col-md top1 card-child top-child-3">
            <div>
              <h1 className="fw-bold ">25 +</h1>
              <p className="">
                Students attend Interviews every day <br /> through our
                Placement Cell
              </p>
            </div>
          </div>
          <div className="col-md top1 card-child top-child-4">
            <div>
              <h1 className="fw-bold ">3 +</h1>
              <p className="">
                Of our students Get Jobs every <br /> day in Bangalore and India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
