import { Swiper, SwiperSlide } from "swiper/react"
import { serviceData } from "../../data/services"
import "./Services.css"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { motion } from "motion/react"
import { slideInVariants } from "../../utils/animation"


function Services() {
  return (
    <section className="section our-client" id="services">
            <div className="container flex-center">
                
                <div className="our-client-wrapper">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    loop={true}
                    className="client-swiper"
                  >
                    {serviceData.map(service => (
                      <SwiperSlide key={service.id}>
                        <div className="swiper-slide swiper-client-block">
                            <div className="client-img">
                                <motion.img src={service.imgSrc} alt={service.name}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{once: false, amount: 0.5}}
                                  custom={1}
                                  variants={slideInVariants("left", 0.6, 100, true)}
                                />
                            </div>
                            <div className="client-details">
                                <motion.h3
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{once: false, amount: 0.5}}
                                  custom={1}
                                  variants={slideInVariants("right", 0.6, 100, true)}
                                >
                                  {service.name}
                                </motion.h3>
                                <motion.p
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{once: false, amount: 0.5}}
                                  custom={2}
                                  variants={slideInVariants("right", 0.6, 100, true)}
                                >
                                  {service.description}
                                </motion.p>
              
                            </div>
                          </div>
                      </SwiperSlide>
                    ))}
                  </Swiper> 
                     
                </div>
            </div>
        </section>
  )
}

export default Services