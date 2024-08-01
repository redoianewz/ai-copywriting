import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import UseCaseIDComponent from "@/components/UseCaseIDComponent";
export default function UseCaseDetaills() {
  return (
    <div className="nk-app-root">
      <Header page={UseCaseIDComponent} path="/usecase" />
      <main class="nk-pages">
        <section class="section section-lg section-bottom-0 has-shape">
          <div class="nk-shape bg-shape-blur-f me-12 mt-10p end-50"></div>
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-xl-11 col-xxl-10">
                  <h2 class="title h1">
                    CopyGen helps{" "}
                    <span class="text-gradient-primary">76,000+</span> people
                    like you create better content 10X faster.
                  </h2>
                  <a href="#" class="btn btn-lg btn-primary">
                    <span>Start for free</span>{" "}
                    <em class="icon ni ni-arrow-long-right"></em>
                  </a>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row g-gs justify-content-center">
                <div class="col-xxl-10">
                  <div class="card border-0 shadow-sm">
                    <div class="card-body">
                      <div class="swiper-init swiper">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <div class="row align-items-center gx-4 gx-lg-5 gx-xl-6">
                              <div class="col-md-4 col-sm-6 col-8">
                                <div class="bg-gradient-primary rounded-3 p-2 bg-opacity-70">
                                  <img
                                    class="rounded-3"
                                    src="/images/avatar/testimonials/md-a.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div class="py-md-3 pt-3">
                                  <blockquote class="blockquote">
                                    “At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti provident,
                                    similique sunt in culpa qui officia deserunt
                                    mollitia animi”
                                  </blockquote>
                                  <div class="block-info pt-lg-4">
                                    <h4 class="title">Kathleen Smith</h4>
                                    <div class="caption-text">
                                      Author, Podcast Host
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="row align-items-center gx-4 gx-lg-5 gx-xl-6">
                              <div class="col-md-4 col-sm-6 col-8">
                                <div class="bg-gradient-primary rounded-3 p-2 bg-opacity-70">
                                  <img
                                    class="rounded-3"
                                    src="/images/avatar/testimonials/md-b.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div class="py-md-3 pt-3">
                                  <blockquote class="blockquote">
                                    “At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti provident,
                                    similique sunt in culpa qui officia deserunt
                                    mollitia animi”
                                  </blockquote>
                                  <div class="block-info pt-lg-4">
                                    <h4 class="title">Frances Burns</h4>
                                    <div class="caption-text">
                                      Writer, Envato Elements
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul class="swiper-button-wrap btn-list btn-list-inline gx-3 bottom-0 end-0 pb-md-5 pe-md-5 position-absolute">
                          <li>
                            <div class="swiper-button-prev btn btn-sm btn-icon btn-outline-primary rounded-pill">
                              <em class="icon ni ni-arrow-long-left"></em>
                            </div>
                          </li>
                          <li>
                            <div class="swiper-button-next btn btn-sm btn-icon btn-outline-primary rounded-pill">
                              <em class="icon ni ni-arrow-long-right"></em>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-bottom-0">
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                  <h6 class="overline-title text-primary">How it works</h6>
                  <h2 class="title">Few steps to write content </h2>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row g-gs justify-content-center flex-md-row-reverse align-items-center">
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="rounded-4 bg-info bg-opacity-50 p-5 pe-0">
                    <div class="block-gfx me-n4">
                      <img
                        class="w-100 rounded-3 shadow-sm"
                        src="/images/gfx/process/a.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="block-text">
                    <div class="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
                      01
                    </div>
                    <h3 class="title">Select a Template</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, quasi architecto beatae vitae dicta sunt
                      explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="sction-sap text-center py-3 d-none d-md-block">
              <svg
                class="h-3rem h-sm-5rem h-lg-7rem"
                viewBox="0 0 444 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M442.989 1C443.49 18.4197 426.571 53.2592 354.892 53.2591C265.293 53.2591 126.139 53.2591 80.0875 53.2591C34.0366 53.2591 7.00663 85.784 0.999979 111"
                  stroke="currentColor"
                  stroke-dasharray="7 7"
                />
              </svg>
            </div>

            <div class="h-3rem d-md-none"></div>
            <div class="section-content">
              <div class="row g-gs justify-content-center align-items-center">
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="rounded-4 bg-primary bg-opacity-40 p-5 ps-0">
                    <div class="block-gfx ms-n4">
                      <img
                        class="w-100 rounded-3 shadow-sm"
                        src="/images/gfx/process/b.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="block-text px-xxl-5">
                    <div class="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
                      02
                    </div>
                    <h3 class="title">Fill in Your Product Details</h3>
                    <p>
                      Explain with as many details as possible to the AI what
                      you would like to write about.
                    </p>
                    <ul class="list gy-2">
                      <li>
                        <em class="icon ni ni-dot"></em>
                        <span>At vero eos et accusamus et iusto</span>
                      </li>
                      <li>
                        <em class="icon ni ni-dot"></em>
                        <span>At vero eos et accusamus et iusto</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="sction-sap text-center py-3 d-none d-md-block">
              <svg
                class="h-3rem h-sm-5rem h-lg-7rem"
                viewBox="0 0 444 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.01068 1C0.510125 18.7364 17.4289 54.2093 89.1082 54.2093C178.707 54.2093 317.861 54.2093 363.912 54.2093C409.963 54.2093 436.993 87.3256 443 113"
                  stroke="currentColor"
                  stroke-dasharray="7 7"
                />
              </svg>
            </div>

            <div class="h-3rem d-md-none"></div>
            <div class="section-content">
              <div class="row g-gs justify-content-center flex-md-row-reverse align-items-center">
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="rounded-4 bg-pink bg-opacity-30 p-5 pe-0">
                    <div class="block-gfx me-n4">
                      <img
                        class="w-100 rounded-3 shadow-sm"
                        src="/images/gfx/process/c.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="block-text">
                    <div class="media media-middle text-bg-primary-soft rounded-pill fw-medium fs-5 mb-3">
                      03
                    </div>
                    <h3 class="title">Generate AI Content</h3>
                    <p>
                      Our highly trained AI understands your details and
                      generate unique and human-like content in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-bottom-0">
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                  <h6 class="overline-title text-primary">
                    Learn about besnifits
                  </h6>
                  <h2 class="title">Copygen helps‍ Social Media Managers</h2>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row g-gs justify-content-center">
                <div class="col-xl-4 col-md-6">
                  <div class="card rounded-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
                        <div class="feature-media">
                          <div class="media media-middle media-xl border border-1 text-info border-info border-opacity-25 rounded-pill">
                            <em class="icon ni ni-note-add"></em>
                          </div>
                        </div>
                        <div class="feature-text">
                          <h4 class="title">Facebook Posts</h4>
                          <p class="line-clamp-2">
                            You do not need to spend hours to write good content{" "}
                          </p>
                          <a class="link link-primary" href="#">
                            <span class="fw-regular">Try Facebook Posts</span>
                            <em class="icon fs-5 ni ni-arrow-long-right"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="card rounded-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
                        <div class="feature-media">
                          <div class="media media-middle media-xl border border-1 text-warning border-warning border-opacity-25 rounded-pill">
                            <em class="icon ni ni-bulb"></em>
                          </div>
                        </div>
                        <div class="feature-text">
                          <h4 class="title">YouTube Descriptions</h4>
                          <p class="line-clamp-2">
                            Using our AI tools and pre-built template to create
                            content briefs.
                          </p>
                          <a class="link link-primary" href="#">
                            <span class="fw-regular">
                              Try YouTube Descriptions
                            </span>
                            <em class="icon fs-5 ni ni-arrow-long-right"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="card rounded-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
                        <div class="feature-media">
                          <div class="media media-middle media-xl border border-1 text-primary border-primary border-opacity-25 rounded-pill">
                            <em class="icon ni ni-article"></em>
                          </div>
                        </div>
                        <div class="feature-text">
                          <h4 class="title">Pinterest Descriptions</h4>
                          <p class="line-clamp-2">
                            Use our advanced AI as your personal content writer{" "}
                          </p>
                          <a class="link link-primary" href="#">
                            <span class="fw-regular">
                              Try Pinterest Descriptions
                            </span>
                            <em class="icon fs-5 ni ni-arrow-long-right"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="card rounded-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
                        <div class="feature-media">
                          <div class="media media-middle media-xl border border-1 text-blue border-blue border-opacity-25 rounded-pill">
                            <em class="icon ni ni-activity-round"></em>
                          </div>
                        </div>
                        <div class="feature-text">
                          <h4 class="title">Instagram Captions</h4>
                          <p class="line-clamp-2">
                            You can simply copy your desire content and then you
                            can publish.
                          </p>
                          <a class="link link-primary" href="#">
                            <span class="fw-regular">
                              Try Instagram Captions
                            </span>
                            <em class="icon fs-5 ni ni-arrow-long-right"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="card rounded-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
                        <div class="feature-media">
                          <div class="media media-middle media-xl border border-1 text-success border-success border-opacity-25 rounded-pill">
                            <em class="icon ni ni-note-add"></em>
                          </div>
                        </div>
                        <div class="feature-text">
                          <h4 class="title">LinkedIn Posts</h4>
                          <p class="line-clamp-2">
                            Write and saved once, use everywhere.{" "}
                          </p>
                          <a class="link link-primary" href="#">
                            <span class="fw-regular">Try LinkedIn Posts</span>
                            <em class="icon fs-5 ni ni-arrow-long-right"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="card rounded-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                      <div class="feature feature-inline flex-md-column flex-lg-row flex-xl-column flex-xxl-row">
                        <div class="feature-media">
                          <div class="media media-middle media-xl border border-1 text-danger border-danger border-opacity-25 rounded-pill">
                            <em class="icon ni ni-star-round"></em>
                          </div>
                        </div>
                        <div class="feature-text">
                          <h4 class="title">TikTok Scripts</h4>
                          <p class="line-clamp-2">
                            Let AI write for you in over 40 languages. Our AI
                            can{" "}
                          </p>
                          <a class="link link-primary" href="#">
                            <span class="fw-regular">Try TikTok Scripts</span>
                            <em class="icon fs-5 ni ni-arrow-long-right"></em>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-bottom-0">
          <div class="container">
            <div class="section-wrap bg-primary bg-opacity-10 rounded-4">
              <div class="section-content bg-pattern-dot-sm p-4 p-sm-6">
                <div class="row justify-content-center text-center">
                  <div class="col-xl-8 col-xxl-9">
                    <div class="block-text">
                      <h6 class="overline-title text-primary">
                        Boost your writing productivity
                      </h6>
                      <h2 class="title">End writer’s block today</h2>
                      <p class="lead mt-3">
                        It’s like having access to a team of copywriting experts
                        writing powerful copy for you in 1-click.
                      </p>
                      <ul class="btn-list btn-list-inline">
                        <li>
                          <a href="#" class="btn btn-lg btn-primary">
                            <span>Start writing for free</span>
                            <em class="icon ni ni-arrow-long-right"></em>
                          </a>
                        </li>
                      </ul>
                      <ul class="list list-row gy-0 gx-3">
                        <li>
                          <em class="icon ni ni-check-circle-fill text-success"></em>
                          <span>No credit card required</span>
                        </li>
                        <li>
                          <em class="icon ni ni-check-circle-fill text-success"></em>
                          <span>Cancel anytime</span>
                        </li>
                        <li>
                          <em class="icon ni ni-check-circle-fill text-success"></em>
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
      </main>
      <Footer />
    </div>
  );
}
