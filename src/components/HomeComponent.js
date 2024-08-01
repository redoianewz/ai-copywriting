import Image from "next/image";

export default function HomeComponent() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <div className="nk-hero-content py-5 py-lg-6">
            <h1 className="title mb-3 mb-lg-4">
              Unlock the power of Copywriting AI and Create Content Faster
            </h1>
            <p className="lead px-md-8 px-lg-6 mb-4 mb-lg-5">
              AI Copywriting is revolutionizing the way content is created. AI
              can create content for blogs, articles, websites, social media and
              more.
            </p>
            <ul className="btn-list btn-list-inline">
              <li>
                <a href="#" className="btn btn-secondary btn-lg">
                  <span>Start writing for free</span>
                </a>
              </li>
            </ul>
            <p className="sub-text mt-2">No credit card required</p>
          </div>
          <div className="nk-hero-gfx">
            <Image
              width={500}
              height={400}
              className="w-100 rounded-top-4"
              src="/images/gfx/banner/a.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
