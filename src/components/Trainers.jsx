import React from "react";

const Trainers = () => {
  return (
    <section className="container mt-5">
      <h3 className="text-uppercase fw-bold">our trainers from</h3>
      <div className="p-4">
        <div className="row gap-3  mb-5">
          <div className="col-md-3  trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/php_development_training.png"
              alt=""
              width={130}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/ui_Development_training.png"
              alt=""
              width={100}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/angualr_development_training.png"
              alt=""
              width={100}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/aws_development_training.png"
              alt=""
              width={100}
            />
          </div>
        </div>
        <div className="row gap-3 mb-5">
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/boostrap_development%20.png"
              alt=""
              width={130}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/react_development_training.png"
              alt=""
              width={100}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/software_development_training.png"
              alt=""
              width={100}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/software_training_courses.png"
              alt=""
              width={100}
            />
          </div>
        </div>
        <div className="row gap-3">
          <div className="col-md-3  trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/web_development_training.png"
              alt=""
              width={100}
            />
          </div>
          <div className="col-md-3 trainers card-child">
            <img
              src="https://www.achieversit.com/assets/images/angularjs_training.png"
              alt=""
              width={100}
            />
          </div>
          <div className="col-md-3  trainers1">
            <img src="" alt="" width={100} />
          </div>
          <div className="col-md-3 trainers1 ">
            <img src="" alt="" width={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
