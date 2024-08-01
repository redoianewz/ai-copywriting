import Image from "next/image";

export default function Header({ page: PageComponent, path }) {
  const ContentComponent = PageComponent || (() => <div></div>);
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
                <li
                  className={`nk-menu-item ${
                    path === "/about" ? "active" : ""
                  }`}
                >
                  <a href="/about" className="nk-menu-link">
                    <span className="nk-menu-text">About</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${path === "/blog" ? "active" : ""}`}
                >
                  <a href="/blog" className="nk-menu-link">
                    <span className="nk-menu-text">Blog</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${
                    path === "/contact" ? "active" : ""
                  }`}
                >
                  <a href="/contact" className="nk-menu-link">
                    <span className="nk-menu-text">Contact</span>
                  </a>
                </li>
                <li
                  className={`nk-menu-item ${
                    path === "pricing" ? "active" : ""
                  }`}
                >
                  <a href="pricing" className="nk-menu-link">
                    <span className="nk-menu-text">Pricing</span>
                  </a>
                </li>
              </ul>
              <ul className="nk-menu-buttons flex-lg-row-reverse">
                <li>
                  <a href="/register" className="btn btn-primary">
                    Start Writing
                  </a>
                </li>
                <li>
                  <a className="link link-dark" href="/login">
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
