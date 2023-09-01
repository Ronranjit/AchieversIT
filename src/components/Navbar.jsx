import bootstrap from "bootstrap";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  parent-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://www.achieversit.com/assets/images/AIT-white.jpg"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto text-white">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                all courses
              </a>
              <ul class="dropdown-menu text-white">
                <li>
                  <a class="dropdown-item " href="#">
                    front end course
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    full stack course
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    mobile application development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    cloud computing
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    data science
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    artificial intelligence
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    sap
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    digital marketing course
                  </a>
                </li>
                <li>
                  <a class="dropdown-item small" href="#">
                    microsoft training
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                corporate training
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                placement
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                internship
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                review
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
