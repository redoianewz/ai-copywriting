import Image from "next/image";

export default function UsecaseComponent() {
  return (
    <div class="nk-hero pt-sm-5 pt-lg-5 pb-6 pb-sm-8 pb-lg-9">
      <div class="container">        
        <div class="nk-mask bg-angle bg-angle-bottom bg-angle-white"></div>
        <div class="row align-items-center justify-content-center justify-content-xl-between flex-lg-row-reverse g-gs">
          <div class="col-sm-10 col-md-7 col-lg-6 col-xl-5">
            <div class="nk-hero-gfx mt-n5 mb-n6 my-xl-0 ms-xl-n8 me-xl-n6">
              <img class="w-100" src="images/gfx/banner/f.png" alt="" />
            </div>
          </div>
          <div class="col-md-11 col-lg-9 col-xl-6 col-xxl-6">
            <div class="nk-hero-content text-center text-xl-start">
              <h1 class="title display-6 mb-3 mb-lg-4">
                Scale your content strategy <span>with AI</span>
              </h1>
              <p class="lead mb-4 mb-lg-5 pe-xxl-6">
                AI writing assistant that helps you create high-quality content,
                in just a few seconds, at a fraction of the cost!
              </p>
              <div class="pt-2 pb-5">
                <form action="#">
                  <div class="d-flex flex-column flex-sm-row bg-dark rounded-3 p-2 mx-sm-4 mx-lg-0 me-xxl-11">
                    <div class="d-flex align-items-center flex-grow-1">
                      <div class="text-primary me-3 ps-3 fs-4">
                        <em class="icon ni ni-mail"></em>
                      </div>
                      <div class="form-group flex-grow-1">
                        <div class="form-control-wrap">
                          <input
                            class="form-control-plaintext text-white"
                            type="text"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group mt-2 mt-sm-0">
                      <button class="btn btn-lg btn-primary w-100">
                        Sign Up Free
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-xl-start pt-2">
                <ul class="d-flex align-items-center has-gap g-1 text-warning">
                  <li class="d-inline-flex">
                    <em class="icon fs-5 ni ni-star-fill"></em>
                  </li>
                  <li class="d-inline-flex">
                    <em class="icon fs-5 ni ni-star-fill"></em>
                  </li>
                  <li class="d-inline-flex">
                    <em class="icon fs-5 ni ni-star-fill"></em>
                  </li>
                  <li class="d-inline-flex">
                    <em class="icon fs-5 ni ni-star-fill"></em>
                  </li>
                  <li class="d-inline-flex">
                    <em class="icon fs-5 ni ni-star-fill"></em>
                  </li>
                </ul>
                <span class="fs-5 ms-3">Based on 10,000+ reviews on</span>
              </div>
              <ul class="d-flex flex-wrap justify-content-center justify-content-xl-start pt-3 has-gap gy-3">
                <li class="px-3">
                  <img
                    class="h-1-5rem"
                    src="images/brands/72-b-tone-white.png"
                    alt=""
                  />
                </li>
                <li class="px-3">
                  <img
                    class="h-1-5rem"
                    src="images/brands/72-c-tone-white.png"
                    alt=""
                  />
                </li>
                <li class="px-3">
                  <img
                    class="h-1-5rem"
                    src="images/brands/72-d-tone-white.png"
                    alt=""
                  />
                </li>
                <li class="px-3">
                  <img
                    class="h-1-5rem"
                    src="images/brands/72-e-tone-white.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
