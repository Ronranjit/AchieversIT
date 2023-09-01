import React from "react";

const Form = () => {
  return (
    <section className="form mt-5">
      <section className="container ">
        <div className="d-md-flex justify-content-around align-items-center p-4">
          <div>
            <h1>Impressed by Us? Enroll Now</h1>
            <p>Structure your learning and get a certificate to prove it.</p>
          </div>
          <div className="form-bg p-4">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control text-white"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputContact" class="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  class="form-control text-white"
                  id="exampleInputContact"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Form;
