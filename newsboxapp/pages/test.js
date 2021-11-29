import { motion } from "framer-motion"

const test = () => {
const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.125,
        staggerChildren: 0.125
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x:0 }
    
  }
  
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
      <motion.li className='h-12 w-28 bg-green-500' variants={item} />
    </motion.ul>
  )
}
  export default test