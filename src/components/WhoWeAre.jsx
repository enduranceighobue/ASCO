import { useState, useRef, useEffect } from 'react';
import styles from "../Styles/counter.module.css";

const WhoWeAre = () => {
    const [stats, setStats] = useState({
    years: 0,
    cities: 0,
    personnel: 0,
  });

  const [animate, setAnimate] = useState({
    years: false,
    cities: false,
    personnel: false,
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = {
      years: 56,
      cities: 47,
      personnel: 100,
    };

    const durations = {
      years: 1500,
      cities: 1500,
      personnel: 1500
    };

    Object.keys(targets).forEach((key) => {
      let startValue = 0;
      const increment = targets[key] / (durations[key] / 150);

      const interval = setInterval(() => {
        startValue += Math.floor(Math.random() * (increment * 2));
        if (startValue >= targets[key]) {
          setStats((prevStats) => ({ ...prevStats, [key]: targets[key] }));
          clearInterval(interval);
        } else {
          setStats((prevStats) => ({
            ...prevStats,
            [key]: Math.min(startValue, targets[key]),
          }));
          setAnimate((prevAnimate) => ({
            ...prevAnimate,
            [key]: true,
          }));
        }
      }, 100);
    });
  };
  return (
    <div className=" py-16 bg-[#f1f5f9]">
        <div className='w-11/12 lg:w-9/12 mx-auto flex flex-col justify-center items-center gap-12 '>
     <div className="space-y-12">
        <h1 className='text-center md:text-5xl text-3xl font-bold'>Who We Are</h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 text-[#1D2140] md:text-xl">
           <div className='w-full lg:w-1/2'>
             <p className=''><strong className='text-[#0080bb]'>FASCO Nigeria</strong> is a formal strategic alliance between Field Security Services Group (fieldsecurityservices.com) and Ashaka Security Company Ltd. (Field Ashaka Security Company Nigeria) forged over 5 years of combined operations throughout Nigeria brings the strengths of both companys together for the benefit of our 
            international Client base.</p><br />
            <p><strong className='text-[#0080bb]'>FSS & ASCO Alliance</strong>  </p>
            <p> FASCO Nigerias’ strength lies in the combination of FSS Groups’ world-class and industry leading delivery of the highest calibre individuals, providing specialist and niche risk management services in challenging regions.</p>
           </div>
            
            <div className='w-full lg:w-1/2'>
              <p><strong className='text-[#0080bb]'>ASHAKA SECURITY COMPANY LIMITED</strong> is a Federal Government registered security company licensed in full compliance with decree No. 33 of 1985 for private security operations in Nigeria. It began the business of providing competent and efficient guard services with Nigerian Breweries, Iganmu in 1965 and has expanded to cover many other multinational, national and institutional organizations.</p>
            <p>with ASCOs’ team of highly professional, experienced, motivated and dedicated personnel, numbering over 10,000 spread across the entire Nigerian geography and providing security deliverables for over 48 years.</p>
            </div>
        </div>
     </div>
     <div className="flex flex-col md:flex-row space-y-4 md:space-y-0" ref={statsRef}>
        <div className="border-l border-l-[#0080BB] pl-4 pr-6  text-center">
            <p
                  className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold text-[#0080BB] ${
                    animate.years ? styles.spin : ""
                  }`}
                >
                  {stats.years}
                  <span className="">+</span>
                </p>
            <p className='font-medium'>Years of experience</p>
        </div>
        <div className="border-l border-l-[#0080BB] pl-4 pr-6 text-center">
            <h2 className='text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold text-[#0080BB]'>24/7</h2>
            <p className='font-medium'>Supervised Control Room</p>
        </div>
        <div className="border-l border-l-[#0080BB] pl-4 pr-6 text-center">
            <p
                  className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold text-[#0080BB] ${
                    animate.cities ? styles.spin : ""
                  }`}
                >
                  {stats.cities}
                  <span className="">+</span>
                </p>
            <p className='font-medium'>Cities Nationwide</p>
        </div>
        <div className="border-l border-l-[#0080BB] pl-4 pr-6 text-center">
            <p
                  className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold text-[#0080BB] ${
                    animate.personnel ? styles.spin : ""
                  }`}
                >
                  {stats.personnel}
                  <span className="">%</span>
                </p>
            <p className='font-medium'>Trained & Certified Personnel</p>
        </div>
     </div>
    </div>
    </div>
  )
}

export default WhoWeAre