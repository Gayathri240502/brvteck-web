import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import icon1 from '/public/images/icons/icon_c.svg';
import icon2 from '/public/images/icons/icon_g2.svg';
import tImg1 from '/public/images/avatar/avatar_5.webp';
import tImg2 from '/public/images/avatar/avatar_6.webp';
import tImg3 from '/public/images/avatar/avatar_7.webp';
import clogo from '/public/images/clients/client_logo_8.webp';
import flag from '/public/images/flag/ukraine_flag.webp';

// Updated testimonials array
const testimonials = [
  {
    id: '01',
    tImg: tImg1,
    Title: 'Amazing software services',
    Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
    Name: 'Maverick Phoenix',
    sub: 'Board Member, UNIQA',
    country: 'Seattle, Ukraine',
  },
  {
    id: '02',
    tImg: tImg2,
    Title: 'Professional and Skilled Team',
    Des: "The team delivered exactly what we needed. Their professionalism and timely delivery helped us achieve our goals faster.",
    Name: 'Anjali Mehta',
    sub: 'Founder, SaaS Startup',
    country: 'Hyderabad, India',
  },
  {
    id: '03',
    tImg: tImg3,
    Title: 'Trusted Technology Partner',
    Des: "BRVTeck proved to be a dependable technology partner. Their expertise significantly improved our operational efficiency.",
    Name: 'Sandeep Iyer',
    sub: 'Operations Manager, IT Services Firm',
    country: 'Pune, India',
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="row">
      {/* Left Side Info */}
      <div className="col-lg-4">
        <div className="deals_winner_customers">
          <h3 className="title_text">
            <mark>3,900+</mark> customers win deals with Techco
          </h3>
          <div className="row">
            <div className="col-6">
              <div className="review_short_info">
                <div className="icon">
                  <Image src={icon1} alt="C SVG Icon" />
                </div>
                <ul className="rating_block unordered_list">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}><i className="fa-solid fa-star fa-fw"></i></li>
                  ))}
                </ul>
                <div className="review_counter">From <b>200+</b> reviews</div>
              </div>
            </div>
            <div className="col-6">
              <div className="review_short_info">
                <div className="icon">
                  <Image src={icon2} alt="G SVG Icon" />
                </div>
                <ul className="rating_block unordered_list">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}><i className="fa-solid fa-star fa-fw"></i></li>
                  ))}
                </ul>
                <div className="review_counter">From <b>300+</b> reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Carousel */}
      <div className="col-lg-8">
        <div className="review_onecol_wrapper">
          <div className="review_onecol_carousel">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              speed={1800}
              parallax={true}
              ref={swiperRef}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="review_block_2">
                    <h3 className="review_title">“{item.Title}”</h3>
                    <p className="review_commtent">{item.Des}</p>
                    <div className="d-md-flex justify-content-md-between">
                      <div className="review_admin">
                        <div className="review_admin_image">
                          <Image src={item.tImg} alt={item.Name} />
                        </div>
                        <div className="review_admin_info">
                          <h4 className="review_admin_name">{item.Name}</h4>
                          <span className="review_admin_designation">{item.sub}</span>
                          <div className="review_admin_country">
                            <span className="country_flag">
                              <Image src={flag} alt="Country Flag" />
                            </span>
                            <span className="country_text">{item.country}</span>
                          </div>
                        </div>
                      </div>
                      <div className="review_admin_logo">
                        <Image src={clogo} alt="Client Logo" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="carousel_arrows_nav">
              <button ref={prevRef} type="button" className="r1cc-swiper-button-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button ref={nextRef} type="button" className="r1cc-swiper-button-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
