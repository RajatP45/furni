// // Slider.js
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const Slider = () => {
//   const renderArrowPrev = (clickHandler, hasPrev, label) =>
//   hasPrev && (
//     <button type="button" onClick={clickHandler} title={label} classNameName="prev">
//       <span classNameName="fa fa-chevron-left"></span>
//     </button>
//   );

// const renderArrowNext = (clickHandler, hasNext, label) =>
//   hasNext && (
//     <button type="button" onClick={clickHandler} title={label} classNameName="next">
//       <span classNameName="fa fa-chevron-right"></span>
//     </button>
//   );
//   return (
//     <div className="testimonial-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-7 mx-auto text-center">
//             <h2 className="section-title">Testimonials</h2>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-12">
//             <div className="testimonial-slider-wrap text-center">
//               <Carousel 
//                 autoPlay
//                 infiniteLoop
//                 showThumbs={false}
//                 renderArrowPrev={renderArrowPrev}
//                 renderArrowNext={renderArrowNext} >


//                 <div className="item">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-8 mx-auto">
//                       <div className="testimonial-block text-center">
//                         <blockquote className="mb-5">
//                           <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
//                         </blockquote>
//                         <div className="author-info">
//                           <div className="author-pic">
//                             <img src="../assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
//                           </div>
//                           <h3 className="font-weight-bold">Maria Jones</h3>
//                           <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- END item --> */}
//                 <div className="item">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-8 mx-auto">
//                       <div className="testimonial-block text-center">
//                         <blockquote className="mb-5">
//                           <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
//                         </blockquote>
//                         <div className="author-info">
//                           <div className="author-pic">
//                             <img src="../assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
//                           </div>
//                           <h3 className="font-weight-bold">Maria Jones</h3>
//                           <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- END item --> */}
//                 <div className="item">
//                   <div className="row justify-content-center">
//                     <div className="col-lg-8 mx-auto">
//                       <div className="testimonial-block text-center">
//                         <blockquote className="mb-5">
//                           <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
//                         </blockquote>
//                         <div className="author-info">
//                           <div className="author-pic">
//                             <img src="../assets/images/person-1.png" alt="Maria Jones" className="img-fluid" />
//                           </div>
//                           <h3 className="font-weight-bold">Maria Jones</h3>
//                           <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- END item --> */}

//               </Carousel>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Slider;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
     <div className="testimonial-section">
			  <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                <h2 className="section-title">Testimonials</h2>
                </div>
              </div>
             
          <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                classNameName="mySwiper"
              >
              <div className="row justify-content-center">
					        <div className="col-lg-12">
						        <div className="testimonial-slider-wrap text-center">
                    <div className="testimonial-slider">
                <SwiperSlide>	
                      <div className="item">
                          <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">

                              <div className="testimonial-block text-center">
                                <blockquote className="mb-5">
                                  <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                </blockquote>

                                <div className="author-info">
                                  <div className="author-pic">
                                    <img src="../assets/images/person-1.png" alt="Maria Jones" className="img-fluid test-img" />
                                  </div>
                                  <h3 className="font-weight-bold">Maria Jones</h3>
                                  <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                </div>
                              </div>

                            </div>
                          </div>
                      </div> 
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="../assets/images/person-1.png" alt="Maria Jones" className="img-fluid test-img" />
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
												</blockquote>
												<div className="author-info">
													<div className="author-pic">
														<img src="../assets/images/person-1.png" alt="Maria Jones" className="img-fluid test-img" />
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
                </SwiperSlide>
             </div>
          </div>
         </div>
       </div>
        </Swiper> 
        </div>
      </div>
    </>
  );
}
