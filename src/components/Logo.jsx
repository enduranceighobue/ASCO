import { motion } from "framer-motion";
import logo from "../assets/logoicon.svg";

export default function Logo() {
  


  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#1D2140]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex items-center text-[#d3e97a] font-bold"
      >
        

        <img src={logo} className="animate__animated animate__heartBeat w-40 h-35" alt="" />

        
      </motion.div>
    </div>
  );
}

//  <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           type: "spring",
//           stiffness: 30,
//           damping: 50,
//         }}