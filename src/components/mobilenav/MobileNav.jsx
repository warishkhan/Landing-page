import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link based on route
  }, [location]);
  return (
    <>
      <div
        className={`mobileNav-main-container ${visible ? "visible" : "hidden"}`}
      >
        <div className="navbar-flex-container">
          <div>
            <Link className="navbar1_logo-link w-nav-brand w--current">
              <img
                src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6668c55d3098c52eb3a33ef6_3rd%20(1).svg"
                loading="lazy"
                alt="logo"
                className="navbar1_logo"
              />
            </Link>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                onClick={() => {
                  setOpen(!open);
                }}
              />
              <div className="bar">
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
              </div>
            </label>
          </div>
        </div>
      </div>

      <nav className={`sidebar ${open ? "visible" : "hidden"}`}>
        <div className="navbar-column-container">
          <ul className="mobileNav-items">
            <li>
              <Link
                to="/"
                className={`navbar3_link ${activeLink === "/" ? "active" : ""}`}
                onClick={() => setActiveLink("/")}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                to="/brand"
                className={`navbar3_link ${
                  activeLink === "/brand" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/brand")}
              >
                Brand
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`navbar3_link ${
                  activeLink === "/about" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/about")}
              >
                About Us
              </Link>
            </li>
            <li>
                        <Link
                            to="#"
                            className={`navbar4_link`}
                            onClick={() => setActiveLink('#')}
                        >
                            Get Started
                        </Link>
                    </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
