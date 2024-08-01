import Image from "next/image";
import Link from "next/link";

export default function Header({ page: PageComponent, path }) {
    const ContentComponent =
      PageComponent || (() => <div></div>);
  return (
    <header className="nk-header has-mask">
      {PageComponent && <div className="nk-mask bg-gradient-a"></div>}
      <div className="nk-mask bg-pattern-dot bg-blend-top"></div>
      <div className="nk-header-main nk-menu-main will-shrink is-transparent ignore-mask ">
        <div className="container">
          <div className="nk-header-wrap">
            <div className="nk-header-logo">
              <a href="index.html" className="logo-link">
                <div className="logo-wrap">
                  <Image
                    width={100}
                    height={200}
                    className="logo-img logo-dark"
                    src="/images/logo-dark.png"
                    srcSet="/images/logo-dark2x.png 2x"
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="nk-header-toggle">
              <button className="btn btn-light btn-icon header-menu-toggle">
                <em className="icon ni ni-menu"></em>
              </button>
            </div>
            <nav className="nk-header-menu nk-menu">
              <ul className="nk-menu-list mx-auto">
                <li className={`nk-menu-item ${path === "/" ? "active" : ""}`}>
                  <a href="/" className="nk-menu-link">
                    <span className="nk-menu-text">Home</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${
                    path === "/usecase" || path === "/usecase/[usecaseid]"
                      ? "active"
                      : ""
                  }`}
                >
                  <a href="/usecase" className="nk-menu-link">
                    <span className="nk-menu-text">Use Cases</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${
                    path === "/features" ? "active" : ""
                  }`}
                >
                  <a href="/features" className="nk-menu-link">
                    <span className="nk-menu-text">Features</span>
                  </a>
                </li>
                <li className="nk-menu-item has-dropdown">
                  <a href="#" className="nk-menu-link nk-menu-toggle">
                    <span className="nk-menu-text">Explore</span>
                  </a>
                  <div className="nk-menu-dropdown nk-menu-mega">
                    <div className="nk-menu-mega-wrap">
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="about.html">
                            About
                          </a>
                        </li>                     
                        <li
                          className={` ${
                            path === "/usecase" ? "active": "" }`}
                        >
                          <Link href="/usecase">
                            Use Cases
                          </Link>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            href="usecase-details.html"
                          >
                            Use Case Details{" "}
                            <div className="badge bg-primary ms-2 me-n4 px-2 rounded-pill">
                              New
                            </div>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="usecase-s2.html">
                            Use Case S2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            href="usecase-details-s2.html"
                          >
                            Use Case Details S2{" "}
                            <div className="badge bg-primary ms-2 me-n4 px-2 rounded-pill">
                              New
                            </div>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="pricing.html">
                            Pricing
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="pricing-s2.html">
                            Pricing S2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="blog.html">
                            Blog
                          </a>
                        </li>
                      </ul>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="blog-single.html">
                            Blog Single
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="features.html">
                            Features
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a className="nk-menu-link" href="contact-s2.html">
                            Contact S2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="login.html"
                          >
                            Login
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="login-s2.html"
                          >
                            Login S2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="register.html"
                          >
                            Register
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="register-s2.html"
                          >
                            Register S2
                          </a>
                        </li>
                      </ul>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="reset.html"
                          >
                            Reset
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="reset-s2.html"
                          >
                            Reset S2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="404.html"
                          >
                            404 Error
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="404-s2.html"
                          >
                            404 Error S2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="504.html"
                          >
                            504 Error
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="504-s2.html"
                          >
                            504 Error s2
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            className="nk-menu-link"
                            target="_blank"
                            href="terms-condition.html"
                          >
                            Terms &amp; Condition
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nk-menu-item">
                  <a href="pricing.html" className="nk-menu-link">
                    <span className="nk-menu-text">Pricing</span>
                  </a>
                </li>
              </ul>
              <ul className="nk-menu-buttons flex-lg-row-reverse">
                <li>
                  <a href="#" className="btn btn-primary">
                    Start Writing
                  </a>
                </li>
                <li>
                  <a className="link link-dark" href="login.html">
                    Login{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="nk-hero pt-xl-5">
        <ContentComponent />
      </div>
    </header>
  );
}
