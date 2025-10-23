import { motion } from "motion/react"
import { about1, about, logo1 } from "../../assets/images"
import "./About.css"
import { slideInVariants } from "../../utils/animation"


function About() {
  return (
    <section className="about" id="about">
            <div className="container">

              <div className="about-content">
                <motion.div 
                  className="about-left-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={1}
                  variants={slideInVariants("left", 0.6, 100, true)}
                >
                  <img src={about} alt="" />
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    custom={2}
                    variants={slideInVariants("left", 0.9, 100, true)}
                  >
                    Confidence Tailored for You
                  </motion.h3>
                  <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={3}
                  variants={slideInVariants("left", 0.6, 100, true)}
                  >
                    Clothes that fit perfectly change the way you feel. Our goal is to give you that confidence in every look.
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="about-right-column"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={1}
                  variants={slideInVariants("right", 0.6, 100, true)}
                >
                  <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    custom={1}
                    variants={slideInVariants("right", 0.9, 100, true)}
                  >
                    Tailored to Your Story
                  </motion.h3>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    custom={1}
                    variants={slideInVariants("right", 0.6, 100, true)}
                  >
                    From the initial consultation to the final fitting, your experience at AseMoon is a journey in which you are a co-creator. We listen, advise and bring your ideas to perfection.
                  </motion.p>
                  <img src={about1} alt="" />
                </motion.div>
              </div>

              <div className="about-footer">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={3}
                  variants={slideInVariants("top", 0.6, 100, true)}
                >
                  Our Promise
                </motion.h2>
                <motion.h4
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={2}
                  variants={slideInVariants("top", 0.6, 100, true)}
                >
                  AseMoon Atelier: Crafted with Passion, Tailored for You.
                </motion.h4>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={1}
                  variants={slideInVariants("top", 0.6, 100, true)}
                >
                  Experience the difference. From minor alteration to bespoke masterpiece, we are dedicating our sartorial dreams to life.
                </motion.p>
                <motion.img src={logo1} alt="logo" 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={1}
                  variants={slideInVariants("bottom", 0.6, 100, true)}
                />
              </div>
            </div>
    </section>
  )
}

export default About