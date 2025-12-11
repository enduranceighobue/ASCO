import Infinite3DCarousel from './Swiper'

const HeroSection = () => {
  return (
    <div className='about py-16 flex flex-col justify-center items-center gap-10'>
        <div className="text-center text-white max-w-4xl space-y-4">
            <h1 className='text-5xl font-bold'>About Ashaka Security Company (ASCO)</h1>
            <p className='text-xl'>Reliable, professional and technology-driven security solutions built on over five decades of excellence.</p>
        </div>
        <Infinite3DCarousel/>
    </div>
  )
}

export default HeroSection