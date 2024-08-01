import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Pricing() {
  return (
    <div className="nk-app-root">
      <Header path="/pricing" />
      <main class="nk-pages">
        <section class="section section-bottom-0 bg-light rounded-top-6 has-shape has-mask">
          <div class="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
          <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-lg-10 col-xl-9 col-xxl-8">
                  <h6 class="overline-title text-primary">
                    Plans &amp; Pricing
                  </h6>
                  <h2 class="title h1">
                    Plans that best suit your business requirements
                  </h2>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="pricing-toggle-wrap mb-5 pb-2">
                <div class="h5 mb-0 pricing-toggle-text monthly">Monthly</div>
                <div class="mx-3">
                  <button
                    class="pricing-toggle"
                    data-parent="pricing-toggle-wrap"
                    data-target="pricing-price-wrap"
                  >
                    <span class="pricing-toggle-ball"></span>
                  </button>
                </div>
                <div class="h5 mb-0 pricing-toggle-text yearly position-relative">
                  {" "}
                  Yearly{" "}
                  <span class="badge text-bg-success-soft-outline fw-normal text-uppercase smaller rounded-pill position-absolute ms-n5 mb-2 mb-sm-0 ms-sm-3 translate-middle-sm-y start-100 bottom-100 bottom-sm-auto top-sm-50">
                    Save 12%
                  </span>
                </div>
              </div>
              <div class="row g-gs">
                <div class="col-xxl-4 col-xl-4">
                  <div class="pricing h-100 pricing-featured bg-gradient-primary">
                    <div class="pricing-body h-100 p-5 pt-3 p-md-0 pt-md-0 p-xl-5 pt-xl-3 d-md-flex d-xl-block">
                      <div class="text-center p-md-5 p-xl-0 w-md-50 w-xl-100">
                        <div class="badge bg-gradient-primary bg-opacity-20 gradient-angle-90 mb-4 px-3 py-2 rounded-pill small text-primary text-tracking-1">
                          <div class="p-1">Most Popurlar</div>
                        </div>
                        <h3 class="mb-3">Pro</h3>
                        <div class="pricing-price-wrap">
                          <div class="pricing-price monthly">
                            <h3 class="display-5 mb-3">
                              $19{" "}
                              <span class="caption-text text-muted">
                                {" "}
                                / month
                              </span>
                            </h3>
                          </div>
                          <div class="pricing-price yearly">
                            <h3 class="display-5 mb-3">
                              $190{" "}
                              <span class="caption-text text-muted">
                                {" "}
                                / yearly
                              </span>
                            </h3>
                          </div>
                        </div>
                        <p class="fw-bold text-primary">
                          For content marketers, bloggers, freelancers &amp;
                          startups
                        </p>
                        <div class="bg-light px-4 py-2 mb-4 smaller rounded-1">
                          Try out all features to determine what works best for
                          you
                        </div>
                        <div class="px-4">
                          <button class="btn btn-primary btn-block rounded-pill">
                            Get Started
                          </button>
                        </div>
                      </div>
                      <div class="d-none d-md-block d-xl-none border-start h-100"></div>
                      <div class="pt-4 p-md-5 p-xl-0 pt-xl-4 w-md-50 w-xl-100">
                        <h5 class="fw-medium pb-1">Everything in Free, plus</h5>
                        <ul class="list gy-3">
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>
                              <strong>50,000</strong> Words Limit
                            </span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>
                              <strong>10+</strong> Templates
                            </span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>50+ Languages</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Advance Editor Tool</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Priority support</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Unlimited Logins</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Access New Features</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-md-6 order-xl-first">
                  <div class="h-100 pt-xl-6">
                    <div class="pricing h-100">
                      <div class="pricing-body h-100 p-5">
                        <div class="text-center">
                          <h3 class="mb-3">Free</h3>
                          <h3 class="display-5 mb-3">
                            $0{" "}
                            <span class="caption-text text-muted">
                              {" "}
                              / month
                            </span>
                          </h3>
                          <p class="fw-bold">
                            Access to AI writer features to help you get a taste
                            of AI writing.
                          </p>
                          <div class="bg-light px-4 py-2 mb-4 smaller rounded-1">
                            Try out all features to determine what works best
                            for you
                          </div>
                          <div class="px-4">
                            <button class="btn btn-outline-primary btn-block rounded-pill">
                              Start Writing for Free
                            </button>
                          </div>
                        </div>
                        <h5 class="fw-medium pt-4 pb-1">Give a try for free</h5>
                        <ul class="list gy-3">
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>
                              <strong>4,500</strong> Words
                            </span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>
                              <strong>5+</strong> Templates
                            </span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>10+ Languages</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>AI Article Writer</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Advance Editor Tool</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Regular support</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-md-6">
                  <div class="h-100 pt-xl-6">
                    <div class="pricing h-100">
                      <div class="pricing-body h-100 p-5">
                        <div class="text-center">
                          <h3 class="mb-3">Custom</h3>
                          <div class="media media-middle media-2xl bg-light rounded-pill mb-4 mt-3">
                            <em class="icon ni ni-building"></em>
                          </div>
                          <p class="fw-bold">
                            Design your custom package for teams and business
                            needs
                          </p>
                          <div class="bg-light px-4 py-2 mb-4 smaller rounded-1">
                            Take your business to the another level with custom
                            package and support.
                          </div>
                          <div class="px-4">
                            <button class="btn btn-outline-primary btn-block rounded-pill">
                              Request for Demo
                            </button>
                          </div>
                        </div>
                        <h5 class="fw-medium pt-4 pb-1">
                          Everything in Pro, plus
                        </h5>
                        <ul class="list gy-3">
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>
                              <strong>Custom pricing</strong>
                            </span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Custom number of users</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Custom number of words</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Manage team member</span>
                          </li>
                          <li>
                            <em class="icon fs-4 ni ni-check-circle-fill text-info"></em>{" "}
                            <span>Premium support</span>
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
        <section class="section bg-light">
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-xl-8">
                  <h2 class="title">Frequently Asked Questions</h2>
                  <p class="lead">
                    If you have any questions not answered in the FAQ, please do
                    not hesitate to contac us.
                  </p>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row g-gs justify-content-center">
                <div class="col-xl-9 col-xxl-8">
                  <div
                    class="accordion accordion-separated accordion-plus-minus"
                    id="faq-1"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-1"
                        >
                          {" "}
                          What is a copy?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-1"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#faq-1"
                      >
                        <div class="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          We re always updating our template and tools, so let
                          us know what are expecting!{" "}
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-2"
                        >
                          {" "}
                          Does CopyGen to write long articles?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-2"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faq-1"
                      >
                        <div class="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          We re always updating our template and tools, so let
                          us know what are expecting!{" "}
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-3"
                        >
                          {" "}
                          Is the generated content original?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-3"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faq-1"
                      >
                        <div class="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          We re always updating our template and tools, so let
                          us know what are expecting!{" "}
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-4"
                        >
                          {" "}
                          Do you have wordpress plugin?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-4"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faq-1"
                      >
                        <div class="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          We re always updating our template and tools, so let
                          us know what are expecting!{" "}
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
          <div class="container"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
