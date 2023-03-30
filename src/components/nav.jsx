import React from "react";

function Nav() {
  const NavStyle = {
    height: "2rem",
    marginLeft: "5rem",
  };

  return (
    <>
      <div className="fixed-top">
        <nav
          className="navbar navbar-dark  "
          aria-label="First navbar example"
        >
          <div className="container-fluid">
            <a
              href="/"
              alt=""
            >
              <img
                style={NavStyle}
                src="./images/my-logo.svg"
                alt="Terra Nova "
              />
            </a>
            <button
              className="navbar-toggler nav-button-mobile"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample01"
              aria-controls="navbarsExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="row ">
                <span className="col navbar-toggler-icon"></span>
              </div>
              <ul className="nav-drop-menu-mobile">
                <li>
                  <h6>
                    Floats Your Boat
                    <ul className="nav-drop-menu-mobile-item">
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/africa">
                          <h6> Africa</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/latin-america">
                          <h6> Latin America</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/asia-india">
                          <h6> Asia & India</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/europe">
                          <h6> Europe</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/australia-asia">
                          <h6> Oceania</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/world-of-plants">
                          <h6> World of Plants</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/botanicals">
                          <h6> Botanicals</h6>
                        </a>
                      </li>
                      <li className="nav-drop-menu-mobile-sub">
                        <a href="/endangered-culture">
                          <h6> Endangered Cultures</h6>
                        </a>
                      </li>
                    </ul>
                  </h6>
                </li>
                <li>
                  <h6>Points on the Compass</h6>
                </li>
                <li>
                  <h6> Ways To Go</h6>
                </li>
                <li>
                  <h6> Travel Dispatches</h6>
                </li>
                <li>
                  <h6> Group Travel</h6>
                </li>
                <li>
                  <h6> About</h6>
                </li>
                <li>
                  <h6> Contact</h6>
                </li>
              </ul>
            </button>

            <div className="links ">
              <button
                type="button"
                className="nav-button me-3 pt-3"
              >
                <a href="/about">
                  <p>About</p>
                </a>
              </button>
              <button
                type="button"
                className="nav-button me-3 pt-3"
              >
                <p>Points on the Compass</p>{" "}
                <ul className="nav-drop-menu">
                  <li className="nav-drop-menu-item">
                    <a href="/africa">
                      <p> Africa</p>
                    </a>
                    <a href="/australia-asia">
                      <p>Oceania</p>
                    </a>

                    <a href="/asia-india">
                      <p> Asia & India</p>
                    </a>
                    <a href="/europe">
                      <p> Europe</p>
                    </a>

                    <a href="/latin-america">
                      <p> Latin America</p>
                    </a>
                    <a href="/morocco">
                      <p> Morocco</p>
                    </a>
                  </li>
                </ul>
              </button>

              <button
                type="button"
                className="nav-button me-3 pt-3 "
              >
                <p>Floats Your Boat</p>
                <ul className="nav-drop-menu">
                  <li className="nav-drop-menu-item">
                    <a href="/botanicals">
                      <p>Botanicals</p>
                    </a>
                    <a href="/eco-adventures">
                      <p> Eco Adventures</p>
                    </a>
                    <a href="/endangered-culture">
                      <p> Endangered Cultures</p>
                    </a>
                    <a href="/food-and-drink">
                      <p> Food & Drink</p>
                    </a>

                    <a href="/safari">
                      <p> Safari</p>
                    </a>
                    <a href="/small-ships">
                      <p> Small Ships</p>
                    </a>
                    <a href="/treks">
                      <p> Treks</p>
                    </a>

                    <a href="/world-of-plants">
                      <p> World of Plants</p>
                    </a>
                  </li>
                </ul>
              </button>

              <button
                type="button"
                className="nav-button me-3 pt-3"
              >
                <p>Ways To Go</p>{" "}
                <ul className="nav-drop-menu">
                  <li className="nav-drop-menu-item">
                    <a href="/custom-group">
                      <p> Group Travel</p>
                    </a>
                    <a href="/multi-generation">
                      <p> Family </p>
                    </a>
                    <a href="/departure-group">
                      <p> Departure Groups</p>
                    </a>

                    <a href="/private-individual">
                      <p> Private Individuals</p>
                    </a>
                    <a href="/women">
                      <p> Women</p>
                    </a>
                  </li>
                </ul>
              </button>

              <button
                type="button"
                className="nav-button me-3 pt-3"
              >
                <p>Group Travel</p>{" "}
                <ul className="nav-drop-menu">
                  <li className="nav-drop-menu-item">
                    <a href="/">
                      <p> Sample1</p>
                    </a>
                    <a href="/">
                      <p> Sample2</p>
                    </a>
                    <a href="/">
                      <p> Sample3</p>
                    </a>
                    <a href="/">
                      <p> Sample4</p>
                    </a>
                    <a href="/">
                      <p> Sample5</p>
                    </a>
                  </li>
                </ul>
              </button>

              <button
                type="button"
                className="nav-button me-3 pt-3"
              >
                <p>Travel Dispatches</p>{" "}
                <ul className="nav-drop-menu">
                  <li className="nav-drop-menu-item">
                    <a href="/a-broad-abroad">
                      <p> A Broad Abroad </p>
                    </a>
                    <a href="/">
                      <p> Image Gallery</p>
                    </a>

                    <a href="/">
                      <p> Past Itineraries</p>
                    </a>
                  </li>
                </ul>
              </button>

              <a href="/contact">
                <button
                  type="button"
                  className="nav-button me-3 pt-3"
                >
                  <p>Contact</p>
                </button>
              </a>
              <p>
                <img
                  src="./images/search.svg"
                  alt=""
                  className="pt-3"
                />
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
