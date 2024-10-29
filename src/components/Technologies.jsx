import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) =>({
    initial: { y: -10},
    animate: {
        y:[10, -10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-4xl text-center">TECHNOLOGIES</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-4">
                <TbBrandNextjs className="text-7xl"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(1.5)}
                className="p-4">
                <SiMongodb className="text-7xl text-cyan-500"/>
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}>
                <DiRedis className="text-red-700 text-7xl"/>
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}>
                <FaNodeJs className="text-green-500 text-7xl"/>
            </motion.div>
            <motion.div className="p-4"
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies
