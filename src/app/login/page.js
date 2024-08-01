import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Login() {
  return (
    <div className="nk-app-root">
      <Header path="/login" />
      <section class="section section-bottom-0 pb-5 has-mask">
        <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
        <div class="container">
          <div class="section-head">
            <div class="row justify-content-center text-center">
              <div class="col-lg-11 col-xl-10 col-xxl-9">
                <h6 class="overline-title text-primary">Welcome Back!</h6>
                <h2 class="title">Login to countinue</h2>
              </div>
            </div>
          </div>
          <div class="section-content">
            <div class="row g-gs justify-content-center">
              <div class="col-md-7 col-lg-6 col-xl-5">
                <div class="card border-0 shadow-sm rounded-4">
                  <div class="card-body">
                    <form action="index.html" novalidate>
                      <div class="row g-4">
                        <div class="col-12">
                          <div class="form-group">
                            <label class="form-label" for="emailorusername">
                              Email or Username
                            </label>
                            <div class="form-control-wrap">
                              <input
                                type="email"
                                name="emailorusername"
                                id="emailorusername"
                                class="form-control form-control-lg"
                                placeholder="Enter Email or Username"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="form-group">
                            <label class="form-label" for="toggle-password">
                              Password
                            </label>
                            <div class="form-control-wrap">
                              <a
                                href="toggle-password"
                                class="form-control-icon end password-toggle"
                                title="Toggle show/hide password"
                              >
                                <em class="on icon ni ni-eye text-base"></em>
                                <em class="off icon ni ni-eye-off text-base"></em>
                              </a>
                              <input
                                type="password"
                                name="password"
                                id="toggle-password"
                                class="form-control form-control-lg"
                                placeholder="Enter Password"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="d-flex flex-wrap justify-content-between has-gap g-3">
                            <div class="form-group">
                              <div class="form-check form-check-sm">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="rememberMe"
                                />
                                <label
                                  class="form-check-label"
                                  for="rememberMe"
                                >
                                  {" "}
                                  Remember Me{" "}
                                </label>
                              </div>
                            </div>
                            <a href="/reset-password" class="small">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <button
                              class="btn btn-primary btn-block"
                              type="submit"
                              id="submit-btn"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                        <div class="col-12 text-center">
                          <div class="small mb-3">or login with</div>
                          <ul class="btn-list btn-list-inline gx-2">
                            <li>
                              <a class="btn btn-light btn-icon" href="#">
                                <em class="icon fs-5 ni ni-facebook-f"></em>
                              </a>
                            </li>
                            <li>
                              <a class="btn btn-light btn-icon" href="#">
                                <em class="icon fs-5 ni ni-google"></em>
                              </a>
                            </li>
                            <li>
                              <a class="btn btn-light btn-icon" href="#">
                                <em class="icon fs-5 ni ni-apple"></em>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <p class="text-center mt-4">
                  Don&lsquo;t have an account? <a href="/register">Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}