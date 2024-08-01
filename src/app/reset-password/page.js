 import Image from "next/image";
 import Header from "@/components/header";
 import Footer from "@/components/footer";
 export default function Home() {
   return (
     <div className="nk-app-root">        
       <Header  path="/reset" />
       <section class="section section-lg section-bottom-0 pb-5 has-mask">
                <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-11 col-xl-10 col-xxl-9">
                                <h6 class="overline-title text-primary">Forgot Password ?</h6>
                                <h2 class="title">Reset from Here.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="section-content">
                        <div class="row g-gs justify-content-center">
                            <div class="col-md-7 col-lg-6 col-xl-5">
                                <div class="card border-0 shadow-sm rounded-4">
                                    <div class="card-body">
                                        <h4>Reset password</h4>
                                        <p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                                        <form action="#">
                                            <div class="row g-4">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label class="form-label" for="emailorusername">Email Address</label>
                                                        <div class="form-control-wrap">
                                                            <input type="email" name="emailorusername" id="emailorusername" class="form-control form-control-lg" placeholder="Enter Your Email" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-12">
                                                    <div class="d-flex flex-wrap justify-content-between align-items-center has-gap g-3">
                                                        <div class="form-group">
                                                            <button class="btn btn-primary" type="submit" id="submit-btn">Send Reset Link</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                                <p class="text-center mt-4"><a class="link has-gap g-2" href="login.html"><em class="icon ni ni-arrow-left"></em><span>Back to Login</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       <Footer />
     </div>
   );
 }