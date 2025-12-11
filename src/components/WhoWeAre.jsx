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
        <h1 className='text-center text-5xl font-bold'>Who We Are</h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 text-[#1D2140] text-xl">
            <p className='w-full lg:w-1/2'>Ashaka Security Company (ASCO) Limited is a Federal Government–licensed private security provider delivering professional, technology-driven security solutions across Nigeria. For more than five decades, we have supported organisations across multiple sectors with tailored protection services.</p>
            <p className='w-full lg:w-1/2'>Our operations combine trained personnel, advanced surveillance systems, and strong supervision standards to ensure the safety of people, property, and critical infrastructure</p>
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