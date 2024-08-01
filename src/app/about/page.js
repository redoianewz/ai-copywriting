import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function About() {
  return (
    <div className="nk-app-root">
      <Header  path="/about" />
      <main class="nk-pages">
            <section class="section has-shape has-mask">
                <div class="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
                <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-9 col-xl-8 col-xxl-7">
                                <h6 class="overline-title text-primary">About Us</h6>
                                <h2 class="title h1">Every Company Is A Content Company</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-content">
                        <div class="row g-gs justify-content-center align-items-center flex-lg-row-reverse">
                            <div class="col-lg-6 col-md-11">
                                <div class="block-gfx ps-xxl-5">
                                    <img class="w-100" src="/images/gfx/about.png" alt=""/>
                                </div>
                            </div>
                            
                            <div class="col-lg-6">
                                <div class="block-text pe-xxl-7">
                                    <h2 class="title">Generate months of social media content in minutes</h2>
                                    <p class="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    <ul class="list gy-3 pe-xxl-7">
                                        <li><em class="icon text-success fs-5 ni ni-check-circle-fill"></em><span>Analyze your business cost easily with group transaction thorugh tagging feature.</span></li>
                                        <li><em class="icon text-success fs-5 ni ni-check-circle-fill"></em><span>Arrange your business expenses by date, name, etc.</span></li>
                                    </ul>
                                    <ul class="btn-list btn-list-inline gy-0">
                                        <li><a href="#" class="btn btn-lg btn-primary"><span>Get Started</span><em class="icon ni ni-arrow-long-right"></em></a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-sm section-0">
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-9 col-xl-8 col-xxl-6">
                                <h2 class="title">Who uses our product</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-content">
                        <ul class="list list-row justify-content-center justify-content-lg-between gx-5 gy-4">
                            <li>
                                <img class="h-2rem" src="/images/brands/72-a.png" alt=""/>
                            </li>
                            <li>
                                <img class="h-2rem" src="/images/brands/72-b.png" alt=""/>
                            </li>
                            <li>
                                <img class="h-2rem" src="/images/brands/72-c.png" alt=""/>
                            </li>
                            <li>
                                <img class="h-2rem" src="/images/brands/72-d.png" alt=""/>
                            </li>
                            <li>
                                <img class="h-2rem" src="/images/brands/72-e.png" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="section section-bottom-0 has-shape">
                <div class="nk-shape bg-shape-blur-m ms-n8 start-50 top-50 ms-n25 translate-middle-y"></div>
                <div class="container">
                    <div class="section-content">
                        <div class="row gx-gs gy-6 justify-content-center align-items-center">
                            <div class="col-xl-5 col-lg-8">
                                <div class="block-text pe-xxl-7 text-center text-xl-start">
                                    <h2 class="title">CopyGenAI Benefits</h2>
                                    <p class="lead">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                                    <ul class="btn-list btn-list-inline gy-0">
                                        <li><a href="#" class="btn btn-lg btn-primary"><span>See how it works</span><em class="icon ni ni-arrow-long-right"></em></a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-xl-7">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="card rounded-4 border-0 shadow-sm">
                                            <div class="card-body">
                                                <div class="feature">
                                                    <div class="feature-media">
                                                        <div class="media media-middle media-lg text-white bg-primary rounded-3">
                                                            <em class="icon ni ni-globe"></em>
                                                        </div>
                                                    </div>
                                                    <div class="feature-text">
                                                        <h3 class="title">Website Copy &amp; SEO</h3>
                                                        <p>Missing inspiration for your Landing Page? Generate headlines, meta tags. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card rounded-4 border-0 shadow-sm mt-gs">
                                            <div class="card-body">
                                                <div class="feature">
                                                    <div class="feature-media">
                                                        <div class="media media-middle media-lg text-white bg-warning rounded-3">
                                                            <em class="icon ni ni-signal"></em>
                                                        </div>
                                                    </div>
                                                    <div class="feature-text">
                                                        <h3 class="title">Digital Ad Copy</h3>
                                                        <p>Write creative and original advertisement copies for social media channels.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="col-sm-6 mt-5">
                                        <div class="card rounded-4 border-0 shadow-sm">
                                            <div class="card-body">
                                                <div class="feature">
                                                    <div class="feature-media">
                                                        <div class="media media-middle media-lg text-white bg-info rounded-3">
                                                            <em class="icon ni ni-flag"></em>
                                                        </div>
                                                    </div>
                                                    <div class="feature-text">
                                                        <h3 class="title">Social Media &amp; Ads</h3>
                                                        <p>Write Facebook or Google ads, Youtube video descriptions or titles.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card rounded-4 border-0 shadow-sm mt-gs">
                                            <div class="card-body">
                                                <div class="feature">
                                                    <div class="feature-media">
                                                        <div class="media media-middle media-lg text-white bg-danger rounded-3">
                                                            <em class="icon ni ni-briefcase"></em>
                                                        </div>
                                                    </div>
                                                    <div class="feature-text">
                                                        <h3 class="title">Job Description</h3>
                                                        <p>Create engaging job descriptions for any position to attract the best candidates</p>
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
            <section class="section section-bottom-0 has-shape">
                <div class="nk-shape bg-shape-blur-m mt-n3 start-50 top-0 translate-middle-x"></div>
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-8 col-xl-7 col-xxl-6">
                                <h6 class="overline-title text-primary">Testimonials</h6>
                                <h2 class="title">CopyGen is rated 4.9/5 stars in over 2,000 reviews</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-content">
                        <div class="row g-gs justify-content-center align-items-center">
                            <div class="col-lg-4">
                                <div class="card border-0 shadow-tiny rounded-4">
                                    <div class="card-body">
                                        <ul class="list list-row gy-0 g-1 mb-3">
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                        </ul>
                                        <h4 class="title mb-3">It Gave Me Back Quality Time To Spend w Friends &amp; Family...</h4>
                                        <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                                        <div class="d-flex pt-3">
                                            <div class="media media-lg media-middle media-lg rounded-pill">
                                                <img src="/images/avatar/author/sm-a.jpg" alt=""/>
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
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                        </ul>
                                        <h4 class="title mb-3">A year of organic marketing in about 30 minutes</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                                        <div class="d-flex pt-3">
                                            <div class="media media-lg media-middle media-lg rounded-pill">
                                                <img src="/images/avatar/author/sm-b.jpg" alt=""/>
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
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                            <li><em class="icon text-warning ni ni-star-fill fs-5"></em></li>
                                        </ul>
                                        <h4 class="title mb-3">Just wanna shout out the whole team for this amazing tool</h4>
                                        <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                                        <div class="d-flex pt-3">
                                            <div class="media media-lg media-middle media-lg rounded-pill">
                                                <img src="/images/avatar/author/sm-c.jpg" alt=""/>
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
            <section class="section section-bottom-0">
                <div class="container">
                    <div class="section-wrap bg-primary bg-opacity-10 rounded-4">
                       
                    </div>
                </div>
            </section>
        </main>
      <Footer />
    </div>
  );
}