
import { motion } from "motion/react";
import { fon } from "../../assets/images"
import "./Home.css"
import { FaCircleArrowRight, FaArrowDown } from "react-icons/fa6";
import { slideInVariants } from "../../utils/animation";



function Home() {
  return (
    <section className="home" id="home">
            <div className="container home-wrapper">

                <div className="home-info">
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false, amount: 0.5}}
                      custom={0}
                      variants={slideInVariants("left", 0.6, 100, true)}
                    >
                      Your Style Starts Here.
                    </motion.h1>
                    <motion.h3
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false, amount: 0.5}}
                      custom={1}
                      variants={slideInVariants("left", 0.6, 100, true)}
                    >
                      Dream it. We sew it.
                    </motion.h3>
                    <motion.h3
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false, amount: 0.5}}
                      custom={2}
                      variants={slideInVariants("left", 0.6, 100, true)}
                    >
                      Precision, passion, and unique personalization.
                    </motion.h3>
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false, amount: 0.5}}
                      custom={3}
                      variants={slideInVariants("left", 0.6, 100, true)}
                    >
                      Tailoring the extraordinary.
                    </motion.p>
                    <motion.a  
                      href="https://wa.me/+77777777777" target="_blank" rel="noopener noreferrer" 
                      className="home-info-link inner-info-link"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false, amount: 0.5}}
                      custom={1}
                      variants={slideInVariants("right", 0.6, 100, true)}
                    >
                      <div className="ii">
                        Contact me
                        <FaCircleArrowRight className="i" />
                      </div>  
                    </motion.a>
                </div>

                <motion.div 
                  className="home-img"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={0}
                  variants={slideInVariants("right", 0.6, 100, true)}
                  >
                    <img src={fon} alt="fon2"/>
                </motion.div>
            </div>
            
            <a href="#about" className="scroll-down">
                Scroll down
                <FaArrowDown className="i" />
            </a>
        </section>
  )
}

export default Home