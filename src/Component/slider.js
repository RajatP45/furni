// Slider.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  const renderArrowPrev = (clickHandler, hasPrev, label) =>
  hasPrev && (
    <button type="button" onClick={clickHandler} title={label} className="prev">
      <span className="fa fa-chevron-left"></span>
    </button>
  );

const renderArrowNext = (clickHandler, hasNext, label) =>
  hasNext && (
    <button type="button" onClick={clickHandler} title={label} className="next">
      <span className="fa fa-chevron-right"></span>
    </button>
  );
  return (
    <div class="testimonial-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto text-center">
            <h2 class="section-title">Testimonials</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="testimonial-slider-wrap text-center">
              <Carousel 
                autoPlay
                infiniteLoop
                showThumbs={false}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext} >


                <div class="item">
                  <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto">
                      <div class="testimonial-block text-center">
                        <blockquote class="mb-5">
                          <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                        </blockquote>
                        <div class="author-info">
                          <div class="author-pic">
                            <img src="../assets/images/person-1.png" alt="Maria Jones" class="img-fluid" />
                          </div>
                          <h3 class="font-weight-bold">Maria Jones</h3>
                          <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END item --> */}
                <div class="item">
                  <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto">
                      <div class="testimonial-block text-center">
                        <blockquote class="mb-5">
                          <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                        </blockquote>
                        <div class="author-info">
                          <div class="author-pic">
                            <img src="../assets/images/person-1.png" alt="Maria Jones" class="img-fluid" />
                          </div>
                          <h3 class="font-weight-bold">Maria Jones</h3>
                          <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END item --> */}
                <div class="item">
                  <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto">
                      <div class="testimonial-block text-center">
                        <blockquote class="mb-5">
                          <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                        </blockquote>
                        <div class="author-info">
                          <div class="author-pic">
                            <img src="../assets/images/person-1.png" alt="Maria Jones" class="img-fluid" />
                          </div>
                          <h3 class="font-weight-bold">Maria Jones</h3>
                          <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END item --> */}

              </Carousel>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Slider;
