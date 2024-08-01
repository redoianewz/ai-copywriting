import Image from "next/image";

export default function Footer() {
    return (
      <footer class="nk-footer">
        <section class="section bg-light section-0 has-mask">
          <div class="nk-mask top-50">
            <div
              className="nk-mask bg-gradient-a"
              style={{ borderRadius: "50% 0% 50% 0" }}
            ></div>
            <div
              className="nk-mask bg-gradient-primary"
              style={{ borderRadius: "0% 50% 0% 50%" }}
            ></div>
            <div className="nk-mask bg-pattern-dot bg-blend-top"></div>
          </div>
          <div class="container container-xl">
            <div class="section-wrap bg-dark is-dark rounded-4 has-shape overflow-hidden">
              <div class="nk-shape bg-shape-blur-b start-50 top-50 translate-middle"></div>
              <div class="section-content p-4 p-sm-5 p-xl-7">
                <div class="row justify-content-between align-items-center g-5">
                  <div class="col-xl-5 col-lg-6">
                    <div class="block-text">
                      <h6 class="overline-title text-primary">
                        Boost your writing productivity
                      </h6>
                      <h2 class="title">End writer’s block today</h2>
                      <p>
                        It’s like having access to a team of copywriting experts
                        writing powerful copy for you in 1-click.
                      </p>
                      <ul class="list list-row gx-3 gy-0">
                        <li>
                          <em class="icon fs-5 ni ni-check-circle-fill text-info"></em>
                          <span>No credit card required</span>
                        </li>
                        <li>
                          <em class="icon fs-5 ni ni-check-circle-fill text-info"></em>
                          <span>Cancel anytime</span>
                        </li>
                      </ul>
                      <ul class="btn-list btn-list-inline gy-0">
                        <li>
                          <a
                            href="/register"
                            class="btn btn-lg btn-primary rounded-pill"
                          >
                            <span>Start writing for free</span>
                            <em class="icon ni ni-arrow-long-right"></em>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 align-self-end">
                    <div class="bg-white rounded-top-4">
                      <div class="rounded-top-4 bg-gradient-primary bg-opacity-70 p-5 pb-0 mb-n4 mb-sm-n5 mb-xl-n7">
                        <div class="block-gfx">
                          <img
                            class="w-100 rounded-top-3 shadow-sm"
                            src="/images/gfx/process/c.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section  has-shape">
          <div class="nk-shape bg-shape-border-e ms-n25p mt-2 start-50 translate-middle-x"></div>
          <div class="container">
            <div class="nk-shape bg-shape-wormhole-a mt-n45p mt-xl-n40p mt-xxl-n35p ms-2 start-50 top-100 translate-middle-x"></div>

            <div class="row g-5">
              <div class="col-xl-4 col-lg-3 me-auto">
                <div class="block-text">
                  <a href="index.html" class="logo-link mb-4">
                    <div class="logo-wrap">
                      <img
                        class="logo-img logo-light"
                        src="/images/logo.png"
                        srcset="images/logo2x.png 2x"
                        alt=""
                      />
                      <img
                        class="logo-img logo-dark"
                        src="/images/logo-dark.png"
                        srcset="images/logo-dark2x.png 2x"
                        alt=""
                      />
                    </div>
                  </a>
                  <ul class="btn-list btn-list-inline g-1">
                    <li>
                      <a class="link-base" href="#">
                        <em class="icon fs-3 ni ni-facebook-fill"></em>
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        <em class="icon fs-3 ni ni-github-round"></em>
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        <em class="icon fs-3 ni ni-linkedin-round"></em>
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        <em class="icon fs-3 ni ni-youtube-round"></em>
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        <em class="icon fs-3 ni ni-twitter-round"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg col-md-3 col-6">
                <div class="wgs">
                  <h6 class="wgs-title">Tools</h6>
                  <ul class="list gy-2 list-link-base">
                    <li>
                      <a class="link-base" href="#">
                        Article Generator
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Blog Ideas
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Blog Intros
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Blog Outlines
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Product Description
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg col-md-3 col-6">
                <div class="wgs">
                  <h6 class="wgs-title">Resources</h6>
                  <ul class="list gy-2 list-link-base">
                    <li>
                      <a class="link-base" href="#">
                        Facebook Group
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Discord Community
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Guide and Tutorials
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Request API access
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg col-md-3 col-6">
                <div class="wgs">
                  <h6 class="wgs-title">Company</h6>
                  <ul class="list gy-2 list-link-base">
                    <li>
                      <a class="link-base" href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Wall of Love
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg col-md-3 col-6">
                <div class="wgs">
                  <h6 class="wgs-title">Use Case</h6>
                  <ul class="list gy-2 list-link-base">
                    <li>
                      <a class="link-base" href="#">
                        AI Writer
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        AI Articel Writer
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Content Generator
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        AI Content Writing
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Content Rewriter
                      </a>
                    </li>
                    <li>
                      <a class="link-base" href="#">
                        Blog Post Writer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class=" is-dark">
          <div class="container">
            <hr class="border-opacity-25 border-white m-0" />
            <div class="py-5">
              <div class="row">
                <div class="col-md">
                  <p class="mb-2 mb-md-0">
                    &copy; 2023 CopyGenAI. Template by
                    <a href="#" class="fw-bold text-white">
                      Softnio
                    </a>
                    .
                  </p>
                </div>
                <div class="col-md">
                  <ul class="list list-row gx-4 justify-content-start justify-content-md-end">
                    <li>
                      <a href="#" class="link-primary">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" class="link-primary">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}