import { fon_contact3 } from "../../assets/images"
import "./Contact.css"
import { FaWhatsapp, FaInstagram, FaTelegram, FaPhone, FaLocationArrow } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";


function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">

          <motion.div 
            className="contact-fon"
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.5}}
            custom={1}
            variants={slideInVariants("left", 0.6, 100, true)}
          >
            <img src={fon_contact3} alt="fon" />
          </motion.div>
          
          <div className="text-contact">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={1}
              variants={slideInVariants("top", 0.6, 100, true)}
            >
              Our contacts
            </motion.h1>
            <div className="tel">
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={1}
                variants={slideInVariants("right", 0.6, 100, true)}
              >
                <FaPhone/> Phone:
              </motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={1}
                variants={slideInVariants("left", 0.6, 100, true)}
              >
                +7 (777) 777 77 77
              </motion.p>
            </div>
            <div className="email">
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={2}
                variants={slideInVariants("right", 0.6, 100, true)}
              >
                <MdMarkEmailRead/> Email:
              </motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={2}
                variants={slideInVariants("left", 0.6, 100, true)}
              >
                asemoon_atelie@gmail.com
              </motion.p>
            </div>
            <div className="address">
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={3}
                variants={slideInVariants("right", 0.6, 100, true)}
              >
                <FaLocationArrow/> Official address:
              </motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={3}
                variants={slideInVariants("left", 0.6, 100, true)}
              >
                Kazakhstan, Atyrau
              </motion.p>
            </div>
            <div className="social">
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={4}
                variants={slideInVariants("right", 0.6, 100, true)}
              >
                <IoShareSocial/> Social:
              </motion.h4>
              <motion.a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              
              initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={4}
                variants={slideInVariants("left", 0.7, 100, true)}><FaInstagram/></motion.a>
              <motion.a href="https://t.me/+77777777777" target="_blank" rel="noopener noreferrer"
              
              initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={5}
                variants={slideInVariants("left", 0.8, 100, true)}><FaTelegram/></motion.a> 
              <motion.a href="https://wa.me/+77777777777" target="_blank" rel="noopener noreferrer"
              
              initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.5}}
                custom={6}
                variants={slideInVariants("left", 0.9, 100, true)}><FaWhatsapp/></motion.a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact