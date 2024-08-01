import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function BlogSingle() {
  return (
    <div className="nk-app-root">
      <Header  path="/blog" />
      <main class="nk-pages">
        <section class="section has-mask">
          <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div class="container">
            <div class="section-content">
              <div class="row g-gs justify-content-center">
                <div class="col-xxl-8 col-xl-9 col-lg-10">
                  <div class="text-center">
                    <h6 class="overline-title text-primary">CopyGen</h6>
                    <h1 class="title">
                      Are AI Translators Reliable for Legal Document
                      Translation?
                    </h1>
                    <ul class="list list-row gx-2">
                      <li>
                        <div class="sub-text fs-5">Feb 10, 2023</div>
                      </li>
                      <li>
                        <em class="icon mx-0 ni ni-dot"></em>
                      </li>
                      <li>
                        <div class="sub-text fs-5">11 min read</div>
                      </li>
                    </ul>
                    <div class="my-5">
                      <img
                        class="rounded-4 w-100"
                        src="/images/blog/cover.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="block-typo">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content here,
                        making it look like readable English.{" "}
                      </p>
                      <p>
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        a complete account of the system, and expound the actual
                        teachings of the great.
                      </p>
                      <h2>Pros of AI in legal document translation</h2>
                      <p>
                        Must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself,because it
                        is pleasure.
                      </p>
                      <h3>Automated reminders</h3>
                      <p>
                        Complete account of the system, and expound the actual
                        teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects
                        pleasure itself because it is pleasure.
                      </p>
                      <h3>Legal research and background check</h3>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue.
                      </p>
                      <h3>Helps address linguistic limitation</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae{" "}
                      </p>
                      <ul>
                        <li>
                          Content to be translated is of high priority and needs
                          accurate translation.
                        </li>
                        <li>
                          Requires cultural, legal, and contextual
                          understanding.
                        </li>
                        <li>
                          Material uses creative language which cannot be
                          translated literally.
                        </li>
                        <li>
                          Language translation needs to be grammatically
                          accurate, with the right understanding{" "}
                        </li>
                      </ul>
                      <p>
                        We denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire, that they
                        cannot foresee the pain
                      </p>
                      <h2>Human Translators vs. AI Translators</h2>
                      <p>
                        Must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness.
                      </p>
                      <img src="/images/blog/cover.jpg" alt="" />
                      <p>
                        Expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure.
                      </p>
                      <h3>Speed</h3>
                      <p>
                        Complete account of the system, and expound the actual
                        teachings of the great explorer of the truth, the
                        master-builder of human happiness. No one rejects
                        pleasure itself because it is pleasure.
                      </p>
                      <h3>Quality</h3>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue.
                      </p>
                    </div>
                    <ul class="btn-list gy-3 ps-xl-6 ps-lg-4 ps-3">
                      <li>
                        <a class="link-secondary" href="#">
                          <em class="icon fs-3 ni ni-facebook-circle"></em>
                        </a>
                      </li>
                      <li>
                        <a class="link-secondary" href="#">
                          <em class="icon fs-3 ni ni-twitter"></em>
                        </a>
                      </li>
                      <li>
                        <a class="link-secondary" href="#">
                          <em class="icon fs-3 ni ni-linkedin-round"></em>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-bottom-0 ">
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-lg-9 col-xl-8 col-xxl-6">
                  <h2 class="title">Similar Posts</h2>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row g-gs">
                <div class="col-md-6 col-xl-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body p-4">
                      <a class="d-block" href="blog/1">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/a.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        href="#"
                        class="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
                      >
                        CopyGen
                      </a>
                      <h3>
                        <a href="blog/2" class="link-dark line-clamp-2">
                          How Content Generators Work &amp; How To Use Them
                          Effectively
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-d.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">Ashley Lawson</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 10, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">11 min read</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body p-4">
                      <a class="d-block" href="blog/3">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/b.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        href="#"
                        class="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
                      >
                        Artificial Intelligence
                      </a>
                      <h3>
                        <a href="blog/1" class="link-dark line-clamp-2">
                          What Is An AI Writing Assistant, And How Is It
                          Beneficial?
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-e.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">Frances Burns</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 9, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">8 min read</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body p-4">
                      <a class="d-block" href="blog/4">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/c.jpg"
                          alt=""
                        />
                      </a>
                      <a
                        href="#"
                        class="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
                      >
                        Content Marketing
                      </a>
                      <h3>
                        <a href="blog/1" class="link-dark line-clamp-2">
                          15 Uses of Content Generator Tools and Why You Need
                          Them
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-g.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">John Carter</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 9, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">10 min read</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-actions text-center">
              <ul class="btn-list btn-list-inline g-gs">
                <li>
                  <a href="#" class="btn btn-primary btn-soft btn-lg">
                    <em class="icon ni ni-arrow-long-left"></em>
                    <span>Previous</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn btn-primary btn-lg">
                    <span>Next</span>
                    <em class="icon ni ni-arrow-long-right"></em>
                  </a>
                </li>
              </ul>
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
