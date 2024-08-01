import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Blog() {
  return (
    <div className="nk-app-root">
      <Header path="/blog" />
      <main class="nk-pages">
        <section class="section section-bottom-0 has-shape has-mask">
          <div class="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
          <div class="nk-shape bg-shape-blur-m mt-8 start-50 top-50 translate-middle-x"></div>
          <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div class="container">
            <div class="section-head">
              <div class="row justify-content-center text-center">
                <div class="col-lg-9 col-xl-7 col-xxl-6">
                  <h6 class="overline-title text-primary">Blog</h6>
                  <h1 class="title">
                    News, tips and resources about copygenAI
                  </h1>
                  <label
                    id="blog-search"
                    class="d-flex align-items-center border rounded-3 py-2 px-4 mt-5 mt-lg-7 bg-white"
                  >
                    <em class="icon me-3 fs-3 ni ni-search"></em>
                    <input
                      type="text"
                      name="blog-search"
                      class="form-control form-control-lg form-control-plaintext"
                      placeholder="Search for articles"
                      required
                    />
                  </label>
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
                        <a
                          href="blog/2"
                          class="link-dark line-clamp-2"
                        >
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
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
                <div class="col-md-6 col-xl-4">
                  <div class="card border-0 shadow-tiny rounded-4">
                    <div class="card-body p-4">
                      <a class="d-block" href="blog/5">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/d.jpg"
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
                          5 Reasons Why CopyGenAI Is the Best AI Writing
                          Assistant 
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-g.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">Derek Gehl</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 7, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">5 min read</div>
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
                      <a class="d-block" href="blog/6">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/e.jpg"
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
                          How AI Helps with Online Content Creation
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-h.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">John Carter</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 7, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">9 min read</div>
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
                      <a class="d-block" href="blog/7">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/f.jpg"
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
                          Are AI Translators Reliable for Legal Document
                          Translation?
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-i.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">John Carter</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 7, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">12 min read</div>
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
                      <a class="d-block" href="blog/8">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/g.jpg"
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
                          5 Reasons Why CopyGenAI Is the Best AI Writing
                          Assistant 
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-j.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">John Carter</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 6, 2024</div>
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
                      <a class="d-block" href="blog/9">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/h.jpg"
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
                          12 Best AI Content Generators To Choose From
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-k.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">Aastha Thakur</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 5, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">6 min read</div>
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
                      <a class="d-block" href="blog/10">
                        <img
                          class="rounded-4 w-100"
                          src="/images/blog/i.jpg"
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
                        <a
                          href="blog/1"
                          class="link-dark line-clamp-2"
                        >
                          How We Designed a World-Class AI-Powered Content Tool
                        </a>
                      </h3>
                      <div class="d-flex pt-4">
                        <div class="media media-lg media-middle media-lg rounded-pill">
                          <img src="/images/avatar/author/sm-l.jpg" alt="" />
                        </div>
                        <div class="media-info ms-3">
                          <h6 class="mb-1">Mavis Mata</h6>
                          <ul class="list list-row gx-1">
                            <li>
                              <div class="sub-text">Aug 3, 2024</div>
                            </li>
                            <li>
                              <em class="icon mx-0 ni ni-dot"></em>
                            </li>
                            <li>
                              <div class="sub-text">19 min read</div>
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
         <section class="section section-lg section-bottom-0">
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-9 col-xl-8 col-xxl-7">
                                <h6 class="overline-title text-primary">How it works</h6>
                                <h2 class="title">Instruct to our AI and generate copy</h2>
                            </div>
                        </div>
                    </div>
                    <div class="section-content">
                        <div class="row g-gs justify-content-center">
                            <div class="col-sm-6 col-lg-4">
                                <div class="feature">
                                    <div class="feature-image ms-n3">
                                        <img class="h-xl-16rem" src="/images/gfx/process/a-alt.png" alt="" />
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title">Select writing template</h4>
                                        <p class="fs-6">Simply choose a template from available list to write content for blog posts, landing page, website content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-4">
                                <div class="feature">
                                    <div class="feature-image ms-n3">
                                        <img class="h-xl-16rem" src="/images/gfx/process/b-alt.png" alt="" />
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title">Describe your topic</h4>
                                        <p class="fs-6">Provide our AI content writer with few sentences on what you want to write, and it will start writing for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="feature">
                                    <div class="feature-image ms-n3">
                                        <img class="h-xl-16rem" src="/images/gfx/process/c-alt.png" alt="" />
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title">Select writing template</h4>
                                        <p class="fs-6">Our powerful AI tools will generate content in few second, then you can export it to wherever you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-lg">
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-9 col-xl-8 col-xxl-6">
                                <h6 class="overline-title text-primary">Copygen.AI Overview</h6>
                                <h2 class="title">What amazing content will you create with AI?</h2>
                            </div>
                        </div>
                    </div>
                    <div class="section-content">
                        <div class="overflow-hidden">
                            <ul class="nav nav-tabs nav-tabs-stretch mb-5">
                                <li class="w-100 w-sm-50 w-lg-auto">
                                    <button class="nav-link w-100 w-lg-auto active" data-bs-toggle="tab" data-bs-target="#social-media-adds"><em class="icon ni ni-flag"></em><span>Social Media &amp; Ads</span></button>
                                </li>
                                <li class="w-100 w-sm-50 w-lg-auto">
                                    <button class="nav-link w-100 w-lg-auto" data-bs-toggle="tab" data-bs-target="#website-copy-seo"><em class="icon ni ni-globe"></em><span>Website Copy &amp; SEO</span></button>
                                </li>
                                <li class="w-100 w-sm-50 w-lg-auto">
                                    <button class="nav-link w-100 w-lg-auto" data-bs-toggle="tab" data-bs-target="#blog-section-writing"><em class="icon ni ni-edit"></em><span>Blog Section Writing</span></button>
                                </li>
                                <li class="w-100 w-sm-50 w-lg-auto">
                                    <button class="nav-link w-100 w-lg-auto" data-bs-toggle="tab" data-bs-target="#ecommerce-copy"><em class="icon ni ni-briefcase"></em><span>eCommerce Copy</span></button>
                                </li>
                                <li class="w-100 w-sm-50 w-lg-auto">
                                    <button class="nav-link w-100 w-lg-auto" data-bs-toggle="tab" data-bs-target="#magic-command"><em class="icon ni ni-chat-msg"></em><span>Magic Command</span></button>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content p-5 bg-white rounded-4 shadow-sm">
                            <div class="tab-pane p-lg-3 fade show active" id="social-media-adds" tabindex="0">
                                <div class="row g-gs flex-xl-row-reverse">
                                    <div class="col-xl-6 col-lg-10">
                                        <div class="block-gfx">
                                            <img class="w-100 rounded-3" src="/images/gfx/usecase/a.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="block-text pe-xl-7">
                                            <h3 class="mb-4">Generate months of social media content in minutes</h3>
                                            <p class="lead">Simply choose a template from available list to write content for blog posts, landing page, website content etc.</p>
                                            <ul class="list gy-3">
                                                <li>
                                                    <em class="icon text-primary ni ni-check-circle-fill"></em>
                                                    <span>Analyze your business cost easily with group transaction thorugh tagging feature.</span>
                                                </li>
                                                <li>
                                                    <em class="icon text-primary ni ni-check-circle-fill"></em>
                                                    <span>Arrange your business expenses by date, name, etc.</span>
                                                </li>
                                                <li>
                                                    <em class="icon text-primary ni ni-check-circle-fill"></em>
                                                    <span>Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-lg-3 fade" id="website-copy-seo" tabindex="0">
                                <div class="row g-gs flex-xl-row-reverse">
                                    <div class="col-xl-6 col-lg-10">
                                        <div class="block-gfx">
                                            <img class="w-100 rounded-3" src="/images/gfx/usecase/b.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="block-text pe-xl-7">
                                            <h3 class="mb-4">Improve Your Websites Visibility and User Experience</h3>
                                            <p>Your website copy is one of the most important factors in determining whether or not people stay on your website and take the actions you want them to take. It needs to be clear, concise, and engaging, while also providing valuable information that visitors will find useful.</p>
                                            <ul class="list gy-3">
                                                <li>
                                                    <em class="icon text-primary ni ni-check-circle-fill"></em>
                                                    <span>Establish trust: By providing helpful and informative content, you can establish yourself as an authority in your field and build trust with your audience.</span>
                                                </li>
                                                <li>
                                                    <em class="icon text-primary ni ni-check-circle-fill"></em>
                                                    <span>Build credibility: When your website appears at the top of search results, it can help to build credibility and trust with your audience.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-lg-3 fade" id="blog-section-writing" tabindex="0">
                                <div class="row g-gs flex-xl-row-reverse">
                                    <div class="col-xl-6 col-lg-10">
                                        <div class="block-gfx">
                                            <img class="w-100 rounded-3" src="/images/gfx/usecase/c.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="block-text pe-xl-7">
                                            <h3 class="mb-4">Engage Your Audience and Build Your Brand</h3>
                                            <p class="lead mb-5">In todays digital age, a blog is an essential tool for any business looking to build its brand and engage with its audience.</p>
                                            <h4>1. Identify your target audience</h4>
                                            <p>Before you start writing, its important to identify who your target audience is. Who are you trying to reach with your blog? What are their interests and pain points?</p>
                                            <h4>2. Choose relevant topics</h4>
                                            <p>Your blog topics should be relevant to your business and your audience. Think about the questions and concerns your customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-lg-3 fade" id="ecommerce-copy" tabindex="0">
                                <div class="row g-gs flex-xl-row-reverse">
                                    <div class="col-xl-6 col-lg-10">
                                        <div class="block-gfx">
                                            <img class="w-100 rounded-3" src="/images/gfx/usecase/d.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="block-text pe-xl-7">
                                            <h3 class="mb-4">Introducing our new Wireless Bluetooth Earbuds!</h3>
                                            <p class="lead">Experience music like never before with our cutting-edge Wireless Bluetooth Earbuds. With advanced noise-cancelling technology and crystal-clear sound, youll be able to fully immerse yourself in your favorite tunes.</p>
                                            <p>Our earbuds are ergonomically designed to fit comfortably in your ears, and theyre so lightweight that youll hardly know youre wearing them. Theyre also sweat-proof and water-resistant, so you can take them with you wherever you go, whether youre running, hiking, or just lounging by the pool.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane p-lg-3 fade" id="magic-command" tabindex="0">
                                <div class="row g-gs flex-xl-row-reverse">
                                    <div class="col-xl-6 col-lg-10">
                                        <div class="block-gfx">
                                            <img class="w-100 rounded-3" src="/images/gfx/usecase/e.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="block-text pe-xl-7">
                                            <h3 class="mb-4">Quickly write candid testimonials and reviews for people and services</h3>
                                            <p class="lead">Ive been shopping with this company for years, and I can honestly say that their customer service is second to none. I highly recommend this company to anyone looking for a great shopping experience.</p>
                                            <p>Our earbuds are ergonomically designed to fit comfortably in your ears, and theyre so lightweight that youll hardly know youre wearing them. Theyre also sweat-proof and water-resistant, so you can take them with you wherever you go, whether youre running, hiking, or just lounging by the pool.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section class="section section-lg section-0">
                <div class="container">
                    <div class="section-wrap section-wrap-angle section-wrap-angle-top-right bg-darker is-dark rounded-4 has-shape">
                        <div class="section-content p-4 pt-3 pt-sm-5 p-sm-6 overflow-hidden">
                            <div class="nk-shape bg-shape-blur-n mt-n10p ms-n10p"></div>
                            <div class="nk-shape bg-shape-blur-o mt-n10p me-n20p end-0"></div>
                            <div class="row justify-content-center text-center">
                                <div class="col-xl-8 col-xxl-9">
                                    <div class="block-text">
                                        <h6 class="overline-title text-primary">Boost your writing productivity</h6>
                                        <h2 class="title">End writer’s block today</h2>
                                        <p class="lead mt-3">It’s like having access to a team of copywriting experts writing powerful copy for you in 1-click.</p>
                                        <ul class="btn-list btn-list-inline">
                                            <li><a href="#" class="btn btn-lg btn-primary"><span>Start writing for free</span><em class="icon ni ni-arrow-long-right"></em></a></li>
                                        </ul>
                                        <ul class="list list-row gy-0 gx-3">
                                            <li><em class="icon ni ni-check-circle-fill text-success"></em><span>No credit card required</span></li>
                                            <li><em class="icon ni ni-check-circle-fill text-success"></em><span>Cancel anytime</span></li>
                                            <li><em class="icon ni ni-check-circle-fill text-success"></em><span>10+ tools to expolore</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        <section class="section section-bottom-0">
          <div class="container">            
            <div class="nk-shape bg-shape-border-d mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}