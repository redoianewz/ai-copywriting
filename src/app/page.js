import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeComponent from "@/components/HomeComponent";
export default function Home() {

  return (
    <div className="nk-app-root">
      <Header page={HomeComponent} path="/" />
      <main className="nk-pages">
        <section className="section section-bottom-0 has-shape">
          <div className="nk-shape bg-shape-blur-a mt-8 start-50 top-0 translate-middle-x"></div>
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-9 col-xl-8 col-xxl-7">
                  <h6 className="overline-title text-primary">
                    Get started for free
                  </h6>
                  <h2 className="title">AI Generate content in seconds</h2>
                  <p className="lead">
                    Give our AI a few descriptions and well automatically create
                    blog articles, product descriptions and more for you within
                    just few second.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row text-center g-gs">
                <div className="col-md-6 col-xl-4">
                  <div className="card rounded-4 border-0 shadow-tiny h-100">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
                            <em className="icon ni ni-book-read"></em>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h4 className="title">Blog Post &amp; Articles</h4>
                          <p>
                            Generate optimized blog post and articles to get
                            organic traffic - making you visible to the world.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card rounded-4 border-0 shadow-tiny h-100">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
                            <em className="icon ni ni-card-view"></em>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h4 className="title">Product Description</h4>
                          <p>
                            Create a perfect description for your products to
                            engage your customers to click and buy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card rounded-4 border-0 shadow-tiny h-100">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
                            <em className="icon ni ni-facebook-f"></em>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h4 className="title">Social Media Ads</h4>
                          <p>
                            Create ads copies for your social media - make an
                            impact with your online marketing campaigns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card rounded-4 border-0 shadow-tiny h-100">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
                            <em className="icon ni ni-grid-plus"></em>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h4 className="title">Product Benefits</h4>
                          <p>
                            Create a bullet point list of your product benefits
                            that appeal to your customers to purchase.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card rounded-4 border-0 shadow-tiny h-100">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
                            <em className="icon ni ni-layout2"></em>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h4 className="title">Landing Page Content</h4>
                          <p>
                            Write very attractive headlines, slogans or
                            paragraph for your landing page of your website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card rounded-4 border-0 shadow-tiny h-100">
                    <div className="card-body">
                      <div className="feature">
                        <div className="feature-media">
                          <div className="media media-middle media-xl text-bg-primary-soft rounded-4">
                            <em className="icon ni ni-loader"></em>
                          </div>
                        </div>
                        <div className="feature-text">
                          <h4 className="title">Suggest Improvements</h4>
                          <p>
                            Need to improve your existing content? Our AI will
                            rewrite and improve the content for you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-10p mb-3"></div>
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-9 col-xl-8 col-xxl-7">
                  <h6 className="overline-title text-primary">How it works</h6>
                  <h2 className="title">
                    Instruct to our AI and generate copy
                  </h2>
                  <p className="lead">
                    Give our AI a few descriptions and well automatically create
                    blog articles, product descriptions and more for you within
                    just few second.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs">
                <div className="col-lg-4">
                  <div className="feature feature-inline">
                    <div className="feature-text me-auto">
                      <h4 className="title">Select writing template</h4>
                      <p>
                        Simply choose a template from available list to write
                        content for blog posts, landing page, website content
                        etc.{" "}
                      </p>
                    </div>
                    <div className="feature-decoration flex-shrink-0 ms-4">
                      <Image
                        width={50}
                        height={100}
                        priority
                        src="/images/number/1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature feature-inline">
                    <div className="feature-text me-auto">
                      <h4 className="title">Describe your topic</h4>
                      <p>
                        Provide our AI content writer with few sentences on what
                        you want to write, and it will start writing for you.{" "}
                      </p>
                    </div>
                    <div className="feature-decoration flex-shrink-0 ms-4">
                      <Image
                        width={50}
                        height={100}
                        priority
                        src="/images/number/2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature feature-inline">
                    <div className="feature-text me-auto">
                      <h4 className="title">Generate quality content</h4>
                      <p>
                        Our powerful AI tools will generate content in few
                        second, then you can export it to wherever you need.
                      </p>
                    </div>
                    <div className="feature-decoration flex-shrink-0 ms-4">
                      <Image
                        width={50}
                        height={100}
                        priority
                        src="/images/number/3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-actions text-center">
              <ul className="btn-list btn-list-inline gx-gs gy-3">
                <li>
                  <a href="#" className="btn btn-primary btn-lg">
                    <span>Start free trial today</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-primary btn-soft btn-lg">
                    <em className="icon ni ni-play"></em>
                    <span>See action in video</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="section-content">
              <div className="row gx-5 gy-6 align-items-center">
                <div className="col-lg-6 col-xl-6">
                  <div className="block-gfx pe-xl-5 pe-lg-3">
                    <Image
                      width={400}
                      height={350}
                      priority
                      className="w-100 rounded-4"
                      src="/images/gfx/feature/a.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <div className="block-text">
                    <h2 className="title">AI Generate content in seconds</h2>
                    <p>
                      Generate copy that converts for business bios, facebook
                      ads, product descriptions, emails, landing pages, social
                      ads, and more.
                    </p>
                    <ul className="list gy-3">
                      <li>
                        <em className="icon ni ni-minus text-primary"></em>
                        <span>
                          Create article that are complete in less than 15
                          seconds.
                        </span>
                      </li>
                      <li>
                        <em className="icon ni ni-minus text-primary"></em>
                        <span>
                          Save hundreds of hours with our AI article generator.
                        </span>
                      </li>
                      <li>
                        <em className="icon ni ni-minus text-primary"></em>
                        <span>
                          Improve your copy with the article rewriter.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0 section-top-0">
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-9 col-xl-7 col-xxl-6">
                  <h6 className="overline-title text-primary">Pricing</h6>
                  <h2 className="title">Start your content writing with AI</h2>
                  <p className="lead px-lg-10 px-xxl-9">
                    With our simple plans, supercharge your content writing to
                    helps your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing">
                    <div className="pricing-body p-5">
                      <div className="text-center">
                        <h5 className="mb-3">Bronze</h5>
                        <h3 className="h2 mb-4">
                          $9{" "}
                          <span className="caption-text text-muted">
                            {" "}
                            / month
                          </span>
                        </h3>
                        <button className="btn btn-primary btn-soft btn-block">
                          Start free trial today
                        </button>
                      </div>
                      <ul className="list gy-3 pt-4 ps-2">
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>
                            <strong>10,000</strong> Monthly Word Limit
                          </span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>
                            <strong>10+</strong> Templates
                          </span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>30+ Languages</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Advance Editor Tool</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Regular Technical Support</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Unlimited Logins</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Newest Features</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing pricing-featured bg-primary">
                    <div className="pricing-body p-5">
                      <div className="text-center">
                        <h5 className="mb-3">Silver</h5>
                        <h3 className="h2 mb-4">
                          $19{" "}
                          <span className="caption-text text-muted">
                            {" "}
                            / month
                          </span>
                        </h3>
                        <button className="btn btn-primary btn-block">
                          Start free trial today
                        </button>
                      </div>
                      <ul className="list gy-3 pt-4 ps-2">
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>
                            <strong>20,000</strong> Monthly Word Limit
                          </span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>
                            <strong>10+</strong> Templates
                          </span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>50+ Languages</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Advance Editor Tool</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Regular Technical Support</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Unlimited Logins</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Newest Features</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing">
                    <div className="pricing-body p-5">
                      <div className="text-center">
                        <h5 className="mb-3">Diamond</h5>
                        <h3 className="h2 mb-4">
                          $39{" "}
                          <span className="caption-text text-muted">
                            {" "}
                            / month
                          </span>
                        </h3>
                        <button className="btn btn-primary btn-soft btn-block">
                          Start free trial today
                        </button>
                      </div>
                      <ul className="list gy-3 pt-4 ps-2">
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>
                            <strong>50,000</strong> Monthly Word Limit
                          </span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>
                            <strong>15+</strong> Templates
                          </span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>70+ Languages</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Advance Editor Tool</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Regular Technical Support</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Unlimited Logins</span>
                        </li>
                        <li>
                          <em className="icon ni ni-check text-success"></em>{" "}
                          <span>Newest Features</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-xl-8">
                  <h2 className="title">Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xl-9 col-xxl-8">
                  <div
                    className="accordion accordion-flush accordion-plus-minus accordion-icon-accent"
                    id="faq-1"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-1"
                        >
                          {" "}
                          What is a copy?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faq-1"
                      >
                        <div className="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          Were always updating our template and tools, so let us
                          know what are expecting!{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-2"
                        >
                          {" "}
                          Does CopyGen to write long articles?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faq-1"
                      >
                        <div className="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          Were always updating our template and tools, so let us
                          know what are expecting!{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-3"
                        >
                          {" "}
                          Is the generated content original?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faq-1"
                      >
                        <div className="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          Were always updating our template and tools, so let us
                          know what are expecting!{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-1-4"
                        >
                          {" "}
                          Do you have wordpress plugin?{" "}
                        </button>
                      </h2>
                      <div
                        id="faq-1-4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faq-1"
                      >
                        <div className="accordion-body">
                          {" "}
                          Yes, you can write long articel for your blog posts,
                          product descriptions or any long article with CopyGen.
                          Were always updating our template and tools, so let us
                          know what are expecting!{" "}
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
