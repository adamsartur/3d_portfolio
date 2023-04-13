import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa'

import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-12 flex flex-col gap-8 text-lg">
          <span className='flex items-center gap-[20px] hover:text-[#915eff]'><FaGithub size={40} /> <a href="https://github.com/adamsartur" target='_blank'>You can check me on github</a></span> 
          <span className='flex items-center gap-[20px] text-[#915eff] hover:text-white'><FaLinkedin size={40}  /> <a href="https://linkedin.com/in/arturadams/" target='_blank'>Connect on LinkedIn</a></span> 
          <span className='flex items-center gap-[20px] hover:text-[#915eff]'><FaMailBulk size={40}  /> <a href="mailto:adamsartur@gmail.com" target='_blank'>Reach me out!</a></span> 
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')