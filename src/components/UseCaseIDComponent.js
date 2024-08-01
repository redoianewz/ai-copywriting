import Image from "next/image";

export default function UseCaseIDComponent({ useCaseID }) {
  return (
    <div>
      <div class="nk-hero pt-lg-9 pb-lg-11 pt-2 pb-6 pb-sm-8">
                <div class="container">
                    <div class="row g-4 align-items-center justify-content-center flex-lg-row-reverse">
                        <div class="col-lg-6 col-md-9">
                            <div class="nk-hero-gfx mx-sm-n5">
                                <img class="w-100" src="/images/gfx/banner/d.png" alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-11 text-center text-lg-start">
                            <div class="nk-hero-content">
                                <h5 class="mb-1 text-warning">Get Your Free Today!</h5>
                                <h1 class="display-6 mb-3 mb-lg-4">Create amazing <span class="text-gradient-primary">social posts</span> 10X faster with AI</h1>
                                <p class="lead mb-4 mb-lg-5 me-xl-5">AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!</p>
                                <ul class="btn-list btn-list-inline">
                                    <li><a href="#" class="btn btn-primary btn-lg"><span>Get Started Its Free</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}