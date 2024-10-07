import './HeroSection2.css'
import { motion } from 'framer-motion';

const HeroSection2 = () => {
  return (
    <div className='hero-section2-main-container'>
   <motion.div
        className='text-container'
        initial={{ opacity: 0, y: 100 }} // Initial state for text
        whileInView={{ opacity: 1, y: 0 }} // State when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true,amount: 0.5 }} // Animate only once
      >
        <h1>Empowering creators to grow, collaborate and earn</h1>
        <p>
          Boost your social media engagement, collaborate with top brands and
          monetize 100% of your content with Wishlink
        </p>
      </motion.div>

    <div className='img-container'>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc171ac271060d2866cf63_deekshakhurana%20(1)%201.webp' loading='lazy' className='img-control'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719faf12d395160239f_Asset%20489.webp' loading='lazy' className='img-control2'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17193d1183348916eaa1_Asset%20509.webp' loading='lazy' className='img-control3'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17193d1183348916eaa1_Asset%20509.webp' loading='lazy' className='img-control4'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17195af0e83d1d936ca5_love.webp' loading='lazy' className='img-control5'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17195af0e83d1d936ca5_love.webp' loading='lazy' className='img-control6'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17190fc889827cccee32_smile%20(1).webp' loading='lazy' className='img-control7'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17197aaa3991416f81a0_verified.webp' loading='lazy' className='img-control8'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719716ef3650c4634f7_smiling.webp' loading='lazy' className='img-control9'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719716ef3650c46358b_Asset%20539.webp' loading='lazy' className='img-control10'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17194643976d3d9f4718_Asset%20499.webp' loading='lazy' className='img-control11'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc18876078478fb6494ba2_Asset%20579.webp' loading='lazy' className='img-control12'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17197a5cb636d80a1f1e_Asset%20559.webp' loading='lazy' className='img-control13'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719949c024a2f53d7cb_Asset%20529.webp' loading='lazy' className='img-control14'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719c1bd7b2d429f8860_Asset%20519.webp' loading='lazy' className='img-control15'/>
        <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc171971e837714b459eed_Asset%20549.webp' loading='lazy' className='img-control16'/>
    </div>

    </div>
  )
}

export default HeroSection2