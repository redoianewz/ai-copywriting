 import Image from "next/image";
 import Header from "@/components/header";
 import Footer from "@/components/footer";
 export default function Usecase() {
   return (
     <div className="nk-app-root">
       <Header path="/features" />
       <main class="nk-pages">
         <section class="section section-bottom-0 has-shape has-mask">
           <div className="nk-mask bg-gradient-a"></div>
           <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
           <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>

           <div class="container">
             <div class="section-head">
               <div class="row justify-content-center text-center">
                 <div class="col-lg-8 col-xl-7 col-xxl-6">
                   <h6 class="overline-title text-primary">Feature</h6>
                   <h2 class="title h1">
                     Generate AI-powered content in 1 click.
                   </h2>
                 </div>
               </div>
             </div>
             <div class="section-content">
               <div class="row g-gs">
                 <div class="col-md-6 col-xl-4">
                   <div class="card rounded-4 border-0 shadow-tiny h-100">
                     <div class="card-body">
                       <div class="feature">
                         <div class="feature-media">
                           <div class="media media-middle media-xl media-border text-bg-info-soft-outline rounded-pill">
                             <em class="icon ni ni-spark"></em>
                           </div>
                         </div>
                         <div class="feature-text">
                           <h3 class="title">Write content faster</h3>
                           <p>
                             You do not need to spend hours to write good
                             content — let our advance AI Writer to get it done.
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6 col-xl-4">
                   <div class="card rounded-4 border-0 shadow-tiny h-100">
                     <div class="card-body">
                       <div class="feature">
                         <div class="feature-media">
                           <div class="media media-middle media-xl media-border text-bg-warning-soft-outline rounded-pill">
                             <em class="icon ni ni-cpu"></em>
                           </div>
                         </div>
                         <div class="feature-text">
                           <h3 class="title">Tools and templates</h3>
                           <p>
                             Using our AI tools and pre-built template to create
                             content briefs, write and optimize content in one
                             place.
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6 col-xl-4">
                   <div class="card rounded-4 border-0 shadow-tiny h-100">
                     <div class="card-body">
                       <div class="feature">
                         <div class="feature-media">
                           <div class="media media-middle media-xl media-border text-bg-primary-soft-outline rounded-pill">
                             <em class="icon ni ni-bulb"></em>
                           </div>
                         </div>
                         <div class="feature-text">
                           <h3 class="title">Brainstorm faster</h3>
                           <p>
                             Use our advanced AI as your personal content writer
                             or partner for your endless work for your business.{" "}
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6 col-xl-4">
                   <div class="card rounded-4 border-0 shadow-tiny h-100">
                     <div class="card-body">
                       <div class="feature">
                         <div class="feature-media">
                           <div class="media media-middle media-xl media-border text-bg-purple-soft-outline rounded-pill">
                             <em class="icon ni ni-file-docs"></em>
                           </div>
                         </div>
                         <div class="feature-text">
                           <h3 class="title">Copy and publish anywhere</h3>
                           <p>
                             You can simply copy your desire content and then
                             you can publish, like Shopify, WordPress, or
                             anywhere.
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6 col-xl-4">
                   <div class="card rounded-4 border-0 shadow-tiny h-100">
                     <div class="card-body">
                       <div class="feature">
                         <div class="feature-media">
                           <div class="media media-middle media-xl media-border text-bg-success-soft-outline rounded-pill">
                             <em class="icon ni ni-swap-alt"></em>
                           </div>
                         </div>
                         <div class="feature-text">
                           <h3 class="title">Repurpose content easily</h3>
                           <p>
                             Write and saved once, use everywhere. Also rewrite
                             content for different porpose with minimal effort.
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6 col-xl-4">
                   <div class="card rounded-4 border-0 shadow-tiny h-100">
                     <div class="card-body">
                       <div class="feature">
                         <div class="feature-media">
                           <div class="media media-middle media-xl media-border text-bg-danger-soft-outline rounded-pill">
                             <div class=" d-flex align-items-end">
                               <em class="icon ni ni-text"></em>
                               <em class="icon half ms-n2 ni ni-text"></em>
                             </div>
                           </div>
                         </div>
                         <div class="feature-text">
                           <h3 class="title">Write in Any Language</h3>
                           <p>
                             Let AI write for you in over 40 languages. Our AI
                             can write in English, Spanish, French and many more
                             language.
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
         <section class="section section-lg section-bottom-0">
           <div class="container">
             <div class="section-head">
               <div class="row justify-content-center text-center">
                 <div class="col-lg-10 col-xl-9 col-xxl-8">
                   <h2 class="title h1">
                     How will CopyGen unlock your creative potential?
                   </h2>
                   <p class="lead">
                     Copygen.ai allows you to create multiple pieces of content
                     quickly and efficiently, increasing your productivity and
                     freeing up time to focus on other important tasks.
                   </p>
                 </div>
               </div>
             </div>
             <div class="section-content">
               <div class="row gy-gs gx-xxl-9">
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-note-add"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">
                         Write copy &amp; content that converts
                       </h4>
                       <p>
                         You can generate high-quality content in seconds,
                         saving you valuable time that you can spend on other
                         important tasks.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-bulb"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">Brainstorm new ideas.</h4>
                       <p>
                         An interview-style show featuring industry leaders,
                         experts, and influencers, covering topics ranging from
                         tech, politics, art, and more.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-activity-round"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">10X your content output</h4>
                       <p>
                         Use templates to streamline your content creation
                         process. This can include templates for blog posts,
                         social media posts, videos, and more.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-text-a"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">Write better, everywhere.</h4>
                       <p>
                         Reading widely can help improve your writing skills by
                         exposing you to different writing styles, grammar
                         structures, and vocabulary.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-text2"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">Create content in 26 languages</h4>
                       <p>
                         Copygen can read and write content in 25 languages
                         including English, Spanish, Japanese, and Portuguese.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-puzzle"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">Build an AI-Powered business.</h4>
                       <p>
                         Building an AI-powered business is an ongoing process,
                         and requires ongoing investment in data, technology,
                         and expertise.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-presentation"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">Collaborate with your team</h4>
                       <p>
                         Clear communication is key to successful collaboration.
                         Be sure to express your ideas clearly and listen
                         actively to others.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="feature feature-inline">
                     <div class="feature-media">
                       <div class="text-gradient-primary fs-2 d-inline-flex">
                         <em class="icon ni ni-happy"></em>
                       </div>
                     </div>
                     <div class="feature-text">
                       <h4 class="title">Have fun! CopyGen is a joy.</h4>
                       <p>
                         AI is an exciting, new technology that can unlock your
                         imagination to create some amazing things.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <section class="section section-lg section-bottom-0 has-shape mb-6">
           <div class="nk-shape bg-shape-border-f ms-40p mt-8 start-50 translate-middle-x"></div>
           <div class="container">
             <div class="section-head">
               <div class="row justify-content-center text-center">
                 <div class="col-lg-10 col-xl-9 col-xxl-8">
                   <h2 class="title h1">See what AI writers have to say</h2>
                   <p class="lead px-xxl-10">
                     This is a straightforward and commonly used header that
                     lets customers know they are looking at different pricing
                     options.
                   </p>
                 </div>
               </div>
             </div>
             <div class="section-content">
               <div class="row g-gs" data-masonry='{"percentPosition": true }'>
                 <div class="col-xl-4 col-md-6">
                   <div class="card border-0 shadow-none rounded-4 bg-gradient-a">
                     <div class="card-body">
                       <div class="d-flex pb-5">
                         <div class="media media-lg media-middle media-lg rounded-pill">
                           <img src="/images/avatar/author/sm-e.jpg" alt="" />
                         </div>
                         <div class="media-info ms-3">
                           <h5 class="mb-1">Ozioma Egwuonwu</h5>
                           <div class="sub-text">CEO at Hire &amp; Retain</div>
                         </div>
                       </div>
                       <h4 class="title mb-3">Great app - Easy to use</h4>
                       <p>
                         Great value and so easy to use and saves me so much
                         time! I was shocked by how much time and brain energy
                         it saved me. Simple &amp; easy...gotta love that. ✌️
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-xl-4 col-md-6">
                   <div class="card border-0 shadow-none rounded-4 bg-gradient-a">
                     <div class="card-body">
                       <div class="d-flex pb-5">
                         <div class="media media-lg media-middle media-lg rounded-pill">
                           <img src="/images/avatar/author/sm-m.jpg" alt="" />
                         </div>
                         <div class="media-info ms-3">
                           <h5 class="mb-1">Frances Burns</h5>
                           <div class="sub-text">CEO at Hire &amp; Retain</div>
                         </div>
                       </div>
                       <h4 class="title mb-3">
                         Like the name the Software also very SIMPLE to use
                       </h4>
                       <p>
                         I was impressed I have to say, from the time it took me
                         to come up with this stuff, your system improved my
                         productivity. I think you have a creative tool,
                         properly postured, it can generate alot of positive
                         impact.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-xl-4 col-md-6">
                   <div class="card border-0 shadow-none rounded-4 bg-gradient-a">
                     <div class="card-body">
                       <div class="d-flex pb-5">
                         <div class="media media-lg media-middle media-lg rounded-pill">
                           <img src="/images/avatar/author/sm-b.jpg" alt="" />
                         </div>
                         <div class="media-info ms-3">
                           <h5 class="mb-1">Ben Tortora</h5>
                           <div class="sub-text">CEO at Hire &amp; Retain</div>
                         </div>
                       </div>
                       <h4 class="title mb-3">
                         Just wanna shout out the whole team for this amazing
                         tool
                       </h4>
                       <p>
                         I love it! The simplicity of writing and designing in
                         one app 🎉 Makes social media marketing a breeze ❤️
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-xl-4 col-md-6">
                   <div class="card border-0 shadow-none rounded-4 bg-gradient-a">
                     <div class="card-body">
                       <div class="d-flex pb-5">
                         <div class="media media-lg media-middle media-lg rounded-pill">
                           <img src="/images/avatar/author/sm-n.jpg" alt="" />
                         </div>
                         <div class="media-info ms-3">
                           <h5 class="mb-1">Derek Gehl</h5>
                           <div class="sub-text">CEO at Hire &amp; Retain</div>
                         </div>
                       </div>
                       <h4 class="title mb-3">
                         Time Saving and Better Than PLR Content
                       </h4>
                       <p>
                         CpoyGen is a fantastic tool for writing product
                         descriptions and getting started on blog posts. No
                         longer do I have to stare at a blank screen trying to
                         figure out how to flesh out a topic beyond 50 words.
                         For me, CopyGen replaces buying PLR content that I
                         would similarly edit and personalize. This saves me
                         time because I can actually tailor to my keyword and
                         niche needs.
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-xl-4 col-md-6">
                   <div class="card border-0 shadow-none rounded-4 bg-gradient-a">
                     <div class="card-body">
                       <div class="d-flex pb-5">
                         <div class="media media-lg media-middle media-lg rounded-pill">
                           <img src="/images/avatar/author/sm-p.jpg" alt="" />
                         </div>
                         <div class="media-info ms-3">
                           <h5 class="mb-1">Martin Schoel</h5>
                           <div class="sub-text">CEO at Hire &amp; Retain</div>
                         </div>
                       </div>
                       <h4 class="title mb-3">
                         They&lsquo &lsquove hit a home run with this AI tool
                       </h4>
                       <p>
                         I was literally speechless from the originality of the
                         content that my very first CopyGen test was able to
                         produce from only a small sample of my original
                         content. I was anticipating useless gibberish, but was
                         instead genuinely dumbfounded. I stared at it in
                         amazement for a solid 3 minutes while the idea machine
                         in my head spun wildly, and I contemplated
                       </p>
                     </div>
                   </div>
                 </div>
                 <div class="col-xl-4 col-md-6">
                   <div class="card border-0 shadow-none rounded-4 bg-gradient-a">
                     <div class="card-body">
                       <div class="d-flex pb-5">
                         <div class="media media-lg media-middle media-lg rounded-pill">
                           <img src="/images/avatar/author/sm-o.jpg" alt="" />
                         </div>
                         <div class="media-info ms-3">
                           <h5 class="mb-1">Merri Evans</h5>
                           <div class="sub-text">CEO at Hire &amp; Retain</div>
                         </div>
                       </div>
                       <h4 class="title mb-3">
                         A year of organic marketing in about 30 minutes
                       </h4>
                       <p>
                         Writing articles has never been easier for me. Since I
                         started using CopyGen, I only need a few minutes 🎉
                       </p>
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