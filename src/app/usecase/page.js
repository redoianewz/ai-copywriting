import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import UsecaseComponent from "@/components/UseCaseComponent";
export default function Usecase() {
  return (
    <div className="nk-app-root">
      <Header page={UsecaseComponent} path="/usecase" />
      <main className="nk-pages">
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-mask bg-gradient-a"></div>
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-xl-8">
                  <h6 className="overline-title text-primary">Use cases</h6>
                  <h1 className="title">
                    Write high-converting emails in{" "}
                    <br className="d-none d-md-block" /> <s>hours</s>{" "}
                    <span className="text-primary">minutes</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row text-center g-gs">
                <div className="col-md-6 col-xl-4">
                  <a
                    href="usecase/1"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-success-soft rounded-pill">
                            <em className="icon ni ni-globe"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Website Copy &amp; SEO</h3>
                          <p>
                            Missing inspiration for your Landing Page? Generate
                            headlines, meta tags.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/2"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-info-soft rounded-pill">
                            <em className="icon ni ni-flag"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Social Media &amp; Ads</h3>
                          <p>
                            Write Facebook or Google ads, Youtube video
                            descriptions or titles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/3"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-pill">
                            <em className="icon ni ni-edit"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Blog Section Writing</h3>
                          <p>
                            Explain to you how all this mistak idea of pain
                            complete we den ounce with righteous
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/4"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-warning-soft rounded-pill">
                            <em className="icon ni ni-signal"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Digital Ad Copy</h3>
                          <p>
                            Write creative and original advertisement copies for
                            social media channels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/5"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-purple-soft rounded-pill">
                            <em className="icon ni ni-percent"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Discount and Sales</h3>
                          <p>
                            Pass your request as a command and let AI do the
                            work for you magically.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/6"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-danger-soft rounded-pill">
                            <em className="icon ni ni-briefcase"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Job Description</h3>
                          <p>
                            Create engaging job descriptions for any position to
                            attract the best candidates
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/7"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-pill">
                            <em className="icon ni ni-puzzle"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Event Promotion</h3>
                          <p>Increase your sign ups and generate more leads</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/8"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-success-soft rounded-pill">
                            <em className="icon ni ni-comments"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Testimonial &amp; Review</h3>
                          <p>
                            Quickly write candid testimonials and reviews for
                            people and services
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/9"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-info-soft rounded-pill">
                            <em className="icon ni ni-tags"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Keywords Extractor</h3>
                          <p>
                            Identify main keywords, keyphrases, and questions in
                            any text
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/10"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-info-soft rounded-pill">
                            <em className="icon ni ni-video"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Video Description</h3>
                          <p>
                            Create engaging job descriptions for any position to
                            attract the best candidates
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/11"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-warning-soft rounded-pill">
                            <em className="icon ni ni-file-text"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">Keywords Generator</h3>
                          <p>
                            Come up with related keywords, keyphrases, and
                            questions using AI writing assistant
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-6 col-xl-4">
                  <a
                    href="/usecase/12"
                    className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                  >
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-pink-soft rounded-pill">
                            <em className="icon ni ni-cart"></em>
                          </div>
                        </div>
                        <div className="feature-text text-base">
                          <h3 className="title">eCommerce Copy</h3>
                          <p>
                            Finding Product Names or Product Descriptions can be
                            very time consuming.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-light section-bottom-0">
          <div className="container">
            <div className="section-content">
              <div className="row gx-gs gy-6 justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-8">
                  <div className="block-text pe-xxl-7 text-center text-xl-start">
                    <h2 className="title">CopyGenAI Benefits</h2>
                    <p className="lead">
                      I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings.
                    </p>
                    <ul className="btn-list btn-list-inline gy-0">
                      <li>
                        <a href="#" className="btn btn-lg btn-primary">
                          <span>See how it works</span>
                          <em className="icon ni ni-arrow-long-right"></em>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card rounded-4 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media">
                              <div className="media media-middle media-lg text-white bg-primary rounded-3">
                                <em className="icon ni ni-globe"></em>
                              </div>
                            </div>
                            <div className="feature-text">
                              <h3 className="title">Website Copy &amp; SEO</h3>
                              <p>
                                Missing inspiration for your Landing Page?
                                Generate headlines, meta tags.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card rounded-4 border-0 shadow-sm mt-gs">
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media">
                              <div className="media media-middle media-lg text-white bg-warning rounded-3">
                                <em className="icon ni ni-signal"></em>
                              </div>
                            </div>
                            <div className="feature-text">
                              <h3 className="title">Digital Ad Copy</h3>
                              <p>
                                Write creative and original advertisement copies
                                for social media channels.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                      <div className="card rounded-4 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media">
                              <div className="media media-middle media-lg text-white bg-info rounded-3">
                                <em className="icon ni ni-flag"></em>
                              </div>
                            </div>
                            <div className="feature-text">
                              <h3 className="title">Social Media &amp; Ads</h3>
                              <p>
                                Write Facebook or Google ads, Youtube video
                                descriptions or titles.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card rounded-4 border-0 shadow-sm mt-gs">
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media">
                              <div className="media media-middle media-lg text-white bg-danger rounded-3">
                                <em className="icon ni ni-briefcase"></em>
                              </div>
                            </div>
                            <div className="feature-text">
                              <h3 className="title">Job Description</h3>
                              <p>
                                Create engaging job descriptions for any
                                position to attract the best candidates
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-bottom-0">
          <div className="container">
            <div className="section-wrap bg-primary bg-opacity-10 rounded-4">
              <div className="section-content bg-pattern-dot-sm p-4 p-sm-6">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-8 col-xxl-9">
                    <div className="block-text">
                      <h6 className="overline-title text-primary">
                        Boost your writing productivity
                      </h6>
                      <h2 className="title">End writer’s block today</h2>
                      <p className="lead mt-3">
                        It’s like having access to a team of copywriting experts
                        writing powerful copy for you in 1-click.
                      </p>
                      <ul className="btn-list btn-list-inline">
                        <li>
                          <a href="#" className="btn btn-lg btn-primary">
                            <span>Start writing for free</span>
                            <em className="icon ni ni-arrow-long-right"></em>
                          </a>
                        </li>
                      </ul>
                      <ul className="list list-row gy-0 gx-3">
                        <li>
                          <em className="icon ni ni-check-circle-fill text-success"></em>
                          <span>No credit card required</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check-circle-fill text-success"></em>
                          <span>Cancel anytime</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check-circle-fill text-success"></em>
                          <span>10+ tools to expolore</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section bg-light has-shape">
          <div class="nk-shape bg-shape-blur-m mt-n3 start-50 top-0 translate-middle-x"></div>
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                  <h6 class="overline-title text-primary">Testimonials</h6>
                  <h2 class="title">
                    CopyGen is rated 4.9/5 stars in over 2,000 reviews
                  </h2>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row g-gs justify-content-center align-items-center">
                <div class="col-lg-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body">
                      <ul class="list list-row gy-0 g-1 mb-3">
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                      </ul>
                      <h4 class="title mb-3">
                        It Gave Me Back Quality Time To Spend w Friends &amp;
                        Family...
                      </h4>
                      <p>
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        a complete account of the system.
                      </p>
                      <div class="d-flex pt-3">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-a.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h5 class="mb-1">Derek Gehl</h5>
                          <div class="sub-text">CEO at Hire &amp; Retain</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body">
                      <ul class="list list-row gy-0 g-1 mb-3">
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                      </ul>
                      <h4 class="title mb-3">
                        A year of organic marketing in about 30 minutes
                      </h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis
                      </p>
                      <div class="d-flex pt-3">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-b.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h5 class="mb-1">Frances Burns</h5>
                          <div class="sub-text">Designer at Softnio</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body">
                      <ul class="list list-row gy-0 g-1 mb-3">
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                        <li>
                          <em class="icon text-warning ni ni-star-fill fs-5"></em>
                        </li>
                      </ul>
                      <h4 class="title mb-3">
                        Just wanna shout out the whole team for this amazing
                        tool
                      </h4>
                      <p>
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        a complete account of the system.
                      </p>
                      <div class="d-flex pt-3">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-c.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h5 class="mb-1">Ashley Lawson</h5>
                          <div class="sub-text">Creative at Envato</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
