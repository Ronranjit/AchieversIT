import React from "react";

const Slider = () => {
  return (
    <section className="parent-slider">
      <div
        id="carouselExampleCaptions"
        class="carousel slide slider"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.achieversit.com/assets/images/angular_training.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 class="text-uppercase text-danger fw-bold">
                angular development course
              </h1>
              <button class="px-4 py-2 text-center bg-orange btn text-capitalize ">
                explore course
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.achieversit.com/assets/images/full_stack_development.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-uppercase text-white fw-bold">
                python development course
              </h1>
              <button class="px-4 py-2 text-center bg-orange btn text-capitalize ">
                explore course
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.achieversit.com/assets/images/react_training.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="text-uppercase text-white fw-bold ">
                reactjs development course
              </h1>
              <button class="px-4 py-2 text-center bg-orange btn text-capitalize ">
                explore course
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* start of card */}

      <section class="row gap-md-5 container mx-auto home-card">
        <div class="card   col-md ">
          <div class="card-body d-flex justify-content-between align-items-center slider-child ">
            <div class="">
              <p className="card-subtitle text-uppercase text-secondary">
                become a
              </p>
              <p class="card-title text-uppercase fw-bold">ui developer</p>
            </div>
            <div>
              <a href="" class="text-decoration-none text-capitalize">
                know more
              </a>
            </div>
          </div>
        </div>
        <div class="card  p-2 col-md ">
          <div class="card-body d-flex justify-content-between align-items-center ">
            <div class="">
              <p className="card-subtitle text-uppercase text-secondary">
                become a
              </p>
              <p class="card-title text-uppercase fw-bold">angular developer</p>
            </div>
            <div>
              <a href="" class="text-decoration-none text-capitalize">
                know more
              </a>
            </div>
          </div>
        </div>
        <div class="card  p-2 col-md ">
          <div class="card-body  d-flex justify-content-between align-items-center slider-card ">
            <div class="">
              <p className="card-subtitle text-uppercase text-secondary">
                become a
              </p>
              <p class="card-title text-uppercase fw-bold">reactjs developer</p>
            </div>
            <div>
              <a href="" class="text-decoration-none text-capitalize">
                know more
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Slider;
