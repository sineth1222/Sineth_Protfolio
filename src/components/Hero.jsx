import profilepic from "../assets/sin2.png"
//import profilepic from "/src/assets/background.jpg";

import { motion } from "framer-motion"
const containerVariants ={
    hidden: { opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5}}
}

const Hero = () => {
    //const profilepic = require("../assets/background.jpg");
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8">
                    <motion.img src={profilepic} alt="Profile" width={350} height={350} /*style={{ width: "250px", height: "250px" }}*/ className="border border-white rounded-3xl" initial={{ x: 100, opacity: 0}} animate={{ X: 0, opacity: 1}} transition={{ duration: 1, delay: 1.5}}/>
                    
                </div>
            </div>
            <div className="w-full lg:w-1/2">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants= {containerVariants}
                className="flex flex-col items-center mt-10 lg:items-start">
                <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">Sineth Mashenka</motion.h2>
                <motion.span variants={childVariants} className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text ">Full Stack Developer</motion.span>
                <p className="max-w-lg py-6 my-2 text-xl leading-relaxed tracking-tighter">
                I am an extremely hardworking and persisting ambitious individual with a great
                passion for the Software Engineer industry. I would like to improve myself
                dedicated worthful and energetic as an employee in a progressive organization
                that gives me scope to apply my knowledge and skill and experience, ultimately
                benefiting the operations of the organization that I work for.
                    
                </p>
                <a href="/resume1.pdf"
                    target="_blank"
                    rel="nooper noreferrer"
                    download
                    className="p-4 mb-10 text-sm text-white bg-red-600 rounded-full"
                >
                    DOWNLOARD RESUME
                </a>
            </motion.div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero