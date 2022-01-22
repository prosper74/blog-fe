import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "../../styles/coverswiper.css"
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core"

SwiperCore.use([EffectCoverflow, Pagination])

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="details">
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>
            <img
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/distance-learning-app-mockup.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="details">
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>
            <img
              src="https://img.freepik.com/free-psd/course-app-desgin_242034-22.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="details">
          <h2>Metrovatech</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button>View Project</button>

          <img
            src="https://img.freepik.com/free-psd/course-app-desgin_242034-22.jpg?size=626&ext=jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="details">
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>

            <img
              src="https://img.freepik.com/free-psd/course-app-desgin_242034-22.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="details">
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>

            <img
              src="https://img.freepik.com/free-psd/course-app-desgin_242034-22.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="details">
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>

            <img
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/distance-learning-app-mockup.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="details">
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>

            <img
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/distance-learning-app-mockup.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>

            <img
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/distance-learning-app-mockup.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h2>Metrovatech</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>View Project</button>

            <img
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/distance-learning-app-mockup.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
